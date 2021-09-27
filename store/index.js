import axios from "axios";

export const state = () => ({
  postsLoaded: [],
  token: null,
});

export const mutations = {
  setPosts (state, posts) {
    state.postsLoaded = posts;
  },
  addPost (state, post) {
    state.postsLoaded.push(post);
  },
  editPost (state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id);
    state.postsLoaded[postIndex] = postEdit;
  },
  setToken (state, token) {
    state.token = token;
  },
  destroyToken (state) {
    state.token = null;
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
  authUser ({ commit }, authData) {
    const key = "AIzaSyBWeyVzQvT4vWPOetPwkl1EOb1VFAAT8oI";

    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then((res) => {
        commit("setToken", res.data.idToken);
      })
      .catch(error => console.log(error));
  },
  logoutUser ({ commit }) {
    commit("destroyToken");
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
  },
  editPost ({ commit, state }, post) {
    return axios.put(`https://blog-nuxt-321ac-default-rtdb.firebaseio.com/posts/${post.id}.json?auth=${state.token}`, post)
      .then((res) => {
        commit("editPost", post);
      });
  },
  addComment ({ commit }, comment) {
    return axios.post("https://blog-nuxt-321ac-default-rtdb.firebaseio.com/comments.json", comment);
  }
};

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded;
  },
  checkAuthUser (state) {
    return state.token !== null;
  }
};
