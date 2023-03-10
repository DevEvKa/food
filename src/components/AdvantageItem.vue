<template>
  <div class="advantage-item advantage">
    <img :src="getImageUrl(image)" class="advantage_img" :alt="alt" />
    <h4 class="advantage_title">
      {{ title }}
      <span class="advantage_title_accent">{{ titleAccent }}</span>
    </h4>
    <p class="advantage_text">{{ text }}</p>
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
  return new URL(`../assets/images/${image}`, import.meta.url).href;
}
</script>

<style lang="scss">
.advantage {
  width: 290px;
  height: 276px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 13px;
  background-color: var(--color-primary-light);
  box-shadow: 10px 10px 40px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: 797.98px) {
    width: 349px;
    height: 328px;
    padding: 20px;
  }

  &_img {
    width: 100%;
    max-width: 87px;
    height: auto;
    display: block;
    margin-bottom: 5px;
  }

  &_title {
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: var(--color-primary-dark);
    margin-bottom: 20px;

    &_accent {
      color: var(--color-details);
    }
  }

  &_text {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    color: var(--color-dark-secondary);
    @media (min-width: 797.98px) {
      font-size: 26px;
    }
  }
}
</style>
