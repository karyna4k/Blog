<template lang="pug">
section.intro
  .container
    h2 {{ title }}
    slot
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.intro {
  width: 100%;
  margin: 32px 0;
  padding: 32px;
  color: #fff;
  background-color: #4b40e3;
  text-align: center;

  h2 {
    font-size: 24px;
  }
}
</style>
