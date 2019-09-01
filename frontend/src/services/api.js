import axios from 'axios'

const api = axios.create({
  baseURL: 'HTTP://localhost:3333'
})

export default api