<template>
  <section class="the-feedback">
    <div class="content-wrapper">
      <feedback-item
        v-for="feedback in FEEDBACKITEMS"
        :key="feedback.id"
        :image="feedback.image"
        :alt="feedback.alt"
        :title="feedback.title"
        :text="feedback.text"
        :role="feedback.role"
        :name="feedback.name"
      ></feedback-item>
    </div>
  </section>
</template>

<script setup>
import FeedbackItem from "./FeedbackItem.vue";
import { FEEDBACKITEMS } from "@/moc/data.js";
</script>

<style lang="scss" scoped>
.the-feedback {
  background-color: $color-bg;
}
</style>
