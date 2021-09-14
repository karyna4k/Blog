<template lang="pug">
header
  .navbar
    .container
      .navbar-content
        .logo
          nuxt-link(to="/") Blog
        ul.navbar-list
          li.navbar-item(v-for="link in links", :key="link.title")
            nuxt-link.navbar-link(:title="link.title", :to="link.url") {{ link.title }}
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: "Blog", url: "/blog" },
        { title: "About", url: "/about" }
      ]
    };
  }
};
</script>

<style lang="scss">
.logo a {
  color: #333;
  font-weight: 700;
}

.navbar-link {
  &.nuxt-link-exact-active {
    color: #4b40e3;
    font-weight: 700;
  }
}
</style>
