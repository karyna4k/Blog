<template lang="pug">
header
  .navbar
    .container
      .navbar-content
        .logo Blog
        ul.navbar-list
          li.navbar-item(v-for="link in links", :key="link.title")
            nuxt-link.navbar-link(:title="link.title", :to="link.url") {{ link.title }}
</template>

<script>
export default {
  data () {
    return {
      links: [{ title: "Home", url: "/" }]
    };
  }
};
</script>
