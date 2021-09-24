<template lang="pug">
client-only
  CommentTable(:thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']")
    tbody(slot="tbody")
      tr(v-for="comment in comments", :key="comment.id")
        td
          span {{ comment.name }}
        td
          span {{ comment.text }}
        td
          span.status.true(v-if="comment.publish") Publish
          span.status.false(v-else) Hidden
        td
          span.link(@click="changeStatus(comment)") Change status
        td
          span.link(@click="deleteComment(comment.id)") Delete
</template>

<script>
import axios from "axios";
import CommentTable from "@/components/Admin/CommentTable.vue";

export default {
  components: { CommentTable },
  layout: "admin",
  data () {
    return {
      comments: []
    };
  },
  mounted () {
    this.loadComments();
  },
  methods: {
    loadComments () {
      axios
        .get(
          "https://blog-nuxt-321ac-default-rtdb.firebaseio.com/comments.json"
        )
        .then((res) => {
          const commentsArray = [];

          Object.keys(res.data).forEach((key) => {
            const comment = res.data[key];
            commentsArray.push({ ...comment, id: key });
          });

          this.comments = commentsArray;
        });
    },
    changeStatus (comment) {
      comment.publish = !comment.publish;
      axios.put(
        `https://blog-nuxt-321ac-default-rtdb.firebaseio.com/comments/${comment.id}.json`,
        comment
      );
    },
    deleteComment (id) {
      axios
        .delete(
          `https://blog-nuxt-321ac-default-rtdb.firebaseio.com/comments/${id}.json`
        )
        .then(res => this.loadComments());
    }
  }
};
</script>
