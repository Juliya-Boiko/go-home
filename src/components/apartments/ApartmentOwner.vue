<template>
  <section class="owner-info">
    <h2 class="owner-info__title">Owner information: </h2>
    <p class="owner-info__text">Name: {{ item.name }}</p>
    <p class="owner-info__text">Tel: {{ item.phone }}</p>
    <p class="owner-info__text">Email: {{ item.email }}</p>
  </section>
</template>

<script>
export default {
  name: 'ApartmentOwner',
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.owner-info {
  margin: 0 0 20px 0;
  padding: 20px;
  background-color: $card-bg;
  @media screen and (min-width: 1110px) {
    min-width: 350px;
  }
  &__title {
    margin: 0 0 20px 0;
    font-weight: $fw-bold;
    font-size: 20px;
    line-height: 1.2;
  }

  &__text {
    font-weight: $fw-medium;
    font-size: 16px;
    line-height: 1.2;
  }
}
</style>