<template>
  <div class="">
    <h1 class="title-in-page px-[5%] py-8 text-left text-2xl font-bold">our teachers</h1>

    <div class="px-[5%] py-4 grid max-[600px]:grid-cols-1 text-center min-[600px]:grid-cols-2 md:grid-cols-4 gap-4">
      <TeachersBox class="max-[600px]:mx-auto" imgTeacher="@/assets/images/teacher-3.png" />
      <TeachersBox class="max-[600px]:mx-auto" imgTeacher="@/assets/images/teacher-2.png" />
      <TeachersBox class="max-[600px]:mx-auto" imgTeacher="@/assets/images/teacher-5.png" />
      <TeachersBox class="max-[600px]:mx-auto" imgTeacher="@/assets/images/teacher-3.png" />
      <TeachersBox class="max-[600px]:mx-auto" imgTeacher="@/assets/images/teacher-3.png" />
      <TeachersBox class="max-[600px]:mx-auto" imgTeacher="@/assets/images/teacher-3.png" />
      <TeachersBox class="max-[600px]:mx-auto" imgTeacher="@/assets/images/teacher-3.png" />
      <TeachersBox class="max-[600px]:mx-auto" imgTeacher="@/assets/images/teacher-3.png" />
    </div>
  </div>
</template>
  
<script setup>
  useHead({
    title: 'معلم های ما'
  })
</script>
  
<style>
  
</style>