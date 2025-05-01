import React from "react";

export default function LeteastJobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechWave Ltd.",
      salary: "$3,500/month",
      location: "Remote",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeBase Inc.",
      salary: "$4,200/month",
      location: "New York, USA",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Minds",
      salary: "$3,800/month",
      location: "San Francisco, USA",
    },
  ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-1">
          <h2 className="text-3xl md:text-4xl font-bold text-cb-card">Latest Jobs</h2>
          <p className="text-cb-primary/80 mt-2 md:mt-4">Explore the newest job openings available.</p>
        </div>
        <div className="divider my-0"></div>
        {/* Job Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="card shadow-xl bg-cb-card p-4  transform transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_4px_10px_rgba(4,164,217,0.8)]">
              <div className="card-body ">
                <h3 className="text-xl font-semibold text-cb-secondary ">{job.title}</h3>
                <p className="text-cb-primary font-medium">{job.company}</p>
                <p className="text-gray-600">💰 {job.salary}</p>
                <p className="text-gray-600">📍 {job.location}</p>
                <button className="btn bg-cb-primary text-cb-white hover:bg-cb-btn mt-4">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Jobs Button */}
        <div className="text-center mt-5">
          <button className="btn bg-cb-secondary text-blue-50 px-6 py-2 hover:bg-cb-btn drop-shadow-[2px_4px_6px_var(--color-cb-card)]">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};
