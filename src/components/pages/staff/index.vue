<template>
  <section class="our-staff">
    <section-title>
      <template v-slot:text>Наши </template>
      <template v-slot:accent>повара</template>
    </section-title>
    <div class="our-staff_list">
      <staff-item
        v-for="staff in STAFFITEMS"
        :key="staff.id"
        :image="staff.image"
        :alt="staff.alt"
        :title="staff.title"
        :name="staff.name"
        :role="staff.role"
      ></staff-item>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "../../SectionTitle.vue";
import StaffItem from "../../StaffItem.vue";

import { STAFFITEMS } from "@/moc/data.js";
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
