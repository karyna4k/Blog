import axios from "axios";

export const state = () => ({
  postLoaded: []
});

export const mutations = {
  addPost (state, post) {
    console.log(post);
    state.postLoaded.push(post);
  }
};

export const actions = {
  addPost ({ commit }, post) {
    return axios.post("https://blog-nuxt-321ac-default-rtdb.firebaseio.com/posts.json", post)
      .then((res) => {
        commit("addPost", { ...post, id: res.data.name });
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

export const getters = {};
