<template>
  <div>
    <header class="header">
      <img src="@/assets/images/menu.svg" alt="menu icon" class="bars">

      <nav class="navbar" id="nav">
        <ul>
          <li><NuxtLink to="/">خــانه</NuxtLink></li>
          <li class="toggle"><NuxtLink class="cursor-pointer">محصولات <img class="inline-block align-center w-[20px]" src="@/assets/images/down.svg" alt="down"></NuxtLink>
            <ul>
              <li><NuxtLink to="/products/movie">جستجوی فیلم</NuxtLink></li>
              <li><NuxtLink to="/products/todo">تودو لیست</NuxtLink></li>
            </ul>
          </li>
          <li class="toggle"><NuxtLink class="cursor-pointer">دوره ها <img class="inline-block align-center w-[20px]" src="@/assets/images/down.svg" alt="down"></NuxtLink>
            <ul class="under" id="under">
              <li><NuxtLink class="cursor-pointer">فرانت اند <img class="arrow inline-block align-center w-[20px]" src="@/assets/images/left.svg" alt="left"></NuxtLink>
                <ul>
                  <li><NuxtLink to="/courses/front/course-1">Vue3 js</NuxtLink></li>
                  <li><NuxtLink to="/courses/front/course-2">nuxt3</NuxtLink></li>
                  <li><NuxtLink to="/courses/front/course-3">javascript</NuxtLink></li>
                  <li><NuxtLink to="/courses/front/course-4">tailwind</NuxtLink></li>
                </ul>
              </li>
              <li><NuxtLink class="cursor-pointer">بک اند <img class="arrow inline-block align-center w-[20px]" src="@/assets/images/left.svg" alt="left"></NuxtLink>
                <ul>
                  <li><NuxtLink to="">PHP</NuxtLink></li>
                  <li><NuxtLink to="">laravel</NuxtLink></li>
                </ul>
              </li>
              <li><NuxtLink to="/courses/fullstack">فول استک</NuxtLink></li>
            </ul>
          </li>
          <li class="toggle"><NuxtLink class="cursor-pointer">تیم ما <img class="inline-block align-center w-[20px]" src="@/assets/images/down.svg" alt="down"></NuxtLink>
            <ul>
              <li><NuxtLink to="/team/teachers">معلم ها</NuxtLink></li>
              <li><NuxtLink to="/team/blogs">بلاگ</NuxtLink></li>
            </ul>
          </li>
          <li><NuxtLink to="/about">درباره ما</NuxtLink></li>
          <li><NuxtLink to="/contact">تماس با ما</NuxtLink></li>
        </ul>
      </nav>

      <NuxtLink to="/" class="logo">educa<i class="fas fa-graduation-cap text-red-500 mr-1"></i></NuxtLink>
    </header>
  </div>
</template>

<script setup>
const route = useRoute()
// const active1 = ref(false)
// const active2 = ref(false)
// const active3 = ref('')
// const active4 = ref('')
// const active5 = ref(true)
// const active6 = ref(false)
// const toggleFunc1 = () => {
//   active1.value = !active1.value
//   active2.value = false
//   active6.value = false
//   if(useRoute().fullPath === '/products/todo'){
//     active1.value = false
//   }
// }
// const toggleFunc2 = () => {
//   active2.value = !active2.value
//   active1.value = false
//   active3.value = false
//   active4.value = false
//   active6.value = false
// }
// const toggleFunc3 = () => {
//   active3.value = !active3.value
//   active4.value = false
// }
// const toggleFunc4 = () => {
//   active4.value = !active4.value
//   active3.value = false
// }
// const toggleFunc5 = () => active1.value = false
// const toggleFunc6 = () => {
//   active6.value = !active6.value
//   active1.value = false
//   active2.value = false
// }

</script>

<style lang="scss">
  .header{
    padding: 0 5%;
    position: sticky;
    top: 0;right: 0;left: 0;
    z-index: 110;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: navy;

    .navbar ul{
      list-style: none;

      li{
        float: right;
        position: relative;

        a{
          color: #fff;
          display: block;
          padding: 1.3rem 1rem;

          &:hover{
            background: crimson;
          }
        }

        
        &:hover > ul{
          display: block;
        }

        ul{
          position: absolute;
          right: 0;
          width: 120px;
          background: navy;
          display: none;
          animation: anim 0.2s ease-out;
          li{
            width: 100%;
            a{border-bottom: 1px solid crimson; font-size: 0.9rem;display: flex;justify-content: space-between;}
            ul{
              right: 120px;
              top: 0;
            }
          }
        }
      }
    }

    .logo{
      color: #fff;
      font-size: 1.7rem;
      font-weight: bold;
    }

    .bars{
      cursor: pointer;
      width: 35px;
      display: none;
    }
  }
  @keyframes anim{
      0%{margin-top: 0.5rem;}
      100%{margin-top: 0;}
  }
  

  @media (max-width: 768px){
    .header{
      padding: 1.3rem 1rem;
      .navbar{
        position: absolute;
        top: 99%;right: -110rem;
        z-index: 110;
        width: 40%;height: 100vh;
        background: navy;
        overflow: auto;
        padding-bottom: 13rem;

        ul li{
          width: 100%;
          ul{
            width: 100%;
            position: relative;
            // animation: none;
            a{
              padding-right: 1.7rem;
            }
            ul{
              position: relative;
              width: 100%;
              right: 0 !important;
            }
          }
        }
        &.active{right: 0;}
      }

      .bars{
        display: block;
        &.close{
          content: url('@/assets/images/close.svg');
          transform: rotate(180deg);
        }
      }

      .arrow{content: url('@/assets/images/down.svg');}

    }
  }
</style>