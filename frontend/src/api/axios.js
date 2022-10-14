import axios from 'axios'

// Cookies manipulation lib
import Cookies from 'cookies-js'

const axiosInstance =  axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials: true,
    headers: {
        "Authorization": Cookies.get('jwt') ? 'Bearer ' + Cookies.get('jwt') : null,
        'Content-Type': 'application/json',
    },
})

export default axiosInstance