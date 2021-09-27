<template lang="pug">
section.post
  .container
    .post__wrapper
      .post__header
        img(:src="post.img", :alt="post.title")
      .post__body
        h1.post__title.title {{ post.title }}
        p.post__descr {{ post.descr }}
        p.post__text {{ post.content }}
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
