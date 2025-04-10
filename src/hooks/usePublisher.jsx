import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';

export default function usePublisher() {
    const {user, loading}= useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const {data: isPublisher = [], isPending : isPublisherLoading} = useQuery({
        queryKey: [user?.email, 'isPublisher'],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/user/publisher/${user.email}`)
            console.log(res.data)
            return res.data?.publisher
        }
    })
  return [isPublisher,isPublisherLoading]
}
