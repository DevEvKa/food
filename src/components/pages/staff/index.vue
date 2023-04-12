<template>
  <section class="our-staff">
    <div class="content-wrapper">
      <section-title>
        <template v-slot:text>Наши </template>
        <template v-slot:accent>повара</template>
      </section-title>
      <div class="our-staff_list">
        <swiper
          :space-between="50"
          :modules="[Navigation, Pagination, A11y, Virtual]"
          navigation
          :pagination="{ clickable: true, dynamicBullets: true }"
          grab-cursor
          virtual
          :rewind="true"
        >
          <swiper-slide
            v-for="staff in STAFFITEMS"
            :key="staff.id"
            :virtual-index="staff.id"
          >
            <staff-item
              :image="staff.image"
              :alt="staff.alt"
              :title="staff.title"
              :name="staff.name"
              :role="staff.role"
            ></staff-item>
          </swiper-slide>
        </swiper>

        <!-- <staff-item
          v-for="staff in STAFFITEMS"
          :key="staff.id"
          :image="staff.image"
          :alt="staff.alt"
          :title="staff.title"
          :name="staff.name"
          :role="staff.role"
        ></staff-item> -->
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
</script>

<style lang="scss" scoped>
.our-staff {
  &_list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
