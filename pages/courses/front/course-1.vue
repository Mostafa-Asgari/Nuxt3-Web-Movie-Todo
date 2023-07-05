<template>
  <div class="">
    <h1 class="title-in-page px-[5%] py-8 text-left text-2xl font-bold">course-1 (vue js)</h1>
  
    <div class="course1 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 px-[5%] py-4 text-center">
      <Course1Details srcImg="@/assets/images/course-1.png" title="web design" />
      <Course1Details srcImg="@/assets/images/course-2.png" title="seo marketing" />
      <Course1Details srcImg="@/assets/images/course-3.png" title="science & biology" />
      <Course1Details srcImg="@/assets/images/course-4.png" title="music & dance" />
      <Course1Details srcImg="@/assets/images/course-5.png" title="digital marketing" />
      <Course1Details srcImg="@/assets/images/course-6.png" title="maths & statistics" />
      <Course1Details srcImg="@/assets/images/course-7.png" title="data analysis" />
      <Course1Details srcImg="@/assets/images/course-8.png" title="email marketing" />
      <Course1Details srcImg="@/assets/images/course-9.png" title="graphic design" class="last" />
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Course-1 (Vue js)'
  })
</script>

<style>

</style>