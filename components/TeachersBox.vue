<template>
  <div class="teachers shadow">
    <div class="image relative overflow-hidden">
        <img src="@/assets/images/teacher-1.png" class="w-full" alt="teacher-1">
        <div class="socials absolute top-[-40rem] left-0 right-0">
            <div class="absolute top-[50%] left-[50%] w-full">
                <a href="#" class="fab fa-instagram ml-3 text-red-400 hover:text-stone-50 text-lg"></a>
                <a href="#" class="fab fa-twitter ml-3 text-red-400 hover:text-stone-50 text-lg"></a>
                <a href="#" class="fab fa-facebook ml-3 text-red-400 hover:text-stone-50 text-lg"></a>
                <a href="#" class="fab fa-linkedin text-red-400 hover:text-stone-50 text-lg"></a>
            </div>
        </div>
    </div>
    <div class="content py-3">
        <h3 class="font-bold">john doe</h3>
        <span class="text-xs">web designer</span>
    </div>
  </div>
</template>

<script setup>
defineProps(['imgTeacher'])
</script>

<style scoped>
.image .socials{
    width: 100%;height: 100%;
    background-color: rgba(0,0,0,0.7);
}
.image .socials div{transform: translate(-50%, -50%);}
.teachers:hover .socials{top: 0;}
</style>