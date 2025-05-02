import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2

const FavoriteJobs = () => {
  const { user } = useContext(AuthContext);

  // Use queryClient to invalidate queries
  const queryClient = useQueryClient();

  // Fetch favorite jobs using react-query
  const {
    isLoading,
    error,
    data: favoriteJobs = [],
  } = useQuery({
    queryKey: [`favorite-jobs?email=${user?.email}`],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_API_URL}/favorite-jobs?email=${user?.email}`
      );
      return data;
    },
  });

  // Mutation to remove a job from favorites
  const removeFavoriteJob = useMutation({
    mutationFn: async (jobId) => {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_SERVER_API_URL}/favorite-jobs/${jobId}`
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`favorite-jobs?email=${user?.email}`]);
      Swal.fire("Deleted!", "The job has been removed.", "success");
    },
    onError: () => {
      Swal.fire("Error!", "Something went wrong.", "error");
    },
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const handleRemoveFavorite = (jobId) => {
    // Show SweetAlert confirmation before removal
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed to remove the favorite job
        removeFavoriteJob.mutate(jobId);
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="py-4">
        <h1 className="font-bold text-4xl text-center mx-auto">
          My Favorite Jobs: {favoriteJobs?.length}
        </h1>
      </div>

      {/* Applied jobs data table section */}
      <section>
        <div>
          {favoriteJobs?.length === 0 ? (
            <div className="flex justify-center items-center min-h-screen">
              <h1 className="text-4xl font-bold text-center my-4">
                No job added yet
              </h1>
            </div>
          ) : (
            <div className="overflow-x-auto bg-[cb]">
              <table className="table">
                {/* Head */}
                <thead>
                  <tr className="text-lg font-bold">
                    <th>Company Name</th>
                    <th>Job Title</th>
                    <th>Job Type</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {favoriteJobs?.map((job) => (
                    <tr key={job.jobId}>
                      <td>
                        <h1 className="font-bold">{job.companyName}</h1>
                      </td>
                      <td>{job?.jobTitle}</td>
                      <td>{job?.employmentType}</td>
                      <td>{job?.salary}</td>
                      <td>
                        <div className="flex">
                          <button
                            onClick={() => handleRemoveFavorite(job.jobId)}
                            className="btn btn-ghost btn-xs text-red-500"
                          >
                            Remove
                          </button>
                          <NavLink to={`/job-details/${job.jobId}`}>
                            <button className="btn btn-ghost btn-xs ml-2">
                              Details
                            </button>
                          </NavLink>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FavoriteJobs;
