<template>
  <div class="advantage-item">
    <img :src="getImageUrl(image)" class="advantage-item_img" :alt="alt" />
    <h4 class="advantage-item_title">
      {{ title }}
      <span class="advantage-item_title_accent">{{ titleAccent }}</span>
    </h4>
    <p class="advantage-item_text">{{ text }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
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
  titleAccent: {
    type: String,
    require: false,
  },
  text: {
    type: String,
    require: false,
  },
});

function getImageUrl(image) {
  return new URL(`../../../assets/images/hero/${image}`, import.meta.url).href;
}
</script>

<style lang="scss" scoped>
.advantage-item {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  padding: 20px 13px;
  background-color: $color-primary-light;
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);

  @media (min-width: 400px) {
    width: 80%;
  }
  @media (min-width: 500px) {
    width: 70%;
  }

  @media (min-width: 600px) {
    width: 40%;
    padding: 20px;
  }

  @media (min-width: 900px) {
    width: 28%;
    padding: 30px 20px;
  }

  &:hover {
    box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.4);
  }

  &_img {
    width: 100%;
    max-width: 87px;
    height: auto;
    display: block;
    margin-bottom: 15px;

    @media (min-width: 800px) {
      max-width: 80px;
    }
  }

  &_title {
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: $color-primary-dark;
    margin-bottom: 20px;
    text-align: center;
    &_accent {
      color: $color-details;
    }
  }

  &_text {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    flex-grow: 1;
    color: $color-dark-secondary;

    @media (min-width: 1000px) {
      font-size: 26px;
    }
  }
}
</style>
