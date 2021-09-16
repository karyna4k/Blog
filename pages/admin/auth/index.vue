<template lang="pug">
section.auth
  .container
    form.auth__form(@submit.prevent="onSubmit")
      AppInput(v-model="user.email" type="email") Login:
      AppInput(v-model="user.password" type="password") Password:
      .controls
        AppButton Login
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit () {
      // reset
      this.user.email = "";
      this.user.password = "";
    }
  }
};
</script>

<style lang="scss">
.auth {
  max-width: 480px;
  margin: auto;

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;

    input {
      min-width: 480px;
    }
  }
}
</style>
