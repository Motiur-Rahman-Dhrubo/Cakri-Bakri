import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
export default function JobDetails() {
  const { id } = useParams();
const {user} = useContext(AuthContext);
  const { data: job = {}, isLoading } = useQuery({
    queryKey: ["jobDetails"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_API_URL}/job-details/${id}`
      );
      return data;
    },
  });


  // Job apply function
  const handleApply = async () => {
    if (user) {
      const application = {
        email: user?.email,
        jobId: job?._id,
        status: "pending",
        jobTitle: job?.title,
        companyName: job?.company?.name,
        employmentType: job?.employmentType,
        salary: job?.salary,
      };

      Swal.fire({
        title: "Are you sure?",
        text: "You want to apply for this job!",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#0a4b61",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, apply job!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axios.post(
            `${import.meta.env.VITE_SERVER_API_URL}/apply-job`,
            application
          );
          if(data.message == "Already applied for the job."){
            return Swal.fire({
              title: "What's wrong!",
              text: "Already applied for the job.",
              icon: "info",
            });
           }
          if (data.insertedId) {
            Swal.fire({
              title: "Successfull!!!",
              text: "Your application has been saved.",
              icon: "success",
            });
          }
        }
      });
    } else {
      window.location.href = "/login";
    }
  };


   // Job add to favorite function    
   const handleFavorite = async () => {
    if (user) {
      const application = {
        email: user?.email,
        jobId: job?._id,
        jobTitle: job?.title,
        companyName: job?.company?.name,
        employmentType: job?.employmentType,
        salary: job?.salary,
      };

      Swal.fire({
        title: "Are you sure?",
        text: "You want to add this job in your Favorite List!",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#0a4b61",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Add to Favorite!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axios.post(
            `${import.meta.env.VITE_SERVER_API_URL}/favorite-jobs`,
            application
          );
          if(data.message === "Already added in the favourite job list."){
            return Swal.fire({
              title: "What's wrong!",
              text: "Already added in the favourite job list.",
              icon: "info",
            });
          }
          if (data.insertedId) {
            Swal.fire({
              title: "Successfull !",
              text: "This job has been added to your Favorite List.",
              icon: "success",
            });
          }
        }
      });
    } else {
      window.location.href = "/login";
    }
  };


  return (
    <>
      <section className="w-11/12 mx-auto py-10">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Job Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={job?.company?.logo}
                alt={job?.company?.name}
                className="w-20 h-20 border-2 border-cb-card rounded-lg object-center shadow-[0px_0_15px_1px_rgba(10,172,247,0.5)]"
              />
              <div>
                <h1 className="text-2xl font-bold text-cb-secondary">
                  {job?.title}
                </h1>
                <p className="text-gray-600">{job?.company?.name}</p>
                <p className="flex items-center gap-1 text-yellow-500">
                  <FaStar /> {job?.company?.rating}
                </p>
              </div>
            </div>
            <div className="space-x-2">
              <button
                onClick={handleApply}
                className="btn bg-cb-primary text-white px-6 py-2 transition-shadow duration-1000 hover:shadow-[0px_0_15px_1px_rgba(10,172,247,0.5)]"
              >
                Apply Now
              </button>
              <button 
              onClick={handleFavorite}
              className="btn border border-cb-primary bg-transparent text-cb-secondary hover:bg-cb-primary hover:text-cb-white">Add To Favourite</button>
            </div>
          </div>

          {/* Job Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-gray-700">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cb-primary" /> {job.location}
            </p>
            <p className="flex items-center gap-2">
              <FaMoneyBillWave className="text-cb-primary" /> {job.salary}
            </p>
            <p className="flex items-center gap-2">
              <FaBriefcase className="text-cb-primary" /> {job.employmentType}
            </p>
            <p className="flex items-center gap-2">
              <FaCalendarAlt className="text-cb-primary" /> Posted:{" "}
              {job.postedDate}
            </p>
          </div>

          {/* Job Description */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-cb-secondary">
              Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {job?.responsibilities?.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-cb-secondary">
              Qualifications
            </h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {job?.qualifications?.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
          </div>

          {/* Perks */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-cb-secondary">
              Perks & Benefits
            </h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {job?.perks?.map((perk, index) => (
                <li key={index}>{perk}</li>
              ))}
            </ul>
          </div>

          {/* Skills Required */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-cb-secondary">
              Skills Required
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {job?.skillsRequired?.map((skill, index) => (
                <span
                  key={index}
                  className="bg-cb-card text-cb-secondary px-3 py-1 rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


