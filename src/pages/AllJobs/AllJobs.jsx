import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaDollarSign,
} from "react-icons/fa";
import { Link } from "react-router";
export default function AllJobs() {
  const { data: allJobs = [], isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const { data } = await axios.get("/dummyJobs.json");
      return data;
    },
  });
  return (
    <>
      <section className="w-11/12 mx-auto py-10">
        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between bg-cb-card p-4 rounded-2xl shadow-lg">
          <div className="relative w-full ">
            <input
              type="text"
              placeholder="Search for jobs..."
              className="w-full bg-white p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cb-primary outline-0"
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="relative w-full md:w-1/3">
            <select className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cb-primary outline-0">
              <option value="">All Categories</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="fullstack">Full Stack Development</option>
              <option value="uiux">UI/UX Design</option>
              <option value="devops">DevOps</option>
              <option value="qa">Quality Assurance</option>
            </select>
          </div>
          <button className="btn bg-cb-primary text-white px-6 py-4 rounded-lg">
            Filter
          </button>
        </div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
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
                    to={`/job-details/${job.id}`}
                    className="mt-5 inline-block w-full text-center bg-cb-secondary text-white py-2 rounded-lg"
                  >
                    View Job
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No jobs found.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
