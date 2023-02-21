<template>
  <form ref="form" class="auth-form" @submit.prevent="handleSubmit" >
    <p class="auth-form__title">Login</p>
    <div class="auth-form__input-wrapper">
      <input type="text" v-model="email" placeholder="Email" class="auth-form__input">
      <span class="auth-form__error" v-if="msg.email">{{ msg.email }}</span>
    </div>

    <div class="auth-form__input-wrapper">
      <input type="password" v-model="password" placeholder="Password" class="auth-form__input">
      <span class="auth-form__error" v-if="msg.password">{{ msg.password }}</span>
    </div>

    <PrimaryBtn type="submit">Enter</PrimaryBtn>
  </form>
</template>

<script>
import PrimaryBtn from '../shared/PrimaryBtn.vue';
import { mapActions } from 'vuex';

export default {
  name: 'LoginForm',
  components: {
    PrimaryBtn
  },
  data() {
    return {
      email: '',
      password: '',
      msg: []
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    async handleSubmit() {
      const user = {
        email: this.email,
        password: this.password
      };
      try {
        await this.login(user);
        this.$refs.form.reset();
        this.$router.push({ name: 'homepage' });
      } catch (error) {
        console.log('error--->', error.response.data);
        this.$notify({
          type: 'error',
          title: 'Error',
          text: error.message,
        });
      }
    },
    validateEmail(value) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg['email'] = '';
      } else {
        this.msg['email'] = 'Invalid Email Address';
      }
    },
    validatePassword(value) {
      if (value.length < 5) {
        this.msg['password'] = 'Min 5 symbols';
      }
      if (value.length >= 5) {
        this.msg['password'] = '';
      }
    },
  },
  watch: {
    email(value) {
      this.validateEmail(value);
    },
    password(value) {
      this.validatePassword(value);
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.auth-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: $secondary;

  &__title {
    margin: 0 0 20px 0;
    font-weight: $fw-bold;
    font-size: 20px;
    line-height: 1.2;
  }

  &__input-wrapper {
  margin: 0 0 20px 0;
  text-align: center;
  }

  &__error {
    text-align: center;
    font-size: 9px;
    line-height: 1.2;
    color: $accent;
  }

  &__input {
  width: 220px;
  padding: 11px 30px;
  box-sizing: border-box;
  display: block;
  font-size: 18px;
  line-height: 1.2;
  text-align: center;
  border: none;
  outline: 2px solid $accent;
    &::placeholder {
      font-size: 18px;
      line-height: 1.2;
      color: $primary;
    }
  }
}
</style>