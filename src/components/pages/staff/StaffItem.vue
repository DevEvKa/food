<template>
  <div class="staff-item">
    <img class="staff-item_img" :src="getImageUrl(image)" :alt="alt" />
    <div class="staff-item_info">
      <h6 class="staff-item_name">{{ name }}</h6>
      <span class="staff-item_role">{{ role }}</span>
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
  role: {
    type: String,
    require: false,
  },
  name: {
    type: String,
    require: false,
  },
});

function getImageUrl(image) {
  return new URL(`../../../assets/images/staff/${image}`, import.meta.url).href;
}
</script>

<style lang="scss" scoped>
.staff-item {
  max-width: 287px;
  max-height: 380px;
  @media (min-width: 797.98px) {
    max-width: 350px;
    max-height: 462px;
  }

  &_img {
    width: 100%;
    max-width: 200px;
    height: auto;
    @media (min-width: 600px) {
      max-width: 340px;
    }
  }

  &_info {
    width: 70%;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 15px;
    text-align: center;
    background-color: $color-primary-light;
    @media (min-width: 600px) {
      font-size: 20px;
    }
  }

  &:hover {
    .staff-item_info {
      text-shadow: 1px 0px 1px $color-primary-dark;
    }
  }
}
</style>
