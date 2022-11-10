import axios from 'axios'
import Cookies from 'cookies-js'

// Access .env file
require('dotenv').config()

const axiosInstanceLogin =  axios.create({
    baseURL: process.env.REACT_APP_API_URL_LOGIN,
    withCredentials: true,
    headers: {
        "Authorization": Cookies.get('jwt') ? 'Bearer ' + Cookies.get('jwt') : null,
        'Content-Type': 'application/json',
    },
})

export default axiosInstanceLogin