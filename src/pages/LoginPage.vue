<template>
  <AuthSection>
    <LoginForm />
  </AuthSection>
</template>

<script>
import AuthSection from '../components/auth/AuthSection.vue';
import LoginForm from '@/components/auth/LoginForm.vue';

export default {
  name: 'LoginPage',
  components: {
    AuthSection,
    LoginForm
  },
}
</script>

<style lang="scss" scoped>

</style>