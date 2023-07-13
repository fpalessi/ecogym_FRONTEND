import axios from "axios"
import { useAuthStore } from "../store/auth"

const authApi = axios.create({
    baseURL: "http://127.0.0.1:1337", withCredentials: true
})

// using Axios interceptors to automatically set the Authorization header for all requests:
authApi.interceptors.request.use(config => {
    const token = useAuthStore.getState().token
    // we use the axios.interceptors.request.use method to update each request header and set the access token in the Authorization HTTP header
    // añadir la cabecera en cada peticion
    config.headers["Authorization"] = `Bearer ${token}`
    return config
})

export default authApi