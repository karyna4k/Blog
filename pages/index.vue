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
  // asyncData (contex) {
  //   return new Promise((resolve, reject)=>{
  //     setTimeout(()=>{
  //       resolve({
  //         postsLoaded: [
  //           {
  //             id: 1,
  //             title: '1 post',
  //             descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //             img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg'
  //           }
  //         ]
  //       })
  //     },1500)
  //   })
  //     .then(data => {
  //       return data
  //     })
  //     .catch(e => {
  //       contex.error(e)
  //     })
  // },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded;
    }
  }
};
</script>
