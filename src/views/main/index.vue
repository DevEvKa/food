<template>
  <main class="main">
    <slot>
      <the-hero></the-hero>
      <our-history></our-history>
      <the-promo></the-promo>
      <the-dishes></the-dishes>
      <our-menu></our-menu>
      <the-feedback></the-feedback>
      <the-gallery></the-gallery>
      <our-staff></our-staff>
    </slot>
  </main>
</template>

<script setup>
import TheHero from "../../components/pages/hero/index.vue";
import OurHistory from "../../components/pages/history/index.vue";
import ThePromo from "../../components/pages/promo/index.vue";
import TheDishes from "../../components/pages/dishes/index.vue";
import OurMenu from "../../components/pages/menu/index.vue";
import TheFeedback from "../../components/pages/feedback/index.vue";
import TheGallery from "../../components/pages/gallery/index.vue";
import OurStaff from "../../components/pages/staff/index.vue";
</script>

<style lang="scss" scoped>
.main {
  align-items: stretch;
}
</style>
