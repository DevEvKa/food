<template>
  <section class="our-staff">
    <div class="content-wrapper">
      <section-title>
        <template v-slot:text>Наши </template>
        <template v-slot:accent>повара</template>
      </section-title>
      <div class="our-staff_list">
        <swiper
          class="our-staff_swiper"
          :modules="[Navigation, Pagination, A11y, Virtual]"
          slidesPerView="1"
          :breakpoints="swiperOptions.breakpoints"
          navigation
          :pagination="{ clickable: true }"
          :rewind="true"
        >
          <swiper-slide
            class="our-staff_swiper-slide"
            v-for="staff in STAFFITEMS"
            :key="staff.id"
            :virtual-index="staff.id"
            ><staff-item
              class="our-staff_swiper-card"
              :image="staff.image"
              :alt="staff.alt"
              :title="staff.title"
              :name="staff.name"
              :role="staff.role"
            ></staff-item
          ></swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "../../SectionTitle.vue";
import StaffItem from "./StaffItem.vue";

import { STAFFITEMS } from "@/moc/data.js";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y, Virtual } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const swiperOptions = {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    918: {
      slidesPerView: 2,
    },
    1340: {
      slidesPerView: 3,
    },
  },
};
</script>

<style lang="scss" scoped>
.our-staff {
  &_list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    @media (min-width: 797.98px) {
      flex-direction: row;
    }
  }
  &_swiper {
    &-card {
      display: flex;
      margin: 25px auto 45px;
    }
  }
}
</style>
