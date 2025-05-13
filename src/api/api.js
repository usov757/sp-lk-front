import axios from 'axios'
import { responseInterceptor } from './response'

export const baseURL = location.origin + '/api/v1'

export const api = axios.create({
  baseURL: `${baseURL}/admin`,
  timeout: 12000,
})

export const publicApi = axios.create({
  baseURL: `${baseURL}`,
  timeout: 12000,
})

const applyInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => response, // onFullfilled
    responseInterceptor().onRejected, // onRejected
  )
}

applyInterceptors(api)
applyInterceptors(publicApi)
