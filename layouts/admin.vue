<template lang="pug">
.wrapper
  Header
  .wrapper-content.wrapper-content--fixed
    Intro(title="Admin page")
      nuxt-link.link.linkWhite(to="/admin") Admin
      nuxt-link.link.linkWhite(to="/admin/new-post") New post
      nuxt-link.link.linkWhite(to="/admin/comments") Comments
    nuxt
</template>

<script>
import Header from "~/components/system/Header.vue";

export default {
  components: { Header },
  middleware: ["auth"]
};
</script>
