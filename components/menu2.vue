<template>
  <div class="menu2">

    <header class="header2">
      <img src="@/assets/images/menu2.svg" class="bars2" alt="menu icon">

      <nav class="navbar2">
        <ul>
          <li><a href="#">خــانه</a></li>
          <li><a href="#">محصولات</a>
            <ul>
              <li><a href="#">javascript</a></li>
              <li><a href="#">vue js</a></li>
              <li><a href="#">nuxt js</a></li>
            </ul>
          </li>
          <li><a href="#">تصاویر</a>
            <ul>
              <li><a href="#">تیم شرکت</a></li>
              <li><a href="#">جشن ها</a></li>
            </ul>
          </li>
          <li><a href="#">درباره ما</a>
            <ul>
              <li><a href="#">tailwind</a>
                <ul>
                  <li><a href="#">daisy UI</a></li>
                  <li><a href="#">flowbit</a></li>
                </ul>
              </li>
              <li><a href="#">sass</a></li>
              <li><a href="#">axios</a>
                <ul>
                  <li><a href="#">get</a></li>
                  <li><a href="#">post</a></li>
                  <li><a href="#">patch</a></li>
                  <li><a href="#">put</a></li>
                  <li><a href="#">delete</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">تماس با ما</a></li>
        </ul>
      </nav>

      <a href="#" class="logo2">LOGO</a>
    </header>


    <slot/>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  body{
    width: 100%;height: 100vh;
    background: url('@/assets/images/2.jpg') no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #5f5e5e;
    background-blend-mode: multiply;
  }

$bg: orange;

.header2{
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;right: 0;left: 0;
  z-index: 110;
  background: $bg;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  .navbar2 ul li{
    float: right;
    position: relative;
    a{
      display: block;
      padding: 1.2rem 1rem;
      &:hover{
        background: blue;
        color: #fff;
      }
    }
    ul{
      position: absolute;
      right: 0;
      width: 140px;
      background: $bg;
      border-top: 1px solid blue;
      animation: anim 0.3s ease;
      display: none;
      li{
        width: 100%;
        ul{
          right: 100%;top: 0;
          li a{
            text-transform: uppercase;
            font-size: 0.8rem;
          }
        }
      }
    }
    @keyframes anim{
      0%{margin-top: 1rem;}
      100%{margin-top: 0;}
    }
    &:hover > ul{
      display: block;
    }
  }
  .logo2{
    font-size: 2rem;
    font-weight: bold;
  }
  .bars2{
    display: none;
    width: 30px;
    cursor: pointer;
  }
}


@media (max-width: 768px){
  .header2{
    padding: 0 2.5%;
    .navbar2{
      position: absolute;
      top: 99%;right: -110rem;
      z-index: 110;
      background: $bg;
      width: 60%;height: 100vh;
      padding-bottom: 5rem;
      overflow: auto;
      ul li{
        width: 100%;
        ul{
          width: 100%;
          position: static;
          ul{
            position: relative;
            width: 100%;
            right: 0 !important;
          }
        }
      }
      &.active{
        right: 0;
      }
    }
    .bars2{
      display: block;
      &.close2{
        content: url('@/assets/images/close.svg');
        transform: rotate(180deg);
      }
    }
  }
}



</style>