<template>
  <main class="main">
    <slot>
      <the-hero></the-hero>
      <div class="content-wrapper">
        <our-history></our-history>
      </div>

      <the-promo></the-promo>
      <div class="content-wrapper">
        <the-dishes></the-dishes>
      </div>
      <our-menu></our-menu>
      <the-feedback></the-feedback>
      <div class="content-wrapper">
        <the-gallery></the-gallery>
      </div>
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
