<template>
  <div class="menu-item">
    <span class="menu-item_recommended">Recommended</span>
    <div class="menu-item_circles">
      <div class="menu-item_picture-block">
        <img
          class="menu-item_picture"
          src="../assets/images/menu-item_1.jpg"
          alt="Фото блюда"
        />
      </div>
      <div class="menu-item_price-block">
        <span class="menu-item_price">420</span>
        <span class="menu-item_currency">₽</span>
      </div>
    </div>

    <div class="menu-item_info">
      <h5 class="menu-item_name">Гамбургер макси</h5>
      <p class="menu-item_description">Максимально толстый слой мяса</p>
    </div>
    <button-main></button-main>
  </div>
</template>
<script setup>
import ButtonMain from "./ButtonMain.vue";
const props = defineProps({
  picture: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  recommended: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.menu-item {
  max-width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 15px 30px;
  background-color: var(--color-primary-light);
  border: 1px solid red;

  @media (min-width: 797.98px) {
    padding-left: 25px;
    padding-right: 25px;
  }

  &_recommended {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    color: var(--color-primary-dark);
    background-color: var(--color-secondary);
    padding: 9px 15px;
    position: absolute;
    top: 0;
    left: 0;
    text-transform: uppercase;
  }
  &_circles {
    padding: 20px 0;
  }

  &_picture {
    width: 100%;
    padding: 10px;
    border-radius: 50%;

    &-block {
      max-width: 225px;
      height: auto;
      text-align: center;
    }
  }

  .menu-item_price-block {
    width: 100px;
    height: 100px;
    background-color: var(--color-secondary);
    border: 8px solid var(--color-primary-light);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    position: absolute;
    bottom: 35px;
    right: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 33px;
    color: var(--color-primary-light);
  }

  &_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
  }

  &_name {
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: var(--color-primary-dark);
    padding: 5px 0;
  }
  &_description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: var(--color-primary-dark);
    padding: 5px 0;
  }
}
</style>
