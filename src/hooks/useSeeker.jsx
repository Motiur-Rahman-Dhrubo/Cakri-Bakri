import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';

export default function useSeeker() {
    const {user, loading}= useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const {data: isSeeker = [], isPending : isSeekerLoading} = useQuery({
        queryKey: [user?.email, 'isSeeker'],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/user/seeker/${user.email}`)
            console.log(res.data)
            return res.data?.seeker
        }
    })
  return [isSeeker,isSeekerLoading]
}
