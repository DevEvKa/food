<template>
  <div class="main-page">
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
</script>
