<template>
  <div class="error">
    <h1>{{ error.statusCode }}</h1>
    <h1>Page is Not Found</h1>
  </div>
</template>

<script setup>
  defineProps(['error'])
</script>

<style>

</style>