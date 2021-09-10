<template lang="pug">
.wrapper-content.wrapper-content--fixed
  Promo
  Intro(title="My last posts")
</template>

<script>
import Promo from "@/components/Promo.vue";
import Intro from "@/components/UI/Intro.vue";

export default {
  components: {
    Promo,
    Intro
  },
};
</script>
