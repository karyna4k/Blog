<template lang="pug">
section.not-found
  .container
    .not-found__wrapper
      h1.title THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.
      p You may have mistyped the address or the page may have moved.
      nuxt-link(to="/") Go to homepage
</template>

<style lang="scss">
.not-found {
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;

    p {
      margin: 16px 0;
    }
  }
}
</style>
