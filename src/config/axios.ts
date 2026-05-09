import axios from 'axios'
import { API_URL } from './api'

// Configure axios instance, with baseURL, that will be used for all requests and withCredentials set to true
export const api = axios.create({
  baseURL: `${API_URL}/`,
  withCredentials: true,
})
