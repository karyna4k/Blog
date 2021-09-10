<template lang="pug">
section.posts
  .container
    .posts__wrapper
      PostPreview(v-for="post in posts", :key="post.id", :post="post")
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview.vue";

export default {
  components: {
    PostPreview,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.posts {
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
}
</style>
