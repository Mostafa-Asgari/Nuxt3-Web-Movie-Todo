<template>
  <section class="bg-stone-200 px-5 py-6">
    <div class="">
      <img src="@/assets/images/course-7.png" class="w-[30%]" alt="course-1">
    </div>
    <h3 class="font-bold text-base">{{ title }}</h3>
    <p class="text-[0.9rem] text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing.</p>
    <a href="#" class="btn">read more</a>
  </section>
</template>

<script setup>
defineProps(['srcImg', 'title'])
</script>

<style scoped>
img{margin: 0 auto 1rem;}
</style>