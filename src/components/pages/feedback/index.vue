<template>
  <section class="the-feedback">
    <div class="content-wrapper">
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
          v-for="feedback in FEEDBACKITEMS"
          :key="feedback.id"
          :virtual-index="feedback.id"
        >
          <feedback-item
            :image="feedback.image"
            :alt="feedback.alt"
            :title="feedback.title"
            :text="feedback.text"
            :role="feedback.role"
            :name="feedback.name"
          ></feedback-item>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import FeedbackItem from "./FeedbackItem.vue";
import { FEEDBACKITEMS } from "@/moc/data.js";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y, Virtual } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
</script>

<style lang="scss" scoped>
.the-feedback {
  background-color: $color-bg;
}
</style>
