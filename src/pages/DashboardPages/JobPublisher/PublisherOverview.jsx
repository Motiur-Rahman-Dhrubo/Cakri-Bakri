import React from 'react'
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from '@tanstack/react-query'
export default function PublisherOverview() {
  const axiosPublic = useAxiosPublic()
  const {data: jobs = [],}= useQuery({
    queryKey:['user.email'],
    queryFn: async () =>{
      const res = await axiosPublic.get(`/post-job-publisher?email=${user.email}`)
      return res.data
    }
  })
  return (
    <div>PublisherOverview {jobs.length}</div>
  )
}
