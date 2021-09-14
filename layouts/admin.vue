<template lang="pug">
.wrapper
  Header
  .wrapper-content.wrapper-content--fixed
    Intro(title="Admin page")
      nuxt-link.link.linkWhite(to="/admin") Admin
    nuxt
</template>

<script>
import Header from "~/components/system/Header.vue";

export default {
  components: { Header }
};
</script>
