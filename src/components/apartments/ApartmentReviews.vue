<template>
  <div class="apartment-reviews">
    <div class="apartment-reviews__header">
      <p class="apartment-reviews__title">Rating summary</p>
      <div class="apartment-reviews__rating">
        <p class="apartment-reviews__amount">{{ amountReviews }} reviews</p>
        <StarRating :rating="totalRating" />
      </div>
    </div>
    <p v-if="!items.length" class="apartment-reviews__thumb">... dont have reviews yet ...</p>
    <ApartmentReview v-else v-for="item in items" :key="item.author" :item="item"/>
  </div>
</template>

<script>
import StarRating from '../rating/StarRating.vue';
import ApartmentReview from './ApartmentReview.vue';

export default {
  name: 'ApartmentReviews',
  components: {
    StarRating,
    ApartmentReview,
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    amountReviews() {
      return this.items.length
    },
    totalRating() {
      const total = this.items.reduce((acc, item) => acc += item.rating, 0);
      return total / this.items.length;
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.apartment-reviews {
  &__header {
    padding: 20px;
    background-color: $card-bg;
  }

  &__title {
    margin: 0 0 7px 0;
    text-transform: uppercase;
    text-align: center;
    font-weight: $fw-bold;
    font-size: 20px;
    line-height: 1.2;
  }

  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__thumb {
    margin: 20px 0 0 0;
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
    line-height: 1.2;
  }
}
</style>