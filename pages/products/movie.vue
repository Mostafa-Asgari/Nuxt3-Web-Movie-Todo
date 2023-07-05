<template>
  <div class="movies">

    <div class="w-[60%] mx-auto py-5">
      <h1 class="shadow-[0_4px_8px_rgba(0,0,0,0.5)] max-sm:text-base text-lg sm:text-2xl text-gray-50 text-center w-full bg-green-800 py-4">جستجوی فیلم های خارجی</h1>
    
      <div class="w-full h-[24rem] relative shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
        <img src="@/assets/images/naruto3.jpg" class="w-full object-cover h-full" alt="Naruto Movie">
        <div class="absolute bottom-0 right-0 z-1 p-5 text-stone-50 text-left" style="background: rgba(0,0,0,0.7);">
          <h1 class="text-base sm:text-2xl font-bold mb-2">naruto</h1>
          <p class="text-[13px] leading-[1.6]">Naruto is a Japanese manga (comic or graphic novel) adventure series that was originally published in print from 1999 to 2014. The story follows a young ninja, Naruto Uzumaki, on his journey to become the Hokage, or head ninja, of his village</p>
        </div>
      </div>

      <form @submit.prevent="submitFunc" class="flex max-sm:flex-col text-center mt-6 px-5">
        <input type="submit" class="font-bold py-[11px] cursor-pointer px-6 w-[30%] rounded-r-md bg-green-800 text-gray-50 hover:bg-green-600 active:bg-green-950 max-sm:order-2 max-sm:rounded max-sm:w-[60%] max-sm:mx-auto" value="search">
        <input type="text" v-model="movieInput" class="bg-grey-lighten-5 p-2 rounded-l-md outline-none border border-1 w-full max-sm:order-1 max-sm:rounded max-sm:mb-2" placeholder="جستجوی فیلم مورد نظر..." autofocus>
      </form>

      <div class="list-movies mt-14 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        <NuxtLink to="/products/tt6443346" class="movie-box rounded-md overflow-hidden h-[25rem] relative">
          <img src="@/assets/images/BlackAdam.jpg" class="w-full h-[70%]" alt="Black Adam Movie">
          <div class="content p-5 w-full h-[30%] bg-blue-400 text-left bg-gradient-to-r from-blue-950 to-teal-500">
            <h1 class="title mb-2 font-bold text-xl text-amber-500">black adam - <span class="text-xs">2022</span></h1>
            <p class="actors text-xs text-gray-50 italic">Dwayne Johnson, Aldis Hodge, Pierce Brosnan</p>
          </div>
          <div class="px-3 py-2 bg-emerald-400 text-gray-50 absolute left-0 top-[10%] z-10">movie</div>
          <div class="movie-info flex justify-center items-center w-full h-full top-[-110%]  absolute z-10" style="background: rgba(0,0,0,0.7);">
            <span class="text-gray-50 text-xl font-bold px-8 py-2 rounded border-2 border-rose-600 hover:bg-rose-600">اطلاعات فیلم</span>
          </div>
        </NuxtLink>

        <NuxtLink :to="`/products/${movie.imdbID}`" v-for="movie in movies" :key="movie.imdbID" class="movie-box rounded-md overflow-hidden h-[25rem] relative">
          <img :src="movie.Poster" class="w-full h-[70%]" alt="img movie">
          <div class="content p-5 w-full h-[30%] bg-blue-400 text-left bg-gradient-to-r from-blue-950 to-teal-500">
            <h1 class="title mb-2 font-bold text-xl text-amber-500">{{ movie.Title }} - <span class="text-xs">{{ movie.Year }}</span></h1>
            <p class="actors text-xs text-gray-50 italic">{{ movie.Actors }}</p>
          </div>
          <div class="px-3 py-2 bg-emerald-400 text-gray-50 absolute left-0 top-[10%] z-10">{{ movie.Type }}</div>
          <div class="movie-info flex justify-center items-center w-full h-full top-[-110%]  absolute top-0 z-10" style="background: rgba(0,0,0,0.7);">
            <span class="text-gray-50 text-xl font-bold px-8 py-2 rounded border-2 border-rose-600 hover:bg-rose-600">اطلاعات فیلم</span>
          </div>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>
  
<script setup>
const axios = useNuxtApp().$axios
const show = ref(false)
const movieInput = ref('')
// const movies = ref([]);
const movies = ref(JSON.parse(localStorage.getItem('films')));
// const films = 'todo_storage'
const submitFunc = () => {
  if(movieInput.value !== ''){
    axios.get(`http://www.omdbapi.com/?t=${movieInput.value}&apikey=78df7a37`)
      .then(res => {
        show.value = true
        // movieInput.value = res.data
        movies.value.push(res.data)
        console.log(res.data);
        localStorage.setItem('films', JSON.stringify(movies.value))
      })
  
    movieInput.value = ''
    // movieInput.value.focus()
  } else {
    alert('نام فیلم مورد نظر خود را وارد کنید')
  }

}
if(movieInput === ''){
  show.value = false
}


</script>
  
<style lang="scss" scoped>
  *::selection{
    color: #fff;
    background: rgb(17, 97, 17);
  }
  .movies{
    width: 100%;
    background: url('@/assets/images/2.jpg') no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #978b8b;
    background-blend-mode: multiply;
    background-attachment: fixed;
    .list-movies .title{
      span{
        font-family: Arial !important;
      }
    }

    .movie-box:hover .movie-info{
      top: 0;
    }
  }
</style>