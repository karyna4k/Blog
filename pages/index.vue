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
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded;
    }
  }
};
</script>
