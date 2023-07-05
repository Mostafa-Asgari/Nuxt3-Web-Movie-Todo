<template>
  <div class="gallery">
    <h1 class="title-in-page px-[5%] py-8 text-left text-2xl font-bold">blog</h1>

    <div class="grid grid-cols-3 max-md:grid-cols-2 max-[576px]:grid-cols-1 gap-2 px-[5%] py-4 text-left">
      <GalleryDetails />
      <GalleryDetails />
      <GalleryDetails />
      <GalleryDetails />
      <GalleryDetails />
      <GalleryDetails />
      <GalleryDetails />
      <GalleryDetails />
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'وبلاگ'
  })
</script>

<style scoped>

</style>