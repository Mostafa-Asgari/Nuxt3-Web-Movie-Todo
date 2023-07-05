<template>
  <div class="">
    <h1 class="title-in-page px-[5%] py-8 text-left text-2xl font-bold">course-2 (nuxt js)</h1>

    <div class="course2 grid grid-cols-3 max-md:grid-cols-2 max-[576px]:grid-cols-1 gap-2 px-[5%] py-4 text-left">
      <Course2Details title="business" />
      <Course2Details title="language" />
      <Course2Details title="development" />
      <Course2Details title="teaching" />
      <Course2Details title="designing" />
      <Course2Details title="speaking" />
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Course-2 (Nuxt js)'
  })
</script>

<style>

</style>