<template lang="pug">
section.auth
  .container
    form.auth__form(@submit.prevent="onSubmit")
      AppInput(v-model="user.email", type="email") Email:
      AppInput(v-model="user.password", type="password") Password:
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
      this.$store
        .dispatch("authUser", this.user)
        .then((res) => {
          console.log(res);

          // reset
          this.user.email = "";
          this.user.password = "";
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
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
