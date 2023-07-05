<template>
    <div class="">
        <div class="movie-info relative">
            <!-- <h1>
                URL params : 
                <span class="font-bold text-2xl text-rose-800">{{ id }}</span>
            </h1> -->

            <img :src="movie.Poster" class="w-full h-[75rem] brightness-50" alt="Movie Image">
            <div class="info absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-left content w-[70%] mx-auto shadow-lg shadow-green-400/40">
                <button
                    type="button"
                    data-te-ripple-init
                    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Button
                </button>
                <v-btn class="bg-green">کلیک</v-btn>
                <h1 class="text-left text-3xl font-bold text-amber-400 bg-gradient-to-r from-emerald-600 to-cyan-500 p-5">{{ movie.Title }} 
                    <span class="ml-2 text-[1rem] text-stone-800 italic p-2 bg-green-300 hover:bg-green-500 rounded">{{ movie.Year }}</span>
                </h1>
                <!-- <img :src="movie.Poster" class="w-full h-[50vh]" alt="movie img"> -->
                <div class="px-5 py-8 bg-[rgba(0,0,0,0.6)]">
                    <span class="text-sm text-amber-400 text-left border-b border-amber-400 pb-2">: story </span>
                    <h1 class="mt-6 mb-9 text-green-300 text-lg sm:text-[1.2rem] leading-[1.6]">{{ movie.Plot }}</h1>
                
                    <span class="text-sm text-amber-400 text-left border-b border-amber-400 pb-2">: actors </span>
                    <h1 class="mm mt-6 mb-9 text-md leading-[1.5] text-gray-300 italic">{{ movie.Actors }}</h1>
                    
                    <span class="text-sm text-amber-400 text-left border-b border-amber-400 pb-2">: director </span>
                    <h1 class="mm mt-6 mb-9 text-md leading-[1.5] text-gray-300 italic">{{ movie.Director }}</h1>
                    
                    
                    <span class="text-sm text-amber-400 text-left border-b border-amber-400 pb-2">: writer </span>
                    <h1 class="mm mt-6 mb-9 text-md leading-[1.5] text-gray-300 italic">{{ movie.Writer }}</h1>
                    
                    <span class="text-sm text-amber-400 text-left border-b border-amber-400 pb-2">: awards </span>
                    <h1 class="mm mt-6 mb-9 text-md leading-[1.5] text-gray-300 italic">{{ movie.Awards }}</h1>
                    
                    <div class="flex justify-between items-center">
                        <div class="">
                            <span class="text-sm text-amber-400 text-left border-b border-amber-400 pb-2">: box office </span>
                            <h1 class="mm mt-6 mb-9 text-md leading-[1.5] text-gray-300 italic">{{ movie.BoxOffice }}</h1>
                        </div>
                        
                        <div class="">
                            <span class="text-sm text-amber-400 text-left border-b border-amber-400 pb-2">: country </span>
                            <h1 class="mm mt-6 mb-9 text-md leading-[1.5] text-gray-300 italic">{{ movie.Country }}</h1>
                        </div>
                        
                        <div class="">
                            <span class="text-sm text-amber-400 text-left border-b border-amber-400 pb-2">: IMDB Rating </span>
                            <h1 class="mm mt-6 mb-9 text-md leading-[1.5] text-gray-300 italic">{{ movie.imdbRating }}</h1>
                        </div>
                    </div>

                    <div class="flex justify-between border-t border-green-300 pt-6">
                        <div>
                            <span class="ml-2 font-bold text-[1rem] text-stone-800 italic p-2 bg-green-300 hover:bg-green-500 rounded lowercase">{{ movie.Runtime }}</span>
                        </div>
                        <div>
                            <span class="ml-2 font-bold text-[1rem] text-stone-800 italic p-2 bg-green-300 hover:bg-green-500 rounded">{{ movie.Released }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        
        <!-- <div class="text-center" v-else>
            <h1 class="text-5xl text-green-400">page is loading...</h1>
        </div> -->
    </div>
</template>

<script setup>
// const route = useRoute()
const id = useRoute().params.id
const axios = useNuxtApp().$axios
const movie = ref([])
const before = ref('')


// onBeforeMount(() => {before.value = 'page is loading...'})
onMounted(() => {
    axios.get(`http://www.omdbapi.com/?i=${id}&apikey=78df7a37`)
      .then(res => {
        movie.value = res.data
      })
})

</script>

<style lang="scss" scoped>
*{
    font-family: Arial !important;
}
 .movie-info{
    background-color: #ccc !important;
    background-blend-mode: multiply !important;
    .content span{
        font-family: Arial !important;
    }
    .mm{
        text-shadow: 0 2px 4px rgba(255, 251, 4, 0.8);
    }
 }
</style>