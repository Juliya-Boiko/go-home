<template>
  <form class="filters-form" @submit.prevent="submitHandler">
    <CustomSelect :items="cities" v-model="city" class="filters-form__component" />
    <CustomInput v-model="price" class="filters-form__component" />
    <PrimaryBtn type="submit">SEARCH</PrimaryBtn>
  </form>
</template>

<script>
import { getCities } from '../../api/customAxios';
import CustomSelect from '../shared/CustomSelect.vue';
import CustomInput from '../shared/CustomInput.vue';
import PrimaryBtn from '../shared/PrimaryBtn.vue';

export default {
  name: 'FiltersForm',
  components: {
    CustomSelect,
    CustomInput,
    PrimaryBtn
  },
  data() {
    return {
      cities: [],
      price: '',
      city: '',
    }
  },
  async created() {
    try {
      const data = await getCities();
      this.cities = data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    submitHandler(e) {
      //console.log('Form', e.target.elements[0].checked);
      this.$emit('submit', { city: e.target.elements[0].value, price: e.target.elements[1].value })
    }
  }
}
</script>

<style lang="scss" scoped>
  .filters-form {
    display: flex;
    align-items: center;
    margin: 0 0 30px 0;

    &__component {
      margin: 0 30px 0 0;
    }
  }
</style>