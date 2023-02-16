<template>
  <header class="header">
    <MainContainer>
      <router-link :to="{ name: 'homepage' }"><LogoIcon /></router-link>
    </MainContainer>
  </header>
</template>

<script>
import MainContainer from '../shared/MainContainer.vue';
import LogoIcon from '../logo/LogoIcon.vue';

export default {
  name: 'HeaderContainer',
  components: {
    MainContainer,
    LogoIcon
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.header {
  padding: 16px 0;
  color: $secondary;
  background-color: $layout-bg;
}
</style>