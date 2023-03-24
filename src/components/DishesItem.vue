<template>
  <div class="dishes-item">
    <img
      class="dishes-item_image"
      :src="getImageUrl(image)"
      :alt="alt"
      :id="id"
    />
    <div class="dishes-item_info">
      <h6 class="dishes-item_name">{{ title }}</h6>
      <div class="dishes-item_spots">.</div>
      <div class="dishes-item_price-block">
        <span class="dishes-item_price">{{ price }}</span>
        <span class="dishes-item_currency">{{ currency }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    require: false,
  },
  image: {
    type: String,
    require: false,
  },
  alt: {
    type: String,
    require: false,
  },
  title: {
    type: String,
    require: false,
  },
  price: {
    type: String,
    require: false,
  },
  currency: {
    type: String,
    require: false,
  },
});

function getImageUrl(image) {
  return new URL(`../assets/images/dishes/${image}`, import.meta.url).href;
}
</script>

<style lang="scss" scoped>
.dishes-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);

  @media (min-width: 550px) {
    max-width: 90%;
  }
  @media (min-width: 700px) {
    max-width: 80%;
  }
  @media (min-width: $screen-tablet) {
    max-width: 100%;
  }

  &:hover {
    box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.4);
  }

  &_info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 10px;
    padding: 0 10px;
    @media (min-width: 1200px) {
      flex-direction: row;
    }
  }

  &_image {
    display: block;
    object-fit: cover;
    width: 100%;
    max-width: 168px;
    height: 140px;

    &:hover {
      transform: scale(1.05);
    }
  }
  &_name {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;
    color: $color-primary-dark;
    text-align: center;
    @media (min-width: 600px) {
      font-size: 26px;
      line-height: 28px;
    }
  }
  &_spots {
    color: transparent;
    border-bottom: 1px dashed $color-primary-dark;
    display: none;
    @media (min-width: 1200px) {
      display: block;
      flex-grow: 1;
    }
  }
  &_price-block {
    display: flex;
    justify-content: center;
    gap: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: $color-primary-dark;
  }
}
</style>
