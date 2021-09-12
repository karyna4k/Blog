<template lang="pug">
nuxt-link.post-preview(:to="/blog/ + post.id")
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
  },
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
