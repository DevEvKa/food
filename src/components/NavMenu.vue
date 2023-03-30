<template>
  <nav class="nav-menu">
    <ul class="nav-menu_list">
      <li class="nav-menu_item" v-for="link of navLinks" :key="link">
        <a href="#" class="nav-menu_link">{{ link }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import ButtonBurger from "../components/ButtonBurger.vue";

const props = defineProps({
  navLinks: {
    type: Array,
    default: ["О нас", "Меню", "Отзывы"],
  },
});
</script>

<style lang="scss" scoped>
.nav-menu {
  display: flex;

  @media (min-width: 800px) {
    flex-grow: 1;
  }

  &_list {
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 2px;
    }
  }

  &_item {
    margin-bottom: 50px;
    padding: 20px;
    @media (min-width: 800px) {
      margin-bottom: 0;
      padding: 0;
    }
    .footer & {
      margin: 0;
      padding: 10px;
    }
  }

  &_link {
    font-size: 40px;
    color: $color-primary-light;

    @media (min-width: 800px) {
      font-size: 20px;
    }
    @media (min-width: 1000px) {
      font-size: 23px;
    }
    .footer & {
      font-size: 25px;
    }
  }
}
</style>
