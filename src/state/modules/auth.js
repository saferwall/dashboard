import axios from '@/services/axios'
import router from '@/router'
import jwtDecode from 'jwt-decode'
import { getSavedState, saveState, clearState } from '@/common/utils/local-storage';


export const state = {
  session: getSavedState('auth.session'),
}

export const mutations = {
  SET_CURRENT_SESSION(state, session) {
    if (session === null) {
      clearState('auth.session');
    } else {

      try {
        state.session = jwtDecode(session.token);
        state.session.token = session.token;
      } catch (e) {
        console.warn('Token decode failed', session)
      }

      saveState('auth.session', state.session)
      setDefaultAuthHeaders(state)
    }
  },
  LOGOUT(state) {
    state.session = null;
    clearState('auth.session');
    router.push({
      path: '/auth/login'
    });
  }
}

export const getters = {
  // Whether the session is currently logged in.
  loggedIn(state) {
    return state.session != null && !getters.tokenExpired(state);
  },
  tokenExpired(state) {
    if (state.session == null || state.session.token == null) {
      return true;
    }
    let dt, expired, token = state.session.token;

    try {
      dt = jwtDecode(token);
      expired = !dt || dt.exp - (Date.now() / 1000) <= 0;
    } catch (e) {
      // jwtDecode failed
      console.warn(e, token);
    }

    return expired;
  }
}

export const actions = {
  // This is automatically run in `src/state/store.js` when the app
  // starts, along with any other actions named `init` in other modules.
  init({ state, dispatch }) {
    setDefaultAuthHeaders(state)
    dispatch('validate')
  },

  // Logs in the current session.
  logIn({ commit, dispatch, getters }, { username, password } = {}) {
    if (getters.loggedIn) return dispatch('validate')

    return axios
      .post('/auth/login/', { username, password })
      .then((response) => {
        const session = response.data;
        commit('SET_CURRENT_SESSION', session)
        // dispatch('profile/updateProfile', null, { root: true });
        return session
      })
  },

  // Logs in the current session.
  register({ dispatch, getters }, { username, email, password } = {}) {
    if (getters.loggedIn) return dispatch('validate')

    return axios
      .post('/auth/register/', { username, email, password })
      .then((response) => {
        return response.data;
      })
  },

  logOut({ commit }) {
    commit('LOGOUT');
  },

  // Validates the current session's token and refreshes it
  // with new data from the API.
  validate({ state, dispatch }) {
    if (!getters.loggedIn(state)) return Promise.resolve(null)

    dispatch('user/fetchCurrentUser', state.session.name, { root: true });
    return Promise.resolve(state.session);
  },
}

function setDefaultAuthHeaders(state) {
  if (state.session) {
    axios.defaults.headers.common.Authorization = `Bearer ${state.session.token}`
  }
}
