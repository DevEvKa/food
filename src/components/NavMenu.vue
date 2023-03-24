<template>
  <nav class="nav-menu">
    <div class="nav-menu_body" :class="{ open: isMenuOpen }">
      <ul class="nav-menu_list">
        <li class="nav-menu_item" v-for="link of navLinks" :key="link">
          <a href="#" class="nav-menu_link">{{ link }}</a>
        </li>
      </ul>
    </div>
    <button-burger @sendBurgerState="openMenu"></button-burger>
  </nav>
</template>

<script setup>
import ButtonBurger from "../components/ButtonBurger.vue";
const props = defineProps({
  navLinks: {
    type: Array,
    default: ["О нас", "Меню", "Отзывы"],
  },
  isMenuOpen: {
    type: Boolean,
    default: false,
  },
});

const openMenu = (burgerState) => {
  this.isMenuOpen = burgerState;
};
</script>

<style lang="scss" scoped>
.nav-menu {
  display: flex;

  @media (min-width: 800px) {
    flex-grow: 1;
  }

  &_body {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    transition: all 0.3s;
    padding: 100px 15px 20px 15px;
    overflow: auto;

    &.open {
      left: 0;
      background-color: $color-primary-dark;
    }
    @media (min-width: 800px) {
      overflow: visible;
      position: relative;
      display: flex;

      left: 0;
      height: auto;
      padding: 0;
    }
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
  }
}
</style>
