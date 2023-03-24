<template>
  <div class="feedback-item">
    <p class="feedback-item_text">{{ text }}</p>
    <div class="feedback-item_person person">
      <div class="person_image-wrapper">
        <img class="person_image" :src="getImageUrl(image)" :alt="alt" />
      </div>
      <span class="person_role">{{ role }}</span>
      <span class="person_name">{{ name }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: String, require: false },
  image: { type: String, require: false },
  alt: { type: String, require: false },
  text: { type: String, require: false },
  role: { type: String, require: false },
  name: { type: String, require: false },
});

function getImageUrl(image) {
  return new URL(`../assets/images/feedback/${image}`, import.meta.url).href;
}
</script>

<style lang="scss" scoped>
.feedback-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  &_text {
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: $color-primary-dark;
    @media (min-width: 600px) {
      font-size: 23px;
      line-height: 27px;
    }
  }
}
.person {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  &_image {
    width: 100%;
    padding: 5px 0;
    border-radius: 50%;

    &-wrapper {
      max-width: 100px;
      height: auto;
      text-align: center;
      @media (min-width: 600px) {
        max-width: 150px;
      }
    }
  }
  &_role {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: $color-primary-dark;
    @media (min-width: 600px) {
      font-size: 23px;
    }
  }
  &_name {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: $color-primary-dark;
    @media (min-width: 600px) {
      font-size: 23px;
    }
  }
}
</style>
