<template lang="pug">
client-only
  .wrapper
    Header
    .wrapper-content.wrapper-content--fixed
      Intro(title="Admin page")
        nuxt-link.link.linkWhite(to="/admin") Admin
        nuxt-link.link.linkWhite(to="/admin/new-post") New post
        nuxt-link.link.linkWhite(to="/admin/comments") Comments
        span.link.linkWhite(@click="logoutUser") Logout
      nuxt
</template>

<script>
import Header from "~/components/system/Header.vue";

export default {
  components: { Header },
  middleware: ["auth-check", "auth"],
  methods: {
    logoutUser () {
      this.$store.dispatch("logoutUser").then(() => {
        this.$router.push("/admin/auth");
      });
    },
  },
};
</script>
