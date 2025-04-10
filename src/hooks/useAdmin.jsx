import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

export default function useAdmin() {
    const axiosSecure = useAxiosSecure()
    const {user,loading} = useContext(AuthContext);
    const {data : isAdmin = [], isPending: isAdminLoading} =useQuery({
        queryKey:[user?.email,'isadmin'],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/user/admin/${user.email}`)
            console.log(res.data)
            return res.data?.admin
        }
    })
  return [isAdmin, isAdminLoading]
}
