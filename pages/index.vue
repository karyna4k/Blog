<template lang="pug">
.wrapper-content.wrapper-content--fixed
  Promo
  Intro(title="My last posts")
  Posts(:posts="posts")
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
      posts: [
        {
          id: 1,
          title: "Post 1",
          descr:
            "Не следует, однако, забывать, что существующая теория обеспечивает широкому кругу (специалистов) участие в формировании модели развития.",
          img: "https://cdn.pixabay.com/photo/2021/03/16/10/04/street-6099209_1280.jpg",
        },
        {
          id: 2,
          title: "Post 2",
          descr:
            "Не следует, однако, забывать, что существующая теория обеспечивает широкому кругу (специалистов) участие в формировании модели развития.",
          img: "https://cdn.pixabay.com/photo/2021/09/07/10/11/coffee-beans-6603499_1280.jpg",
        },
        {
          id: 3,
          title: "Post 3",
          descr:
            "Не следует, однако, забывать, что существующая теория обеспечивает широкому кругу (специалистов) участие в формировании модели развития.",
          img: "https://cdn.pixabay.com/photo/2021/07/03/20/58/church-6384849_1280.jpg",
        },
        {
          id: 4,
          title: "Post 4",
          descr:
            "Не следует, однако, забывать, что существующая теория обеспечивает широкому кругу (специалистов) участие в формировании модели развития.",
          img: "https://cdn.pixabay.com/photo/2021/08/30/07/32/flowers-6585067_1280.jpg",
        },
      ],
    };
  },
};
</script>
