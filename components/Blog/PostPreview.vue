<template lang="pug">
nuxt-link.post-preview(:to="getLink")
  img(:src="post.img", :alt="post.title")
  .post-content
    h3.title {{ post.title }}
    p {{ post.descr }}
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getLink () {
      return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`;
    }
  }
};
</script>

<style lang="scss">
.post-preview {
  width: calc((100% - 40px * 2) / 3);
}

.post-content {
  p {
    color: gray;
  }
}
</style>
