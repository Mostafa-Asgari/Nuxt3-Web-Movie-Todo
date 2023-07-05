<template>
  <div>
      <section class="homeMain flex flex-col md:flex-row md:flex items-center py-10">
        <div class="content w-full md:w-[50%] text-left py-0 px-8 md:pl-8 md:pr-12">
          <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">your course to success</h3>
          <p class="leading-[1.7]">Lorem ipsum dolor sit amet dolor sit amet consectetur adipisicing consectetur adipisicing elit Repudiandae.</p>
          <a href="#" class="btn">get started</a>
        </div>
        <div class="image w-full md:w-[50%] px-14 md:pl-12 mb-8 md:mb-0">
          <img src="@/assets/images/home-img.png" class="w-full mx-auto" alt="home banner">
        </div>
      </section>

      <section class="px-[6%] grid grid-cols-2 md:grid-cols-5 gap-2">
        <BoxInHome title="data analysis" imgBox="@/assets/images/category-1.png" />
        <BoxInHome title="social science" imgBox="@/assets/images/category-2.png" />
        <BoxInHome title="business analysis" imgBox="@/assets/images/category-3.png" />
        <BoxInHome title="biology & life" imgBox="@/assets/images/category-4.png" />
        <BoxInHome title="computer science" imgBox="@/assets/images/category-5.png" />
      </section>

      <div class="flex w-full justify-center my-3">
        <button class="group relative overflow-hidden rounded bg-sky-400 px-2 py-1 font-sans uppercase shadow ring-sky-500 transition-all after:bg-sky-500 active:shadow-md active:ring-2">
          <p class="text-white transition-all group-active:scale-90">Programing</p>
        </button>
      </div>
      
      <main class="flex items-center justify-center my-3">
          <!-- component -->
          <button class="group rounded-md h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
              Hover me
              <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-md">
              </div>
          </button>
      </main>


      <div class="flex justify-center flex-wrap">
        <div class="w-1/2">
          <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-pink-600 bg-white': openTab !== 1, 'bg-pink-100 text-pink-600 border-pink-600 border-b-[3px]': openTab === 1}">
                Profile
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-pink-600 bg-white': openTab !== 2, 'bg-pink-100 text-pink-600 border-pink-600 border-b-[3px]': openTab === 2}">
                Settings
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
              <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-pink-600 bg-white': openTab !== 3, 'bg-pink-100 text-pink-600 border-pink-600 border-b-[3px]': openTab === 3}">
                Options
              </a>
            </li>
          </ul>
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div class="px-4 py-5 flex-auto">
              <div class="tab-content tab-space">
                <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br />
                    Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br />
                    Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
            
  </div>
</template>

<script setup>
  useHead({
    title: 'صفحه اصلی - خانه'
  })
  const openTab = ref(1)
  const toggleTabs = (tabNumber) => openTab.value = tabNumber
</script>

<style>
  .btn{
    display: inline-block;
    color: #fff;
    background: crimson;
    cursor: pointer;
    padding: 0.8rem 1.3rem;
    border-radius: 0.3rem;
    margin-top: 1rem;
  }
  .btn:hover{
    background: navy;
  }

  @media (max-width: 768px){
    .homeMain{
      display: flex;
      flex-direction: column;
    }
    .content{
      order: 2 !important;
    }
    .image{
      order: 1 !important;
    }
  }
</style>