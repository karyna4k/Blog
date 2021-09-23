import axios from "axios";

export const state = () => ({
  postsLoaded: [],
});

export const mutations = {
  setPosts (state, posts) {
    state.postsLoaded = posts;
  },
  addPost (state, post) {
    state.postsLoaded.push(post);
  }
};

export const actions = {
  async nuxtServerInit ({ commit }, context) {
    try {
      const res = await axios
        .get("https://blog-nuxt-321ac-default-rtdb.firebaseio.com/posts.json");
      const postsArray = [];

      for (const key in res.data) {
        postsArray.push({ ...res.data[key], id: key });
      }
      commit("setPosts", postsArray);
    } catch (e) {
      // console.log(e);
    }
  },
  async addPost ({ commit }, post) {
    try {
      const res = await axios
        .post(
          "https://blog-nuxt-321ac-default-rtdb.firebaseio.com/posts.json",
          post
        );
      commit("addPost", { ...post, id: res.data.name });
    } catch (e) {
      // console.log(e);
    }
  }
};

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded;
  }
};
