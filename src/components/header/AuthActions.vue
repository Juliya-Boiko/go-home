<template>
  <div class="auth-actions">
    <router-link :to="{ name: 'login' }" class="auth-actions__link">Login</router-link>
      /
    <router-link :to="{ name: 'register' }" class="auth-actions__link">Register</router-link>
  </div>
</template>

<script>
export default {
  name: 'AuthActions'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.auth-actions {
  font-weight: $fw-medium;
  font-size: 16px;
  line-height: 1.2;
  color: $secondary;

  &__link {
  color: inherit;
  text-decoration: none;
}
}
</style>