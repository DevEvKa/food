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
  letter-spacing: 1.1px;
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
    box-shadow: 0px 0px 6px 0px $color-accent;
    text-shadow: 1px 0px 1px $color-primary-light;
    border-color: transparent;
  }
  &:active {
    color: $color-accent;
    background-color: $color-primary-light;
    text-shadow: 1px 0px 1px $color-accent;
  }
}
</style>
