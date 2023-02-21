<template>
  <footer class="footer">
    Boiko ° 2023
  </footer>
</template>

<script>
export default {
  name: 'FooterContainer',
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.footer {
  margin-top: auto;
  padding: 16px 0;
  text-align: center;
  color: $secondary;
  background-color: $layout-bg;
}
</style>