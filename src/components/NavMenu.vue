<template>
    <div class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item"
            v-for="link of navLinks"
            :key="link"
            >
                <a href="#" class="navigation__link">{{link}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default { 
  data () { 
    return {
        navLinks: ["Главная", "Меню", "О нас", "Бронь", " KAAARZINA"],
    }
  }
}
</script>

<style lang="scss">
.navigation {

    &__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 30px;

        @media only screen and (min-width: $screen-tablet) {
            flex-direction: row;
            align-items: center;
            gap: 15px;
            margin-bottom: 0;
        }
    }

    &__link {
    color: $color-primary-light;

    @media only screen and (min-width: $screen-phone-landscape) {
        font-size: 16px;
    }

    @media only screen and (min-width: $screen-tablet) {
        font-size: 16px;
    }

    @media only screen and (min-width: $screen-desktop) {
        font-size: 19px;
    }
    }
}



</style>
