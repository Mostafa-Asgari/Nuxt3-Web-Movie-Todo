<template>
    <div class="video mb-2 relative">
        <i class="fas fa-play p-2 rounded-full bg-gray-50 cursor-pointer"></i>
        <video :src="vd"></video>
    </div>
</template>

<script setup>
  defineProps(['vd'])
</script>

<style>
  .video{overflow: hidden;}
  .video video{
    cursor: pointer;
    object-fit: cover;
  }
  .video:hover video{transform: scale(1.2);}
  .video i{
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
</style>