<template>
  <section class="our-menu">
    <div class="content-wrapper">
      <section-title class="our-menu_title">
        <template v-slot:text>Наше </template>
        <template v-slot:accent>меню</template>
      </section-title>
      <div class="our-menu_list">
        <menu-item
          v-for="item in MENUITEMS"
          :key="item.id"
          :image="item.image"
          :alt="item.alt"
          :title="item.title"
          :description="item.description"
          :price="item.price"
          :currency="item.currency"
          :recommended="item.recommended"
        ></menu-item>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "../../SectionTitle.vue";
import MenuItem from "../../MenuItem.vue";

import { MENUITEMS } from "../../../moc/data";
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
    justify-content: space-around;
    gap: 10px;
    @media (min-width: 797.98px) {
      flex-direction: row;
    }
  }
}
</style>
