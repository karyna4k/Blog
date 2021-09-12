<template lang="pug">
section.contacts
  .container
    h2.title Contacts me!
    form.contacts__form(@submit.prevent="onSubmit")
      AppInput(v-model="user.name") Name:
      AppInput(v-model="user.email" type="email") Email:
      AppTextarea(v-model="user.text") Message:
      .contacts__control
        AppButton.btnWhite Submit
</template>

<script>
import AppInput from "@/components/UI/Controls/Input.vue";
import AppTextarea from "@/components/UI/Controls/Textarea.vue";
import AppButton from "@/components/UI/Controls/Button.vue";

export default {
  components: { AppInput, AppTextarea, AppButton },
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
