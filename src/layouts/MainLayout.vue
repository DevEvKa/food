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

<style lang="scss" scoped>
.header-hero {
  position: relative;
  width: 100%;
  height: auto;
  background: url(../assets/images/bg_header_hero.jpg) 0px 0px no-repeat;
  background-size: cover;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
}
</style>
