<template>
  <div>
    <!-- <h1 class="main-title text-5xl">بسم الله الرحمن الرحیم</h1><hr> -->
    
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
  @font-face{
    font-family: 'Yekan';
    src: url('@/assets/fonts/Yekan.ttf');
  }
  *{
    direction: rtl;
    font-family: 'Yekan', Arial;
    padding: 0;margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
    transition: all 0.3s linear;
    text-transform: capitalize;
  }
  .main-title{
    text-align: center;
    color: rgb(17, 194, 17);
  }
</style>