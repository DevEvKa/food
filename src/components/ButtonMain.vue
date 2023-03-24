<template>
  <button class="button" @click="btnClicked">
    <slot name="button"></slot>
  </button>
</template>

<script setup>
const btnClicked = () => {
  console.log("btnClicked");
};
</script>

<style lang="scss" scoped>
.button {
  display: block;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 19px;
  color: $color-primary-light;
  background-color: $color-accent;
  border: none;
  padding: 12px 16px;

  @media (min-width: 800px) {
    padding: 10px;
  }
  @media (min-width: 1000px) {
    padding: 12px 16px;
  }
  @media (min-width: 1200px) {
    padding: 14px 25px;
    font-size: 16px;
  }
  &:hover {
    color: $color-accent;
    background-color: $color-primary-light;
  }
}
</style>
