<template>
  <div class="menu-variety variety">
    <span class="variety_number">93</span>
    <span class="variety_text">напитки</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.variety {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &_number {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 54px;
    text-align: center;
    color: var(--color-details);
  }
  &_text {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: var(--color-primary-dark);
  }
}
</style>
