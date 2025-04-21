import React, { useContext } from 'react'
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../providers/AuthProvider';
export default function PublisherOverview() {
  const {user} = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
  const { data = {}, isLoading } = useQuery({
    queryKey: ['userJobsAndApplicants', user.email],
    queryFn: async () => {
      const [jobsRes, applicantsRes] = await Promise.all([
        axiosPublic.get(`/post-job-publisher?email=${user.email}`),
        axiosPublic.get(`/applicant?email=${user.email}`)
      ]);
      return {
        jobs: jobsRes.data,
        applicants: applicantsRes.data
      };
    }
  });
  
  // Usage:
  const jobs = data.jobs || [];
  const applicants = data.applicants || [];
  
  return (
    <div> {jobs.length} {applicants.length}</div>
  )
}
