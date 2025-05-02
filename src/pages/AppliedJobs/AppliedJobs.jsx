import React, { useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink } from "react-router-dom"; // ✅ FIXED
import Loading from "../Loading/Loading";
import Swal from "sweetalert2";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // Fetch applied jobs
  const {
    isPending,
    error,
    data: appliedJobs = [],
  } = useQuery({
    queryKey: [`applied-jobs?email=${user?.email}`],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_API_URL
        }/applied-jobs?email=${user?.email}`
      );
      return data;
    },
  });

  // Delete applied job mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return await axios.delete(
        `${import.meta.env.VITE_SERVER_API_URL
        }/applied-jobs/${id}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`applied-jobs?email=${user?.email}`]);
      Swal.fire("Deleted!", "The job has been removed.", "success");
    },
    onError: () => {
      Swal.fire("Error!", "Something went wrong.", "error");
    },
  });

  // Handle delete button click
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This job will be permanently removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  // Loading or error state
  if (isPending) return <Loading />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="w-11/12 mx-auto">
      <div className="py-4">
        <h1 className="font-bold text-4xl text-center mx-auto">
          Total Applied Jobs: {appliedJobs?.length}
        </h1>
      </div>

      <section>
        {appliedJobs?.length === 0 ? (
          <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-4xl font-bold text-center my-4">
              No job applied yet
            </h1>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-lg font-bold">
                  <th>Company Name</th>
                  <th>Job Title</th>
                  <th>Job Type</th>
                  <th>Salary</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {appliedJobs.map((data) => (
                  <tr key={data._id}>
                    <td>
                      <h1 className="font-bold">{data.companyName}</h1>
                    </td>
                    <td>{data.jobTitle}</td>
                    <td>{data.employmentType}</td>
                    <td>{data.salary}</td>
                    <td>{data.status}</td>
                    <td>
                      <div className="flex">
                        <button
                          onClick={() => handleDelete(data._id)}
                          className="btn btn-ghost btn-xs text-red-500"
                        >
                          Delete
                        </button>
                        <NavLink to={`/job-details/${data.jobId}`}>
                          <button className="btn btn-ghost btn-xs ml-2">
                            Details
                          </button>
                        </NavLink>
                        <NavLink to={`/dashboard/live-chats/${data._id}`}>
                          <button className="btn btn-ghost btn-xs ml-2">
                            Contact
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
      </section>
    </div>
  );
};

export default AppliedJobs;
