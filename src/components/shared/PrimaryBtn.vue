<template>
  <button :type="type" :class="{ 'btn-primary': true, 'btn-primary--outlined': outlined }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PrimaryBtn',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.btn-primary {
  display: block;
  width: 220px;
  padding: 13px 0;
  text-align: center;
  font-size: $fs-normal;
  line-height: 1.2;
  border: none;
  outline: none;
  color: $secondary;
  background-color: $accent;
  cursor: pointer;

  &--outlined {
    border: 2px solid $accent;
    color: $accent;
    background-color: $secondary;
  }
}
</style>