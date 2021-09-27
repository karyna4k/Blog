<template lang="pug">
.wrapper-content.wrapper-content--fixed
  Promo
  Intro(title="My last posts")
  Posts(:posts="postsLoaded")
  Contacts
</template>

<script>
import Promo from "@/components/Promo.vue";
import Contacts from "@/components/Contacts.vue";

export default {
  components: {
    Promo,
    Contacts
  },
  data () {
    return {
      posts: [],
    };
  },
  head () {
    const title = "My SSR blog";
    const descr = "My SSR blog with Nuxt.js!";
    const type = "site";

    return {

      title,
      meta: [
        { hid: "og: title", name: "og: title", content: title },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type },
      ]
    };
  },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded;
    }
  }
};
</script>
