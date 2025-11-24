import axios from 'axios';

const axiosURL = axios.create({
    baseURL: `${import.meta.env.VITE_URL_BACKEND}/api/`
})

export default axiosURL