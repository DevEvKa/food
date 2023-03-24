<template>
  <div>
    <button v-if="mainStore.shopList.length" @click="mainStore.count++">
      корзина
    </button>

    <li v-for="({name,img},index) in mainStore.products) ">
      <p>
        {{ name }}
      </p>
      <img :src="img"/>
    </li>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/main.js'

const mainStore = useMainStore()

</script>


