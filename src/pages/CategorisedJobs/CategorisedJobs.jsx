
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router";

export default function CategorisedJobs() {
  const [serverError, setServerError] = useState("");
  const { category } = useParams();
  const { data: allJobs = [], isLoading } = useQuery({
    queryKey: ["jobs", category],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_SERVER_API_URL
        }/jobs-category?category=${category}`
      );
      if (data?.message) {
        setServerError(data.message);
      } else {
        setServerError("");
      }
      return data;
    },
  });
  
  return (
    <>
      <div className="w-11/12 mx-auto py-10">
        <div>
          <h2 className="text-2xl md:text-4xl text-cb-secondary font-semibold ">
            Job Category: <span className="font-bold">{category}</span>
          </h2>
        </div>
        <div className="divider"></div>
        <div className="pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allJobs.length > 0 ? (
            allJobs.map((job) => (
              <div
                key={job.id}
                className="flex flex-col bg-cb-card p-6 rounded-xl hover:scale-105 hover:drop-shadow-[0px_0px_10px_rgba(10,75,97,0.6)] active:scale-105 active:drop-shadow-[0px_0px_10px_rgba(10,75,97,0.6)] transition-all duration-400"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={job?.company?.logo}
                    alt={job?.company?.name}
                    className="w-12 h-12 border border-cb-primary rounded-full"
                  />
                  <div>
                    <h3 className="text-xl text-cb-secondary font-semibold">
                      {job.title}
                    </h3>
                    <p className="text-cb-primary">
                      {job?.company?.name} | ⭐ {job?.company?.rating}
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="flex items-center gap-2 ">
                    <FaMapMarkerAlt className="text-cb-primary" />
                    <span className="text-black/60">{job?.location}</span>
                  </p>
                  <p className="flex items-center gap-2 ">
                    <FaBriefcase className="text-cb-primary" />
                    <span className="text-black/60">{job.employmentType}</span>
                  </p>
                  <p className="flex items-center gap-2 ">
                    <FaDollarSign className="text-cb-primary" />
                    <span className="text-black/60">{job.salary}</span>
                  </p>
                </div>

                <div className="mt-4 flex gap-2 flex-wrap">
                  {job?.skillsRequired?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-cb-primary/85 text-cb-white px-3 py-1 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="grow"></div>
                <div>
                  <Link
                    to={`/job-details/${job._id}`}
                    className="mt-5 inline-block w-full text-center bg-cb-secondary text-white py-2 rounded-lg"
                  >
                    View Job
                  </Link>
                </div>
              </div>
            ))
          ) : serverError ? (
            <p className="text-center col-span-3 text-gray-500">
              {serverError}
            </p>
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No jobs found.
            </p>
          )}
        </div>
      </div>
    </>
  );
}