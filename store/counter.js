import { defineStore } from "pinia";
const axios = useNuxtApp().$axios

export const useCounterStore = defineStore("counter", () => {
    const num = ref(14)
    const inc = () => num.value++
    const dec = () => num.value--
    const res = () => num.value = 0
    const double = computed(() => {
        num.value += 2
    })

    const teams = ref([])
    const getTeams = () => {
        axios.get(`http://localhost:3000/teams`)
          .then(res => {
            teams.value = res.data
          })
          .catch(err => console.log(err.message))
    }


    return { num, inc, dec, double, res, teams, getTeams }
})