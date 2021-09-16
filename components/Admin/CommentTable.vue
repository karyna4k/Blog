<template lang="pug">
section
  .container
    table
      thead
        tr
          th(v-for="(th, index) in thead", :key="index") {{ th }}
      slot(name="tbody")
</template>

<script>
export default {
  props: {
    thead: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: separate;
  border-spacing: 0 16px;
  width: 100%;
  line-height: 1.5;

  thead th {
    padding: 20px 22px;
    white-space: nowrap;
    font-size: 20px;
  }

  td {
    padding: 20px;
  }

  tbody tr {
    background-color: #fff;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    box-shadow: 0 16px 16px rgba(0, 0, 0, 0.01);

    &:hover {
      box-shadow: 0 16px 16px rgba(0, 0, 0, 0.02);
      transform: translate(0, -3px);
      transition-delay: 0s !important;
    }
  }
}
</style>
