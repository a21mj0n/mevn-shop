import { register, login } from '../../services/auth.service';

export async function signUp({ commit, dispatch }, credential) {
  const response = await register({
    email: credential.email,
    password: credential.password,
  });
  await dispatch('signIn', credential);

  commit('register', response);
}

export async function signIn({ commit }, credential) {
  const { data: response } = await login({
    email: credential.email,
    password: credential.password,
  });

  commit('login', response);
}

export function signOut({ commit }) {
  commit('logout');
}
