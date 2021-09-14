<template lang="pug">
NewPostForm(@submit="onSubmit")
</template>

<script>
import NewPostForm from "@/components/Admin/NewPostForm.vue";

export default {
  components: { NewPostForm },
  layout: "admin",
  methods: {
    onSubmit (post) {
      console.log("Post added");
      console.log(post);
    }
  }
};
</script>
