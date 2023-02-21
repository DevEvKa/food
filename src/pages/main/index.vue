<template>
    <div class="main-page">
      <main-layout>
        <template #main >
          <router-view />
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
  
  header {
    background-color: $bg-color;
    font-size: 50px;
    color: $primary-color;
  }
  </style>
  