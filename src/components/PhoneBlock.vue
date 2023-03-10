<template>
  <div class="phone-block">
    <div class="phone">
      <img
        src="../assets/images/icons/icon_phone.png"
        class="phone_icon"
        alt="Телефонноая трубка"
      />
      <a href="tel: +9998887654" class="phone_number">+999-888-76-54</a>
    </div>
    <p class="phone_text">Свяжитесь с нами для бронирования</p>
  </div>
</template>

<style lang="scss" scoped>
.phone-block {
  display: none;

  @media (min-width: 797.98px) {
    display: block;
    max-width: 250px;
    padding: 0 25px;
  }
}
.phone {
  display: flex;
  align-items: center;
  gap: 8px;

  &_icon {
    max-width: 23px;
    height: 23px;
  }

  &_number {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: var(--color-primary-light);
  }

  &_text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: var(--color-primary-light);
  }
}
</style>
