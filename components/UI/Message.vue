<template lang="pug">
  .message(:class="messageClass")
    p {{message}}
</template>

<script>
export default {
  props: {
    messageClass: {
      type: String,
      default: "success"
    },
    message: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.message {
  font-size: 24px;

  &.success {
    color: #26de81;
  }

  &.error {
    color: #fc5c65;
  }

  p {
    text-align: center;
  }
}
</style>
