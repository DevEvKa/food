<template>
  <div class="menu-item">
    <span v-if="recommended" class="menu-item_recommended">Recommended</span>
    <div class="menu-item_wrapper">
      <img class="menu-item_picture" :src="getImageUrl(image)" :alt="alt" />
      <div class="menu-item_price-block">
        <span class="menu-item_price">{{ price }}</span>
        <span class="menu-item_currency">{{ currency }}</span>
      </div>
    </div>

    <div class="menu-item_info">
      <h5 class="menu-item_name">{{ title }}</h5>
      <p class="menu-item_description">{{ description }}</p>
    </div>
    <button-main><template v-slot:button>В корзину</template></button-main>
  </div>
</template>
<script setup>
import ButtonMain from "@/components/ButtonMain.vue";
const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  price: {
    type: String,
    default: "",
  },
  currency: {
    type: String,
    default: "",
  },
  title: {
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

function getImageUrl(image) {
  return new URL(`../../../assets/images/dishes/${image}`, import.meta.url)
    .href;
}
</script>

<style lang="scss" scoped>
.menu-item {
  max-width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 15px 30px;
  background-color: $color-primary-light;
  @media (min-width: 600px) {
    padding-left: 25px;
    padding-right: 25px;
  }

  &:hover {
    .menu-item_recommended {
      background-color: $color-accent;
    }
  }

  &_recommended {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    color: $color-primary-dark;
    background-color: $color-secondary;
    padding: 9px 15px;
    position: absolute;
    top: 0;
    left: 0;
    text-transform: uppercase;
  }
  &_wrapper {
    padding: 20px 0;
    &:hover {
      .menu-item_price-block {
        background-color: $color-accent;
      }
      .menu-item_picture {
        transform: scale(1.03);
        box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.4);
      }
    }
  }

  &_picture {
    object-fit: cover;
    width: 225px;
    height: 225px;
    border-radius: 100%;
  }

  .menu-item_price-block {
    width: 100px;
    height: 100px;
    background-color: $color-secondary;
    border: 8px solid $color-primary-light;
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
    color: $color-primary-light;
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
    color: $color-primary-dark;
    padding: 5px 0;
  }
  &_description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: $color-primary-dark;
    padding: 5px 0;
  }
}
</style>
