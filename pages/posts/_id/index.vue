<template>
  <h1>Post id is: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate ({ params }) {
    // Number

    return /^\d+$/.test(params.id);
  }
};
</script>
