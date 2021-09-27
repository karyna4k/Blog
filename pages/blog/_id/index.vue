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
  },
  head () {
    const title = this.post.title;
    const descr = this.post.descr;
    const img = this.post.img;
    const type = "article";

    return {

      title,
      meta: [
        { hid: "og: title", name: "og: title", content: title },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type },
        { hid: "og:img", name: "og:img", content: img },
      ]
    };
  },

};
</script>

<style lang="scss">
.post {
  margin: 0 auto;

  &__wrapper {
    display: flex;
    gap: 32px;
  }

  &__header {
    flex-grow: 1;
    margin: 0 auto;

    img {
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__body {
    max-width: 35%;
  }

  &__title {
    margin: 32px 0;
    text-align: center;
  }

  &__descr {
    margin: 24px 0;
    color: gray;
  }
}
</style>
