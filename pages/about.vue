<template>
  <div class="about">
    <h1 class="title-in-page px-[5%] py-8 text-left text-2xl font-bold">about us</h1>
    <section class="flex flex-col md:flex-row md:flex items-center py-10">
        <div class="content w-full md:w-[50%] text-left py-0 px-8 md:pl-8 md:pr-12">
          <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">i will stay with you until you pass your exam</h3>
          <p class="leading-[1.7]">Lorem ipsum dolor sit amet dolor sit amet consectetur adipisicing consectetur adipisicing elit Repudiandae.</p>
          <a href="#" class="btn">learn more</a>
        </div>
        <div class="image w-full md:w-[50%] px-14 md:pl-12 mb-8 md:mb-0">
          <img src="@/assets/images/about-img.png" class="w-full mx-auto" alt="home banner">
        </div>
    </section>
  </div>
</template>

<script setup>

</script>

<style>
  .title-in-page{
    background: url('@/assets/images/heading-bg.png') no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>