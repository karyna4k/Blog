<template lang="pug">
section.comments(v-if="comments")
  .container
    h2.title Comments:
    p(v-if="comments.length === 0") There are no comments
    .comments__item.comment(v-for="comment in comments")
      .comment__name {{ comment.name }}
      .comment__text {{ comment.text }}
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null
    }
  }
};
</script>

<style lang="scss">
.comments {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  h2 {
    text-align: center;
  }

  p {
    margin: 8px 0;
    text-align: center;
  }
}

.comment {
  margin: 32px 0;
  padding: 16px;
  background-color: #fff;

  &__name {
    margin-bottom: 8px;
    font-size: 24px;
    color: #494ce8;
  }

  &__text {
    color: gray;
  }
}
</style>
