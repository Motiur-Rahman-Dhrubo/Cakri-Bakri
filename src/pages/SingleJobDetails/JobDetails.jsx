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
export default function JobDetails() {
  const { id } = useParams();

  const { data: job = {}, isLoading } = useQuery({
    queryKey: ["jobDetails"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_API_URL}/job-details/${id}`
      );
      return data;
    },
  });

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
              <Link
                // href={job?.jobLink}
                className="btn bg-cb-primary text-white px-6 py-2 transition-shadow duration-1000 hover:shadow-[0px_0_15px_1px_rgba(10,172,247,0.5)]"
              >
                Apply Now
              </Link>
              <button className="btn border border-cb-primary bg-transparent text-cb-secondary hover:bg-cb-primary hover:text-cb-white">Add To Favourite</button>
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
