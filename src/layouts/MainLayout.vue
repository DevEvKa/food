<template>
  <div class="container">
    <div class="header-hero">
      <div class="content-wrapper">
        <app-header></app-header>
        <app-hero></app-hero>
      </div>
    </div>

    <main>
      <div class="content-wrapper">
        <!-- отсюда берется -->
        <slot name="main">
          <h6>Сюда собираем основную страницу</h6>
          <app-advantages></app-advantages>
          <history-about></history-about>
          <menu-variety></menu-variety>
          <photo-collection></photo-collection>
          <promotion-block></promotion-block>
          <section-title></section-title>
          <dishes-item></dishes-item>
          <menu-item></menu-item>
          <feedback-item></feedback-item>
          <photo-gallery></photo-gallery>
          <cook-item></cook-item>
          <h6>Досюда собираем основную страницу</h6>
        </slot>
      </div>
    </main>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "../components/pages/header/index.vue";
import AppHero from "../components/pages/hero/index.vue";
import AppAdvantages from "../components/pages/advantages/index.vue";
import AppFooter from "../components/pages/footer/index.vue";

import HistoryAbout from "../components/HistoryAbout.vue";
import MenuVariety from "../components/MenuVariety.vue";
import PhotoCollection from "../components/PhotoCollection.vue";
import PromotionBlock from "../components/PromotionBlock.vue";
import SectionTitle from "../components/SectionTitle.vue";
import DishesItem from "../components/DishesItem.vue";
import MenuItem from "../components/MenuItem.vue";
import FeedbackItem from "../components/FeedbackItem.vue";
import PhotoGallery from "../components/PhotoGallery.vue";
import CookItem from "../components/CookItem.vue";

export default {
  data() {
    return {
      /* data properties here */
    };
  },
  components: {
    AppHeader,
    AppHero,
    AppAdvantages,
    AppFooter,
    HistoryAbout,
    MenuVariety,
    PhotoCollection,
    PromotionBlock,
    SectionTitle,
    DishesItem,
    MenuItem,
    FeedbackItem,
    PhotoGallery,
    CookItem,
  },
};
</script>

<style lang="scss" scoped>
.header-hero {
  position: relative;
  width: 100%;
  height: auto;
  background: url(../assets/images/bg_header_hero.jpg) 0px 0px no-repeat;
  background-size: cover;
  margin: 0 auto;

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
