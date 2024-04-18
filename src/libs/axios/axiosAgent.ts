// Package Imports
import axios from 'axios'
import Cookies from 'js-cookie'

export const axiosAgent = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosAgent.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token')
    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosAgent.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)
