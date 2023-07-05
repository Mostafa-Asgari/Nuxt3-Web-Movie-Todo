<template>
  <div class="add">
    <h1>Add Todo Page</h1>

    <div class="addtodo bg-stone-200 mx-auto w-[60%] mt-10 rounded shadow-[0_4px_8px_rgba(0,0,0,0.6)] p-5">
        <h1 class="txt pb-3 mb-6 border-b-2 border-amber-400 uppercase font-bold text-4xl text-amber-400 text-center">add todo</h1>

        <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center w-full">
                  <form class="w-full relative z-10" @submit.prevent="subFunc">
                        <div class="relative mb-4">
                          <label class="font-medium text-gray-600 mb-1 block" for="title">تیم :</label>
                          <input v-model="title" placeholder="نام تیم و مربی" id="title" type="text" class="border placeholder-gray-400 focus:outline-none
                            focus:border-indigo-600 w-full pt-3 pr-4 pb-3 pl-4 mr-0 ml-0 text-base block bg-white
                            border-gray-300 rounded-md" />
                          <p class="text-base text-red-500 font-bold" v-if="show1">لطفا نام تیم مورد نظر و مربی آن را وارد کنید.</p>
                        </div>
                        <div class="relative mb-4">
                          <label class="font-medium text-gray-600 mb-1 block" for="stars">ستاره ها :</label>
                          <input v-model="stars" placeholder="ستاره های تیم" id="stars" type="text" class="border placeholder-gray-400 focus:outline-none
                            focus:border-indigo-600 w-full pt-3 pr-4 pb-3 pl-4 mr-0 ml-0 text-base block bg-white
                            border-gray-300 rounded-md" />
                          <p class="text-base text-red-500 font-bold" v-if="show2">لطفا نام بازیکنان تیم مورد نظر را وارد کنید.</p>
                        </div>
                        <div class="relative">
                          <button class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                            rounded-lg active:bg-indigo-950 transition duration-200 hover:bg-indigo-600 ease uppercase">add todo</button>
                        </div>
                  </form>
                </div>
        </div>

    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const axios = useNuxtApp().$axios
const show1 = ref(false)
const show2 = ref(false)
const title = ref('')
const stars = ref('')
const subFunc = () => {
  if(title.value !== '' && stars.value !== ''){
    axios.post(`http://localhost:3000/teams`, {
      title: title.value,
      stars: stars.value,
      computed: false
    }).then(() => router.push('/products/todo'))

    title.value = ''
    stars.value = ''

  }
  title.value === '' ? show1.value = true : show1.value = false
  stars.value === '' ? show2.value = true : show2.value = false
  

}


</script>

<style lang="scss">
 .add{
    width: 100%;height: 100vh;
    background: url('@/assets/images/18.jpg') no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-color: #888;
    background-blend-mode: multiply;

    .txt{
      text-shadow: 0 2px 4px rgba(250, 22, 22, 0.6);
    }
 }
</style>