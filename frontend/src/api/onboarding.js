import axios from 'axios'

const axiosInstanceOnboarding =  axios.create({
    baseURL: 'https://osbonboarding.artius.com.br/',
    withCredentials: true,
    credentials: 'include',
    headers: {
        'Authorization':'Bearer XBrfzQKs1OqAhGDn6392ntBFdaH8lTqyVfZxoeaD9HY1JpjXCn1pfRzjC4pS3Wkoh9k1F6mDbvzEOjBjd0kXLCRFPIhhMTcQyIKWPASVrcYBPRjVY3Yl2c9zskyRCV2CK5xjyldVRpDFfZ1rCnKrCu0q1o6wbfiuzBm8kOSXbdmlFBZd09M3nHQNVdWCj2VnGkWDFaLCfXiXJrmqsxOUFNzUFDb8dIIvEK9XwXdfKCWQ0cKxRLaSEOJxjMSB2J1N',
        'Access-Control-Allow-Origin': '*',
    }
})

export default axiosInstanceOnboarding