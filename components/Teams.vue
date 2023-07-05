 <template>
    <div class="teams">
        <div class="box bg-stone-200 rounded p-3 mt-4" :class="{borderL: team.computed}">
            <div class=" flex justify-between align-center">  
              <div class="icons flex">
                <img src="@/assets/images/trash.svg" @click="delFunc" class="img1 w-[25px] ml-2 cursor-pointer" alt="trash">
                <NuxtLink :to="`/products/edit/${team.id}`">
                  <img src="@/assets/images/edit.svg" class="img2 w-[25px] ml-2 cursor-pointer" alt="edit">
                </NuxtLink>
                <img src="@/assets/images/done.svg" @click="doneFunc" class="img3 w-[25px] ml-2 cursor-pointer" alt="done">
              </div>
  
              <div class="todo cursor-pointer flex" @click="show = !show">
                <h1>{{ team.title }}</h1>
                <img src="~/assets/images/down3.svg" class="w-[25px]" alt="down icon">
              </div>
            </div>
            <h1 class="text-left text-blue-700 pt-2" v-if="show">{{ team.stars }}</h1>
        </div>
    </div>
  </template>
    
  <script setup>
    import { useCounterStore } from '@/store/counter';
    const store = useCounterStore();
    const axios = useNuxtApp().$axios
    onMounted(() => store.getTeams())
    // store.getTeams()
  
    const show = ref(false)
    const props = defineProps(['team'])
    const delFunc = () => {
      axios.delete(`http://localhost:3000/teams/${props.team.id}`)
      
      let index = store.teams.findIndex(item => item.id === props.team.id)
      store.teams.splice(index, 1)
    }

    const doneFunc = () => {
      axios.patch(`http://localhost:3000/teams/${props.team.id}`, {
        computed: !props.team.computed
      })
      props.team.computed = !props.team.computed
    }

  </script>
    
  <style lang="scss" scoped>
  .teams{
    .box{
      border-left: 3px solid #f13535;
      text-decoration: line-through;
      color: #777;
    }
    .borderL{
      border-left: 3px solid #07e463;
      text-decoration: none;
      color: #000;
      text-shadow: 0 2px 4px rgba(143, 143, 143, 0.6);
    }
    .icons{
      img.img1:hover{content: url('@/assets/images/trash2.svg');}
      img.img2:hover{content: url('@/assets/images/edit2.svg');}
      img.img3:hover{content: url('@/assets/images/done2.svg');}
    }

  }
  </style>