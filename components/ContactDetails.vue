<template>
  <div class="bg-gray-200 p-5 rounded-md">
    <div class="icons py-2 px-3 inline-block rounded-full bg-gray-300">
        <i :class="`fas fa-${i} text-blue-600`"></i>
    </div>
    <div class="content">
        <h3 class="font-bold mt-3">{{ title1 }}</h3>
        <p class="text-xs my-2 text-gray-600 lowercase">{{ title2 }}</p>
        <p class="text-xs text-gray-600 lowercase">{{ title3 }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['title1', 'title2', 'title3', 'i'])
</script>

<style>

</style>