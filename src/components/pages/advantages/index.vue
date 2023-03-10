<template>
  <section class="advantages">
    <advantage-item
      v-for="advantage in advantagesInfo"
      :key="advantage.id"
      :image="advantage.image"
      :alt="advantage.alt"
      :title="advantage.title"
      :titleAccent="advantage.titleAccent"
      :text="advantage.text"
    ></advantage-item>
  </section>
</template>

<script setup>
import { advantagesInfo } from "../../../data";
import AdvantageItem from "../../AdvantageItem.vue";
</script>

<style lang="scss" scoped>
.advantages {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  top: -100px;
  @media (min-width: 797.98px) {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
