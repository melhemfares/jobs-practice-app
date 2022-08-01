import store from "@/store"
import axios from "axios"

const apiClient = axios.create({
    baseURL: "https://jobs-api-0.herokuapp.com/api/v1",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})

export default {
  registerUser(user) {
    return apiClient.post('/auth/register', user)
  },
  loginUser(user) {
    return apiClient.post('/auth/login', user)
  },
  createJob(job) {
    return apiClient.post('/jobs', job, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  getJobs() {
    return apiClient.get('/jobs', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  getJob(id) {
    return apiClient.get('/jobs/' + id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  updateJob(id, job) {
    return apiClient.patch('/jobs/' + id, job, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  deleteJob(id) {
    return apiClient.delete('/jobs/' + id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
  }
}
