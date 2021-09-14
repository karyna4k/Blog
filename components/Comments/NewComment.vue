<template lang="pug">
section.new-comment
  .container
    h2.title New comment:
    Message(v-if="message", :message="message")
    form.new-comment__form(@submit.prevent="onSubmit")
      AppInput(v-model="comment.name") Name:
      AppTextarea(v-model="comment.text") Message:
      .new-comment__control
        AppButton Submit
</template>

<script>

export default {
  data () {
    return {
      message: null,
      comment: {
        name: "",
        text: ""
      }
    };
  },
  methods: {
    onSubmit () {
      this.message = "Submitted!";
      // Reset
      this.comment.name = "";
      this.comment.text = "";
    }
  }
};
</script>

<style lang="scss">
.new-comment {
  h2 {
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
