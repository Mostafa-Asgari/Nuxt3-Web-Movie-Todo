<template>
  <div class="edit">
    <h1>edit todo page</h1>
    <h1 class="text-stone-50 mr-6 text-xl">params is : <span class="font-bold text-rose-600 text-2xl">{{ useRoute().params.id }}</span></h1>
    
    <div class="container mx-auto py-4 mt-6">
            <h1 class="txt mb-4 uppercase font-bold text-4xl text-amber-400 text-center">edit todo</h1>
            <form @submit.prevent="editFunc" class="w-[50%] mx-auto bg-stone-200 p-8 rounded-md shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="title">تیم :</label>
                    <input v-model="title" class="bg-slate-50 text-green-400 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    type="text" id="title" name="title" placeholder="تیم">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="stars">ستاره ها :</label>
                    <input v-model="stars" class="bg-slate-50 text-green-400 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    type="text" id="stars" name="stars" placeholder="ستاره ها">
                </div>
                <button
                    class="w-full uppercase bg-green-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-green-500 active:bg-green-800 transition duration-300"
                    type="submit">edit todo</button>
            </form>
    </div>

  </div>
</template>

<script setup>
const axios = useNuxtApp().$axios
const router = useRouter()
const id = useRoute().params.id
const title = ref('')
const stars = ref('')

onMounted(() => {
  axios.get(`http://localhost:3000/teams/${id}`)
   .then(res => {
    title.value = res.data.title,
    stars.value = res.data.stars
   })
})
const editFunc = () => {
  axios.patch(`http://localhost:3000/teams/${id}`, {
    title: title.value,
    stars: stars.value,
    computed: false
  }).then(() => router.push('/products/todo'))
    .catch(err => console.log(err.message))
}

</script>

<style lang="scss">
 .edit{
    width: 100%;height: 100vh;
    background: url('@/assets/images/10.jpg') no-repeat;
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