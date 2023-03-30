<template>
  <div class="phone-block">
    <div class="phone">
      <img
        src="@/assets/images/icon_phone.svg"
        class="phone_icon"
        alt="Телефонная трубка"
      />
      <a href="tel: +9998887654" class="phone_number">+999-888-76-54</a>
    </div>
    <p class="phone_text">
      Свяжитесь с нами для <br />
      бронирования
    </p>
  </div>
</template>

<style lang="scss" scoped>
.phone-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  margin: 50px 0;
  @media (min-width: 800px) {
    margin: 0;
    max-width: 250px;
    padding: 0 25px;
  }
  @media (min-width: 1000px) {
    padding: 0 35px;
  }

  .footer & {
    margin: 0;
    padding: 20px;
  }
}
.phone {
  display: flex;
  align-items: center;
  gap: 15px;
  @media (min-width: 800px) {
    gap: 8px;
  }

  &_icon {
    max-width: 40px;
    height: 40px;
    @media (min-width: 800px) {
      max-width: 23px;
      height: 23px;
    }

    .footer & {
      max-width: 25px;
      height: 25px;
    }
  }

  &_number {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 25px;
    color: $color-primary-light;
    @media (min-width: 800px) {
      font-size: 16px;
    }
    @media (min-width: 1000px) {
      font-size: 21px;
    }
    .footer & {
      font-size: 21px;
    }
  }

  &_text {
    display: none;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: $color-primary-light;
    @media (min-width: 1000px) {
      display: block;
      font-size: 18px;
    }
    .footer & {
      display: none;
    }
  }
}
</style>
