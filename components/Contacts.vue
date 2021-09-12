<template lang="pug">
section.contacts
  .container
    h2.title Contacts me!
    form.contacts__form(@submit.prevent="onSubmit")
      label Name:
      input(v-model="user.name")
      label Email:
      input(v-model="user.email")
      label Message:
      textarea(v-model="user.text")
      .contacts__control
        AppButton.btnWhite Submit
</template>

<script>
import AppButton from "@/components/UI/Controls/Button.vue";

export default {
  components: { AppButton },
  data () {
    return {
      user: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit () {
      console.log(this.user);
    },
  },
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
