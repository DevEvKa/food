<template>
  <div class="dishes-item dish">
    <img
      class="dish_image"
      src="../assets/images/dishes_1.jpg"
      alt="Пример блюда"
    />
    <div class="dish_info">
      <h6 class="dish_name">Гамбургер мини</h6>
      <div class="dish_spots">.</div>
      <div class="dish_price-block">
        <span class="dish_price">220</span>
        <span class="dish_currency">₽</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dish {
  display: flex;
  align-items: center;
  justify-content: space-around;

  &_info {
    display: flex;
    flex-grow: 1;
    border: 1px solid pink;
    padding: 0 10px;
    gap: 10px;
    align-items: baseline;
  }

  &_image {
    display: block;
    height: auto;
    width: 100%;
    max-width: 130px;
    @media (min-width: 797.98px) {
      max-width: 160px;
    }
  }
  &_name {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;
    color: var(--color-primary-dark);
  }
  &_spots {
    color: transparent;
    border-bottom: 1px dashed var(--color-primary-dark);
    display: none;
    @media (min-width: 797.98px) {
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
    color: var(--color-primary-dark);
  }
}
</style>
