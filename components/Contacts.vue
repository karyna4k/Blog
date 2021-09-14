<template lang="pug">
section.contacts
  .container
    h2.title Contacts me!
    Message(v-if="message", :message="message")
    form.contacts__form(@submit.prevent="onSubmit")
      AppInput(v-model="user.name") Name:
      AppInput(v-model="user.email", type="email") Email:
      AppTextarea(v-model="user.text") Message:
      .contacts__control
        AppButton.btnWhite Submit
</template>

<script>
export default {
  data () {
    return {
      message: null,
      user: {
        name: "",
        email: "",
        text: ""
      }
    };
  },
  methods: {
    onSubmit () {
      this.message = "Submitted!";
      // Reset
      this.user.name = "";
      this.user.email = "";
      this.user.text = "";
    }
  }
};
</script>

<style lang="scss">
.contacts {
  background-color: #4b40e3;
  color: #fff;

  h2 {
    color: #fff;
    text-align: center;
  }

  &__form {
    max-width: 600px;
    margin: 30px auto;
  }

  &__control {
    display: flex;
    justify-content: center;
    margin: 32px;
  }
}
</style>
