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
      this.$store.dispatch("addPost", post)
        .then(() => {
          this.$router.push("/admin");
        });
    }
  }
};
</script>
