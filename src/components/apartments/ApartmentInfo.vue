<template>
  <article class="apartment-info">
      <div class="apartment-info__header">
        <h1 class="apartment-info__title">{{ item.title }}</h1>
        <StarRating :rating="item.rating"/>
      </div>
      <img src="../../assets/images/default-apartment-img.jpg" alt="apartment poto" class="apartment-info__img">
      <p class="apartment-info__descr">{{ item.descr }}</p>
      <PrimaryBtn class="apartment-info__btn" @click="handleAddOrder(item._id)">Book</PrimaryBtn>
  </article>
</template>

<script>
import StarRating from '../rating/StarRating.vue';
import PrimaryBtn from '../shared/PrimaryBtn.vue';
import { addOrder } from '@/api/customAxios';

export default {
  name: 'ApartmentInfo',
  components: {
    StarRating,
    PrimaryBtn
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    async handleAddOrder(id) {
      try {
        const result = await addOrder(id);
        if (result) {
          this.$notify({
            type: 'success',
            title: 'Add new order succesfull',
          });
        }
      } catch (error) {
        console.log('error--->', error.response.data);
        this.$notify({
          type: 'error',
          title: 'Error',
          text: error.message,
        });
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.apartment-info {
  margin: 0 0 30px 0 ;
  @media screen and (min-width: 1110px) {
    margin: 0;
  }

  &__header {
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
  }

  .apartment-info__title {
    margin: 0 20px 0 0;
    font-weight: $fw-bold;
    font-size: 20px;
    line-height: 1.2;
  }

  &__img {
    width: 300px;
    margin: 0 0 30px 0;
    @media screen and (min-width: 768px) {
      width: 500px;
    }
    @media screen and (min-width: 1110px) {
      width: 730px;
    }
  }

  &__descr {
    margin: 0 0 30px 0;
    font-weight: $fw-medium;
    font-size: 16px;
    line-height: 1.2;
  }

  &__btn {
    margin: 0 auto;
  }
}
</style>