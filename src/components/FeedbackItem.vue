<template>
  <div class="feedback-item feedback">
    <p class="feedback_text">
      Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек
      родной Армении!!! Отдельное спасибо за комплепент в виде фруктовой
      тарелки. Будем рекомендовать этот ресторан своим друзьям и родственникам
      также за рубежом, путешествующих в Санкт-Петербург!!!
    </p>
    <div class="feedback_person person">
      <div class="person_image-wrapper">
        <img
          class="person_image"
          src="../assets/images/feedback_1.jpg"
          alt="Фото посетителя"
        />
      </div>
      <span class="person_role">Посетитель</span>
      <span class="person_name">Николай</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feedback {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  &_text {
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: var(--color-primary-dark);
  }
}
.person {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  &_image {
    width: 100%;
    padding: 5px 0;
    border-radius: 50%;

    &-wrapper {
      max-width: 100px;
      height: auto;
      text-align: center;
    }
  }
  &_role {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: var(--color-primary-dark);
  }
  &_name {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: var(--color-primary-dark);
  }
}
</style>
