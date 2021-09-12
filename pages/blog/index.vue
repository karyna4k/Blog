<template lang="pug">
.wrapper-content.wrapper-content--fixed
  Intro(title="My posts:")
  Posts(:posts="posts")
</template>

<script>
import Intro from "@/components/UI/Intro.vue";
import Posts from "@/components/Blog/Posts.vue";

export default {
  components: {
    Intro,
    Posts,
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
