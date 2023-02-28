<template>
    <div class="main-page">
      <main-layout>
        <!-- сюда добавляется -->
        <template #main >
          <!-- <router-view /> -->
        </template>
      </main-layout>
  </div>
  </template>
  
  <script setup>
  import { RouterView } from "vue-router";
  import MainLayout from '@/layouts/MainLayout.vue';
  </script>
  
  <style lang="scss">
  @import '@/assets/scss/main.scss';
  

  </style>
  