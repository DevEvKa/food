import { defineStore } from 'pinia'
import {ref,computed} from "vue";

export default defineStore('main-store', {
  state: () => ({
      count: 1,
      shopList: [],
    products:[]
  }),

  getters:{
    countPlusOne(state){
      return state.count++
    }
  },

  actions:{
    addNumber(number){
      this.products += number
    }
  }
})

