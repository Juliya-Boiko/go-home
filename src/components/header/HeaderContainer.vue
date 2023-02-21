<template>
  <header class="header">
    <MainContainer>
      <div class="header__content">
        <router-link :to="{ name: 'homepage' }"><LogoIcon /></router-link>
        <UserActions v-if="isLoggedIn"/>
        <AuthActions v-else />
      </div>
    </MainContainer>
  </header>
</template>

<script>
import MainContainer from '../shared/MainContainer.vue';
import LogoIcon from '../logo/LogoIcon.vue';
import AuthActions from './AuthActions.vue';
import UserActions from './UserActions.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderContainer',
  components: {
    MainContainer,
    LogoIcon,
    AuthActions,
    UserActions
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.header {
  padding: 16px 0;
  color: $secondary;
  background-color: $layout-bg;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>