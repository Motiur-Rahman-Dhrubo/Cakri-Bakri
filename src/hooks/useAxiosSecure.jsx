import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { useNavigate } from 'react-router'
const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
export default function useAxiosSecure() {
    const {logout} =useContext(AuthContext)
    const navigate = useNavigate();
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    },function(error){
        return Promise.reject(error)
    })
    axiosSecure.interceptors.response.use(function(response){
        return response
    },async (error) =>{
        const status = error.response.status
        console.log('status error', status)
        if (status === 400 || status === 401){
            await logout()
            navigate('/login')
        }
        if(status === 403){
            navigate
        }
    })
  return 
}
