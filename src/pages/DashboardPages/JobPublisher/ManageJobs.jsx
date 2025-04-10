import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaUser } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ManageJobs = () => {
  const {
    data: jobs = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/jobs`
      );
      return data;
    },
  });

  // delete specipic job
  const handleDeleteJob = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You have to add this job again!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#176b87",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axios.delete(
            `http://localhost:5000/delete-job/${id}`
          );
          if (data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Job has been deleted.",
              icon: "success",
            });
            refetch();
          }
        }
      });
    } catch (err) {
      console.log("Job delete ERROR-->", err);
    }
  };

  return (
    <div className="mx-2 md:mx-6 lg:mx-10 my-4 bg-cb-card px-4 py-6 sm:px-6 sm:py-8 rounded-lg shadow-lg">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cb-primary font-bold mb-4 text-center tracking-tight">
        Manage Jobs
      </h1>
      <div className="divider mb-4"></div>

      {jobs && (
        <div className="overflow-x-auto rounded-md">
          <table className="table w-full text-cb-secondary">
            <thead>
              <tr className="border-b border-cb-secondary/80">
                <th className="text-sm md:text-base  py-3">Job Title</th>
                <th className="text-sm md:text-base  py-3">Company</th>
                <th className="text-sm md:text-base  py-3 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <FaUser className="w-4 h-4" />
                    <span className="hidden sm:inline">Applied</span>
                  </div>
                </th>
                <th className="text-sm md:text-base  py-3 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-8  text-base md:text-lg"
                  >
                    No jobs found.
                  </td>
                </tr>
              ) : (
                jobs.map((job) => (
                  <tr
                    key={job._id}
                    className="hover:bg-gray-750 transition-colors"
                  >
                    <td className="py-4 font-medium  text-sm sm:text-base md:text-lg">
                      {job.title}
                    </td>
                    <td className="py-4  text-sm md:text-base flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={job?.company?.logo}
                          alt={`${job?.company?.name} Logo`}
                          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain rounded-full"
                        />
                        <span className="truncate">{job?.company?.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-center  text-sm md:text-base">
                      {job?.applications}
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex justify-end gap-2 sm:gap-3">
                        <Link
                          to={`/dashboard/update-job/${job._id}`}
                          className="p-2 rounded-md   border border-cb-primary/30 transition-all"
                          aria-label="Edit job"
                        >
                          <FaEdit className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => handleDeleteJob(job._id)}
                          className="p-2 rounded-md text-red-500 hover:text-red-600 hover:bg-red-500/20 border border-red-500/30 transition-all"
                          aria-label="Delete job"
                        >
                          <FaTrash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageJobs;
