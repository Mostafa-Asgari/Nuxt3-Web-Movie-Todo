<template>
            <div class="box flex flex-col items-end">
                <h3 class="mb-2 pb-2 font-bold block border-b border-gray-600">{{title1}}</h3><br>
                <NuxtLink to="/" class="text-gray-600 hover:text-red-400 mt-1">{{title2}}</NuxtLink>
                <NuxtLink to="/about" class="text-gray-600 hover:text-red-400">{{title3}}</NuxtLink>
                <NuxtLink to="/courses/front/course-1" class="text-gray-600 hover:text-red-400">{{title4}}</NuxtLink>
                <NuxtLink to="/courses/front/course-2" class="text-gray-600 hover:text-red-400">{{title5}}</NuxtLink>
                <NuxtLink to="/courses/front/course-3" class="text-gray-600 hover:text-red-400">{{title6}}</NuxtLink>
                <NuxtLink to="/team/teachers" class="text-gray-600 hover:text-red-400">{{title7}}</NuxtLink>
                <NuxtLink to="/team/blogs" class="text-gray-600 hover:text-red-400">{{title8}}</NuxtLink>
                <NuxtLink to="/" class="text-gray-600 hover:text-red-400">{{title9}}</NuxtLink>
            </div>
</template>

<script setup>

  defineProps(['title1', 'title2','title3', 'title4',
  'title5', 'title6', 'title7', 'title8', 'title9'])

</script>

<style>
  .box a{margin-bottom: 0.4rem;font-size: 0.9rem;} 
  .box a:hover{padding-left: 0.8rem;}
</style>