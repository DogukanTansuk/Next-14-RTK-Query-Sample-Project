// Package Imports
import axios from 'axios'

export const axiosAgent = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosAgent.interceptors.request.use(
  (config) => {
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
