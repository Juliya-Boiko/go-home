<template>
  <div class="apartment-review">
    <div class="apartment-review__header">
      <img src="../../assets/icons/person.svg" alt="" class="apartment-review__photo">
      <div>
        <p class="apartment-review__author">{{ item.author }}</p>
        <StarRating :rating="item.rating"/>
      </div>
    </div>
    <p class="apartment-review__content">{{ item.content }}</p>
  </div>
</template>

<script>
import StarRating from '../rating/StarRating.vue';

export default {
  name: 'ApartmentReview',
  components: {
    StarRating
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.apartment-review {
  padding: 20px;
  border: 2px solid $card-bg;

  &__header {
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
  }

  &__photo {
    margin: 0 17px 0 0;
  }

  &__author {
    font-weight: $fw-bold;
    font-size: $fs-normal;
    line-height: 1.2;
  }

  &__content {
    font-weight: $fw-medium;
    font-size: 16px;
    line-height: 1.2;
  }
}
</style>