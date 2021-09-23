<template lang="pug">
NewPostForm(@submit="onSubmit" :postEdit="post")
</template>

<script>
import axios from "axios";
import NewPostForm from "@/components/Admin/NewPostForm.vue";

export default {
  components: { NewPostForm },
  layout: "admin",
  asyncData (context) {
    return axios.get(`https://blog-nuxt-321ac-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
      .then((res) => {
        return {
          post: { ...res.data, id: context.params.postId }
        };
      })
      .catch(e => context.error(e));
  },
  methods: {
    onSubmit (post) {
      this.$store.dispatch("editPost", post)
        .then(() => {
          this.$router.push("/admin");
        });
    }
  }
};
</script>
