<template lang="pug">
  .control
    label
      slot
    input(v-bind="$attrs" :value="value" :required="required" :type="type" @input="$emit('input', $event.target.value)")
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: true
    }
  }
};
</script>
