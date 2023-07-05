  <template>
    <section class="bg-stone-200 px-5 py-6">
      <div class="">
        <img src="@/assets/images/main-course-2.png" class="w-[50%]" alt="course-1">
      </div>
      <span class="text-[1rem] font-bold text-red-400 text-left">{{ title }}</span>
      <h3 class="font-bold text-[0.9rem] py-3">learning is what makes you perfect</h3>
      <p class="text-[0.8rem] text-gray-800 leading-[2]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, labore.</p>
      <a href="#" class="btn bg-blue-600">read more</a>
      <div class="flex justify-between mt-4">
        <a href="#" class="text-red-400 text-[0.8rem]"><i class="fa fa-book"></i> 12 modules</a>
        <a href="#" class="text-red-400 text-[0.8rem]">6 hours <i class="fa fa-clock"></i></a>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps(['srcImg', 'title'])
  </script>
  
  <style scoped>
  img{margin: 0 auto 1rem;}
  .btn{background: navy !important;}
  .btn:hover{background: crimson !important;}
  </style>