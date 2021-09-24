<template lang="pug">
.wrapper-content.wrapper-content--fixed
  Post(:post="post")
  Comments(:comments="comments")
  NewComment(:postId="$route.params.id")
</template>

<script>
import axios from "axios";

import Post from "@/components/Blog/Post.vue";
import NewComment from "@/components/Comments/NewComment.vue";
import Comments from "@/components/Comments/Comments.vue";

export default {
  components: { Post, NewComment, Comments },
  async asyncData (context) {
    const [post, comments] = await Promise.all([
      axios.get(`https://blog-nuxt-321ac-default-rtdb.firebaseio.com/posts/${context.params.id}.json`),
      axios.get("https://blog-nuxt-321ac-default-rtdb.firebaseio.com/comments.json")
    ]);

    const commentsArrayRes = Object.values(comments.data).filter(comment => (comment.postId === context.params.id) && comment.publish);

    return {
      post: post.data,
      comments: commentsArrayRes
    };
  }
};
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;

  &__header {
    margin: 0 auto;

    h1 {
      margin: 32px 0;
      text-align: center;
    }

    p {
      margin: 24px 0;
      color: gray;
    }
  }
}
</style>
