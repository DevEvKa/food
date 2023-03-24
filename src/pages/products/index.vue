<template>
  <div class="products-page">
    <ProductsView></ProductsView>
  </div>
</template>

<script setup>
import ProductsView from  '@/views/products/index.vue'
import { onMounted,ref } from "vue";

const products = ref(null)

onMounted(async ()=>{
  products.value = await fetch('asgasg/2/35325/435643')
})
</script>
