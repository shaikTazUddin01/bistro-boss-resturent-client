import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from "./useAuth"

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token')
        // console.log("request stop by interseptor", token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    // Add a response interceptor
    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, async (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const status = error?.response?.status
        if (status === 401 || status === 404) {
            await logout()
            navigate('/login')
        }
        return Promise.reject(error);
    });
    return (
        axiosSecure
    )
};

export default useAxiosSecure;
// , {
//     headers: {
//         authorization:`Bearer ${localStorage.getItem('access-token')}`
// }}