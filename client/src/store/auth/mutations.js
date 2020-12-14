export function register(state, { data: user }) {
  state.user = user;
  state.isAuthenticated = true;
}

export function login(state, { token, userId }) {
  state.token = token;
  state.userId = userId;
  state.isAuthenticated = true;
}

export function logout(state) {
  state.user = null;
  state.isAuthenticated = false;
}
