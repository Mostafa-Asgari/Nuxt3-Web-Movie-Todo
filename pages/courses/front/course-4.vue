<template>
    <div class="course-4">
      <h1 class="title-in-page px-[5%] py-8 text-left text-2xl font-bold">course-4 (tailwind CSS)</h1>
 
      <h2 @click="changeFunc">{{ api }}</h2>
  
      <div class="box">
          <button @click="searchFunc">جستجو</button>
          <input type="text" v-model="movie" placeholder="فیلم شما...">
      </div>
      <div class="info-movie">
        <h2>نام فیلم : {{ movie.Title }}</h2>
        <h2>بازیگران فیلم : {{ movie.Actors }}</h2>
      </div><hr>
  
      <div class="box">
          <button @click="postFunc">جستجو</button>
          <!-- <input type="text" v-model="posts" placeholder="پست شما..."> -->
      </div>
      <div class="info-movie" v-for="post in posts" :key="post.id">
        <h2>نام پست : {{ post.title }}</h2>
        <h2>محتوای پست : {{ post.body }}</h2><hr>
      </div>
      <button type="submit" @click="newPost">submit</button>
      <br>
      <br><br><br>
      <br><br><br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      
    </div>
  </template>
  
  <script setup>
  const axios = useNuxtApp().$axios
  const api = ref('')
  const movie = ref('')
  const posts = ref([])
  useHead({title: 'Course-4 (Tailwind CSS)'})
  
  onMounted(() => {
      axios.get('/api/hello').then(res => {
          api.value = res.data.api
          console.log(res.data)
      })
  })
  
  const searchFunc = () => {
    if(movie.value !== ''){
      axios.get(`http://www.omdbapi.com/?t=${movie.value}&apikey=78df7a37`)
        .then(res => {
            console.log(res.data);
            movie.value = res.data
        })
        movie.value = ''
    }
  }
  
  const postFunc = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params:{
        _limit: 4
      }
    }).then(res => {
            console.log(res.data);
            posts.value = res.data
        })
  }
  const newPost = () => {
    axios.post(`https://jsonplaceholder.typicode.com/posts`, {
      'userId': 10,
      'title': 'سلام متن جدید',
      'body': 'سلام محتوای جدید'
    }).then(res => console.log(res.data))
      .catch(err => console.log(err.message))
  }
  
  </script>
  
  <style>
    .box{
      width: 50%;
      margin: 2rem auto;
      text-align: center;
      /* border: 1px solid #000; */
      display: flex;
    }
    .box input, .box button{
        border: 0;
        outline: 0;
        border: 1px solid #666;
        padding: 0.7rem;
      }
      .box input{width: 70%;}
      .box input:focus{border: 1px solid green;}
      .box button{width: 30%;border-left: none;cursor: pointer;background: green;color: #fff;font-weight: bold;font-size: 1rem;transition: all 0.3s; box-shadow: inset 0 0 0 transparent;}
      .box button:active{box-shadow: inset 0 0 0 40px #0e3b10;}
      .info-movie h2{color: purple;}
  </style>