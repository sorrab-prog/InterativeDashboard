import axios from 'axios'

const axiosInstanceOnboarding =  axios.create({
    baseURL: process.env.REACT_APP_API_URL_ONBOARDING,
    headers: {
        'Authorization':'Bearer '+ process.env.REACT_APP_API_BEARER_TOKEN_ONBOARDING,
    }
})

export default axiosInstanceOnboarding