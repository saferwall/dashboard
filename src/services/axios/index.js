import axios from 'axios'

export default axios.create({
    baseURL: process.env.API_BASE_URL || process.env.VUE_APP_API_BASE_URL,
})