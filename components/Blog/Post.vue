<template lang="pug">
section.post
  .container
    .post__header
      img(:src="post.img", :alt="post.title")
      h1.title {{ post.title }}
      p {{ post.descr }}
    .post__body
      p {{ post.content }}
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>
