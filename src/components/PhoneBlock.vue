<template>
    <div class="phone">
        <img src="../assets/images/icons/icon_phone.png" class="phone__icon" alt="Телефонноая трубка">
        <a href="tel: +9998887654" class="phone__number">+999-888-76-54</a>
    </div>
</template>

<style lang="scss" scoped>


.phone {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;

    @media only screen and (min-width: $screen-tablet) {
        margin-bottom: 0;
    }


    &__icon {
        max-width: 23px;
        height: 23px;
    }

    &__number {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: $color-primary-light;
    }
}

</style>