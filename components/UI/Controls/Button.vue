<template lang="pug">
button.btn(:class="btnClass", v-on="$listeners", v-bind="$attrs")
  slot
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: "btnPrimary",
    },
  },
};
</script>
