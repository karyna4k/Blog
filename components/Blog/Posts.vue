<template lang="pug">
section.posts
  .container
    .posts__wrapper
      PostPreview(v-for="post in posts", :key="post.id", :post="post" :admin="admin")
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
    admin: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style lang="scss">
.posts {
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
