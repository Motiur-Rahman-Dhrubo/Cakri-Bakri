import axios from 'axios'
import React from 'react'
const axiosPublic = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_API_URL}`,withCredentials: true
})
export default function useAxiosPublic() {
  return axiosPublic
}
