<template lang="pug">
  .control
    label
      slot
    textarea(:value="value" @input="$emit('input', $event.target.value)")
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
  }
};
</script>
