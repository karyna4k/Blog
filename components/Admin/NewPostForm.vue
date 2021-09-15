<template lang="pug">
section.new-post
  .container
    form(@submit.prevent)
      AppInput(v-model="post.title") Title:
      AppInput(v-model="post.descr") Description:
      AppInput(v-model="post.img") Img link:
      AppTextarea(v-model="post.content") Content:
      .controls
        AppButton.btnDanger(@click="cancel") Cancel
        AppButton(@click="onSubmit") Save
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      post: this.postEdit
        ? { ...this.postEdit }
        : {
          title: "",
          descr: "",
          img: "",
          content: ""
        }
    };
  },
  methods: {
    onSubmit () {
      this.$emit("submit", this.post);
    },
    cancel () {
      this.$router.push("/admin/");
    }
  }
};
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
}
</style>
