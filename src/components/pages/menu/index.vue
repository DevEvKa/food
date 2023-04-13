<template>
  <section class="our-menu">
    <div class="content-wrapper">
      <section-title class="our-menu_title">
        <template v-slot:text>Наше меню</template>
      </section-title>

      <div class="our-menu_list">
        <swiper
          class="our-menu_swiper"
          :modules="[Navigation, Pagination, A11y, Virtual]"
          navigation
          :pagination="{ clickable: true, dynamicBullets: true }"
          grab-cursor
          virtual
          slidesPerView="1"
          :breakpoints="swiperOptions.breakpoints"
        >
          <swiper-slide
            class="our-menu_swiper-slide"
            v-for="item in MENUITEMS"
            :key="item.id"
            :virtual-index="item.id"
            ><menu-item
              class="our-menu_swiper-card"
              :image="item.image"
              :alt="item.alt"
              :title="item.title"
              :description="item.description"
              :price="item.price"
              :currency="item.currency"
              :recommended="item.recommended"
            ></menu-item
          ></swiper-slide>
        </swiper>

        <!-- <menu-item
          v-for="item in MENUITEMS"
          :key="item.id"
          :image="item.image"
          :alt="item.alt"
          :title="item.title"
          :description="item.description"
          :price="item.price"
          :currency="item.currency"
          :recommended="item.recommended"
        ></menu-item> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "../../SectionTitle.vue";
import MenuItem from "./MenuItem.vue";
import { reactive } from "vue";

import { MENUITEMS } from "@/moc/data";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y, Virtual } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const swiperOptions = {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
    },
  },
};
</script>

<style lang="scss" scoped>
.our-menu {
  background: url(@/assets/images/menu/menu_bg.jpg) 0px 0px no-repeat;
  background-size: cover;

  &_title {
    color: $color-primary-light;
  }

  &_list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 797.98px) {
      flex-direction: row;
    }
  }
  &_swiper {
    &-card {
      margin: 25px auto 45px;
    }
  }
}
</style>
