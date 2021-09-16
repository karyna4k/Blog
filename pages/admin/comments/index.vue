<template lang="pug">
CommentTable(:thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']")
  tbody(slot="tbody")
    tr(v-for="comment in comments" :key="comment.id")
      td
        span {{comment.name}}
      td
        span {{comment.text}}
      td
        span(v-if="comment.status" class="status true") Publish
        span(v-else class="status false") Hidden
      td
        span(@click="changeStatus(comment.id)" class="link") Change status
      td
        span(@click="deleteComment(comment.id)" class="link") Delete
</template>

<script>
import CommentTable from "@/components/Admin/CommentTable.vue";

export default {
  components: { CommentTable },
  layout: "admin",
  data () {
    return {
      comments: [
        {
          id: 1,
          name: "Alex",
          text: "Не следует, однако, забывать, что существующая теория обеспечивает широкому кругу (специалистов) участие в формировании модели развития.",
          status: true
        },
        {
          id: 2,
          name: "Kate",
          text: "Не следует, однако, забывать, что существующая теория обеспечивает широкому кругу (специалистов) участие в формировании модели развития.",
          status: false
        },
      ],
    };
  },
  methods: {
    changeStatus (id) {
      console.log(`Change comment status id ${id}`);
    },
    deleteComment (id) {
      console.log(`Delete comment id ${id}`);
    }
  }
};
</script>
