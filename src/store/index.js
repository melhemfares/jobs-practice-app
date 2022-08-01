import { createStore } from 'vuex'
import EventService from '@/services/EventService'

export default createStore({
  state: {
    user: {},
    payload: {},
    jobs: [],
    job: {},
    msg: '',
    isLoggedIn: false
  },
  getters: {
  },
  mutations: {
    CREATE_USER(state, user) {
      state.user = user
    },
    GET_PAYLOAD(state, payload) {
      state.payload = payload
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs
    },
    SET_JOB(state, job) {
      state.job = job
    },
    LOGIN_USER(state) {
      state.isLoggedIn = true
    },
    SET_MSG(state, msg) {
      state.msg = msg
    }
  },
  actions: {
    createUser({ commit }, user) {
      return EventService.registerUser(user)
        .then(() => {
          commit('CREATE_USER', user)
          commit('SET_MSG', 'Successfully registered')
        })
        .catch(error => {
          commit('SET_MSG', error.response.data.msg)
        })
    },
    logUser({ commit }, user) {
      return EventService.loginUser(user)
        .then(response => {
          if (response.data) {
            commit('GET_PAYLOAD', response.data)
            commit('LOGIN_USER')
            commit('SET_MSG', 'Successfully logged in')
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('isLoggedIn', true)
          }
        })
        .catch(error => {
          commit('SET_MSG', 'Invalid email or password')
          console.log(error);
        })
    },
    fetchJobs({ commit }) {
      return EventService.getJobs()
        .then(response => {
          commit('SET_JOBS', response.data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    fetchJob({ commit }, id) {
      return EventService.getJob(id)
        .then(response => {
          commit('SET_JOB', response.data)
        })
        .catch(error => {
          console.log(error);
        })      
    },
    createJob({ commit }, job) {
      return EventService.createJob(job)
        .then((res) => {
          console.log(res.data);
          commit('SET_JOB', job)
          commit('SET_MSG', 'Successfully created job')
        })
        .catch(error => {
          console.log(error)
          commit('SET_MSG', error.response.data.msg)
        })
    },
    patchJob({ commit }, body) {
      return EventService.updateJob(body.id, body.job)
        .then(() => {
          commit('SET_JOB', body.job)
          commit('SET_MSG', 'Successfully updated job')
        })
        .catch(error => {
          console.log(error)
          commit('SET_MSG', error.response.data.msg)
        })
    },
  },
  modules: {
  }
})
