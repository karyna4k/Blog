<template lang="pug">
section.new-comment
  .container
    h2.title New comment:
    form.new-comment__form(@submit.prevent="onSubmit")
      label Name:
      input(v-model="comment.name")
      label Message:
      textarea(v-model="comment.text")
      .new-comment__control
        button.btn.btnPrimary Submit
</template>

<script>
export default {
  data () {
    return {
      comment: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit () {
      console.log(this.comment);
    },
  },
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
