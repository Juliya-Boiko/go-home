<template>
  <div class="apartment-item">
    <img src="../../assets/images/default-apartment-img.jpg" alt="" class="apartment-item__img">
    <div class="apartment-item__inner">
      <p class="apartment-item__descr">{{ descr }}</p>
      <div class="apartment-item__rating">
        <StarRating :rating="rating" />
      </div>
      <router-link :to="{ name: 'apartments', params: { id } }" class="apartment-item__link"></router-link>
      <p class="apartment-item__price">UAH {{ price }} per night</p>
    </div>
  </div>
</template>

<script>
import StarRating from '../rating/StarRating.vue';
export default {
  name: 'ApartmentItem',
  components: {
    StarRating
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: 0,
    },
  },
  // mounted() {
  //   console.log(this.descr);
  // },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.apartment-item {
  position: relative;
  overflow: hidden;
  margin: 15px;
  width: calc(100% / 2 - 60px);
  height: 200px;
  @media screen and (min-width: 1110px) {
    margin: 30px;
    width: calc(100% / 3 - 120px);
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__inner {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#0f1d2d, 0.7);
    min-height: 200px;
    height: 100%;
    color: $secondary;
    text-align: left;
    line-height: 1.4;
    cursor: pointer;
    z-index: 1;
  
    &:hover {
      opacity: 1;
    }
  }

  &__descr {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 3);
    overflow: hidden;
  }
    
  &__rating {
    margin-bottom: 20px;
  }

  &__price {
    font-size: $fs-normal;
    font-weight: $fw-bold;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>