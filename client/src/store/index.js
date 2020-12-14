import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import drawer from './drawer';
import auth from './auth';

const toolbarState = createPersistedState({
  key: 'drawer',
  paths: ['drawer'],
});

const authState = createPersistedState({
  key: 'auth',
  paths: ['auth'],
});

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      drawer,
      auth,
    },

    strict: process.env.DEBUGGING,
    plugins: [toolbarState, authState],
  });

  return Store;
}
