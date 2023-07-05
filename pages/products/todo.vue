<template>
  <div class="movies">
      <h1 class="text-gray-50 text-3xl pr-5 pt-5">تودو لیست</h1>
      <hr>
      <!-- ------- Pinia -------- -->
      <div class="mb-4 text-center flex flex-col align-center justify-center w-[60%] mx-auto">
        <h1 class="text-amber-300 font-bold text-2xl mb-2">{{ store.num }}</h1>
        <div class="">
          <button @click="store.inc" class="text-[#fff] rounded border-none cursor-pointer w-16 py-1 ml-1 bg-blue-500 active:bg-blue-700">+</button>
          <button @click="store.dec" class="text-[#fff] rounded border-none cursor-pointer w-16 py-1 ml-1 bg-red-500 active:bg-red-700">-</button>
        </div>
        <div class="w-full text-center">
          <button @click="store.double" class="mx-auto text-[#fff] rounded border-none cursor-pointer w-16 py-1 ml-1 bg-green-500 active:bg-green-800 mt-2">double</button>
          <button @click="store.res" class="mx-auto text-[#fff] rounded border-none cursor-pointer w-16 py-1 ml-1 bg-rose-500 active:bg-rose-800 mt-2">reset</button>
        </div>
      </div>
      <!-- ---------------------- -->

      <div class="bg-gray-50 rounded shadow-lg w-[80%] mx-auto px-4 py-8">
        <h1 class="txt uppercase font-bold text-4xl text-amber-400 text-center">todo list</h1>
        <NuxtLink to="/products/addTodo">
          <button class="btn">اضافه کردن تودو</button>
        </NuxtLink>
        <div class="" v-for="team in store.teams" :key="team.id">
          <Teams :team="team" />
        </div>
      </div>
  </div>
</template>
  
<script setup>
  import Teams from '@/components/Teams'
  import { useCounterStore } from '@/store/counter';
  const store = useCounterStore();
  onMounted(() => store.getTeams())
  // store.getTeams()

  const show = ref(false)
</script>
  
<style lang="scss" scoped>
  .movies{
    width: 100%;
    // height: 100vh;
    padding: 0 0 6rem;
    background: url('@/assets/images/2.jpg') no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-color: #978b8b;
    background-blend-mode: multiply;

    .txt{
      text-shadow: 0 2px 4px rgba(250, 22, 22, 0.6);
    }

  }
</style>