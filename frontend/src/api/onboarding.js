import axios from 'axios'

const axiosInstanceOnboarding =  axios.create({
    baseURL: process.env.REACT_APP_API_URL_ONBOARDING,
    headers: {
        'Api-Key': process.env.REACT_APP_API_API_KEY_ONBOARDING,
    }
})

export default axiosInstanceOnboarding