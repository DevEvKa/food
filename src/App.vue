<template>
  <div>
    <header>хэдэр из апп</header>
    <RouterView />
</div>
  
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

header {
  background-color: $bg-color;
  font-size: 50px;
  color: $primary-color;
}
</style>
