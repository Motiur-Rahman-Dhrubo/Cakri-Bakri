import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

export default function useAdmin() {
    const axiosPublic = useAxiosPublic();
    const {user,loading} = useContext(AuthContext);
    const {data : isAdmin = [], isPending: isAdminLoading} =useQuery({
        queryKey:[user?.email,'isadmin'],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/user/admin/${user.email}`)
            return res.data?.admin
        }
    })
  return [isAdmin, isAdminLoading]
}
