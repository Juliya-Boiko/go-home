<template>
  <div class="main-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MainContainer'
}
</script>

<style lang="scss" scoped>
  .main-container {
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      max-width: 768px;
      padding: 0;
    }

    @media screen and (min-width: 1110px) {
      max-width: 1110px;
      padding: 0;
    }
  }
</style>