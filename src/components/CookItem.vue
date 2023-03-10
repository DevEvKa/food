<template>
  <div class="cook-item">
    <img
      class="cook-item_img"
      src="../assets/images/cook_1.jpg"
      alt="Фотография повара"
    />
    <div class="cook-item_info">
      <h6 class="cook-item_name">Ирина Иванова</h6>
      <span class="cook-item_role">Бренд-шеф</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cook-item {
  max-width: 287px;
  max-height: 380px;
  @media (min-width: 797.98px) {
    max-width: 350px;
    max-height: 462px;
  }

  &_img {
    width: 100%;
    height: auto;
  }

  &_info {
    width: 70%;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 15px;
    text-align: center;
    background-color: var(--color-primary-light);
  }
}
</style>
