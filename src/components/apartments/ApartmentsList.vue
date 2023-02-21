<template>
  <div class="apartments-list">
    <ApartmentItem 
      v-for="{ _id, descr, price, rating } in items"
      :key="_id"
      :id="_id"
      :descr="descr"
      :price="price"
      :rating="rating"
    />
  </div>
</template>

<script>
import ApartmentItem from './ApartmentItem.vue';

export default {
  name: 'ApartmentsList',
  components: {
    ApartmentItem
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },
  // mounted() {
  //   console.log(this.items)
  // }
}
</script>

<style lang="scss" scoped>
.apartments-list {
  margin: -15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 1110px) {
    margin: -30px;
  }
}
</style>