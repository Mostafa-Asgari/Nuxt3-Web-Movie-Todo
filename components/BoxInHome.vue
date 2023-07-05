<template>
  <div class="subjects bg-stone-200 px-9 py-7 mb-8 justify-center text-center">
    <img src="@/assets/images/category-5.png" class="mx-auto">
    <h5 class="font-bold text-[0.8rem] mt-4">{{ title }}</h5>
  </div>
</template>

<script setup>
  defineProps(['imgBox', 'title', 'demo'])
</script>

<style>

</style>