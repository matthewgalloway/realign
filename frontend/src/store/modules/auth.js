import api from '@/api'

export const auth = {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('user-token') || '',
    status: '',
    user: JSON.parse(localStorage.getItem('user')) || null
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  actions: {
    async login({ commit }, user) {
        commit('AUTH_REQUEST')
        try {
          const resp = await api.post('/login', user)
          const token = resp.data.token
          localStorage.setItem('user-token', token)
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`
          commit('AUTH_SUCCESS', token)
          return resp
        } catch (err) {
          commit('AUTH_ERROR')
          localStorage.removeItem('user-token')
          return Promise.reject(err)
        }
      },
      async register({ commit }, user) {
        commit('AUTH_REQUEST')
        try {
          const resp = await api.post('/register', user)
          const token = resp.data.token
          localStorage.setItem('user-token', token)
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`
          commit('AUTH_SUCCESS', token)
          return resp
        } catch (err) {
          commit('AUTH_ERROR', err)
          localStorage.removeItem('user-token')
          return Promise.reject(err)
        }
      },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('LOGOUT')
        localStorage.removeItem('user-token')
        delete api.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  mutations: {
    AUTH_REQUEST(state) {
      state.status = 'loading'
    },
    AUTH_SUCCESS(state, token) {
      state.status = 'success'
      state.token = token
    },
    AUTH_ERROR(state) {
      state.status = 'error'
      state.token = ''
      state.user = null
    },
    LOGOUT(state) {
      state.status = ''
      state.token = ''
      state.user = null
    }
  }
}

export default auth