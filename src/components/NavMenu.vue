<template>
  <nav class="nav-menu menu">
    <div class="menu_body" :class="{ open: isMenuOpen }">
      <ul class="menu_list">
        <li class="menu_item" v-for="link of navLinks" :key="link">
          <a href="#" class="menu_link">{{ link }}</a>
        </li>
      </ul>
    </div>
    <button-burger @sendBurgerState="openMenu"></button-burger>
  </nav>
</template>

<script>
import ButtonBurger from "../components/ButtonBurger.vue";
export default {
  data() {
    return {
      navLinks: ["Главная", "Меню", "О нас", "Бронь"],
      isMenuOpen: false,
    };
  },
  components: {
    ButtonBurger,
  },
  methods: {
    openMenu(burgerState) {
      this.isMenuOpen = burgerState;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  &_body {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    transition: left 0.3s;
    padding: 100px 15px 20px 15px;
    overflow: auto;
    &.open {
      left: 0;
    }
    @media (min-width: 797.98px) {
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
    gap: 53px;
    background-color: orangered;

    @media (min-width: 797.98px) {
      flex-direction: row;
      align-items: center;
      gap: 30px;
      flex-wrap: wrap;
    }
  }
  &_link {
    font-size: 30px;

    @media (min-width: 797.98px) {
      font-size: 25px;
      color: bisque;
      &:hover {
        color: aquamarine;
      }
    }
  }
}
</style>
