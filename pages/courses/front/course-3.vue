<template>
  <div class="">
    <h1 class="title-in-page px-[5%] py-8 text-left text-2xl font-bold">course-3 (javascript)</h1>
    
    <div class="px-[5%] py-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-center">
      <div class="border rounded">
        <VideoC3Details show="show" @click="showFunc" vd="@/assets/images/course-vid-1.mp4" />
        <Course3Details class="vid" />
      </div>
      <div class="border rounded">
        <VideoC3Details show="show" @click="showFunc" vd="@/assets/images/course-vid-2.mp4" />
        <Course3Details class="vid" />
      </div>
      <div class="border rounded">
        <VideoC3Details show="show" @click="showFunc" vd="@/assets/images/course-vid-3.mp4" />
        <Course3Details class="vid" />
      </div>
      <div class="border rounded">
        <VideoC3Details show="show" @click="showFunc" vd="@/assets/images/course-vid-4.mp4" />
        <Course3Details class="vid" />
      </div>
      <div class="border rounded">
        <VideoC3Details show="show" @click="showFunc" vd="@/assets/images/course-vid-5.mp4" />
        <Course3Details class="vid" />
      </div>
      <div class="border rounded">
        <VideoC3Details show="show" @click="showFunc" vd="@/assets/images/course-vid-6.mp4" />
        <Course3Details class="vid" />
      </div>
    </div>

    <div class="fullscreen-video w-screen h-screen" v-if="show" @click.self="showFunc">
      <i class="fa fa-times cursor-pointer text-[#fff] text-3xl" @click="showFunc"></i>
      <video src="@/assets/images/course-vid-6.mp4" autoplay controls></video>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Course-3 (Javascript)'
  })
  const show = ref(false)
  const showFunc = () => show.value = !show.value
</script>

<style>
.fullscreen-video{
  position: fixed;background: rgba(0,0,0,0.7);
  top: 0;right: 0;left: 0;
  z-index: 110;
  display: flex;
  align-content: center;
  justify-content: center;
  /* display: none; */
}
/* .fullscreen-video.active{display: flex;} */
.fullscreen-video i{position: absolute;top: 1rem;right: 1.5rem;z-index: 111;}
.fullscreen-video video{
  width: 80%;
}
</style>