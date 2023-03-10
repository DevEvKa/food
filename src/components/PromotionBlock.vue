<template>
  <div class="promotion-block promotion">
    <h3 class="promotion_title">
      Отпразднуйте в одном из самых лучших ресторанов
    </h3>
    <p class="promotion_benefit">Только в этом месяце бизнес-ланч от 250 ₽</p>
  </div>
</template>
<styles lang="scss" scoped>
.promotion {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;

  &_title {
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 34px;
    text-align: center;
    color: var(--color-secondary);
    @media (min-width: 797.98px) {
      font-size: 52px;
      line-height: 60px;
    }
  }
  &_benefit {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: var(--color-primary-light);
  }
}
</styles>
