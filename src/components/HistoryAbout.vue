<template>
  <div class="history-about history">
    <h3 class="history_title">
      Наша <span class="history_title_accent">история</span>
    </h3>
    <p class="history_description">
      Как и у любого другого самобытного места, у нас есть своя, особая история.
      Идея ресторана пришла основателям неожиданно. Во время прогулки по лесу
      создатель нашего ресторана застрял в сотнях километров от ближайшего
      населенного пункта. Вдали от цивилизации и связи им пришлось навремя
      обустровать себе нехитрый быт, добывать и готовить себе еду.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.history {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  &_title {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 46px;
    color: var(--color-primary-dark);
    &_accent {
      color: var(--color-secondary);
    }
    @media (min-width: 797.98px) {
      font-size: 54px;
      line-height: 62px;
    }
  }

  &_description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: var(--color-dark-secondary);
  }
}
</style>
