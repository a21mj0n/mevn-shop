export function open({ commit }, isOpened) {
  commit('opened', isOpened);
}

export function close({ commit }, isOpened) {
  commit('closed', isOpened);
}
