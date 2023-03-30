<template>
  <div class="container">
    <app-header></app-header>
    <slot />
    <app-footer></app-footer>
  </div>
</template>

<script setup>
import AppHeader from "../components/pages/header/index.vue";
import AppFooter from "../components/pages/footer/index.vue";
</script>
