<template>
  <div class="posts">
    <input v-model="postId" type="text">
    <button @click="loadPost">
      Get post
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      postId: ""
    };
  },
  methods: {
    loadPost () {
      this.$router.push(`/posts/${this.postId}`);
    }
  }
};
</script>
