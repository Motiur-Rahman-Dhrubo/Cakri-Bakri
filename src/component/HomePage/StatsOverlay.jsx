import React from "react";

export default function StatsOverlay() {
  return (
    <div className="mt-12 relative w-11/12 mx-auto bg-cb-card text-primary-content py-4 md:py-6 rounded-lg">
      <h2 className="text-center text-cb-primary text-4xl font-bold">Our Company Statistics</h2>
      <div className="divider w-11/12 mx-auto my-0"></div>
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center text-center">
        <div className="w-1/2 md:w-1/4 py-4">
          <h2 className="text-3xl font-bold text-cb-secondary">12K+</h2>
          <p className="text-xl font-semibold text-cb-primary/85">Jobs Available</p>
        </div>
        <div className="w-1/2 md:w-1/4 py-4">
          <h2 className="text-3xl font-bold text-cb-secondary">50K+</h2>
          <p className="text-xl font-semibold text-cb-primary/85">Job Seekers</p>
        </div>
        <div className="w-1/2 md:w-1/4 py-4">
          <h2 className="text-3xl font-bold text-cb-secondary">5K+</h2>
          <p className="text-xl font-semibold text-cb-primary/85">Job Publishers</p>
        </div>
        <div className="w-1/2 md:w-1/4 py-4">
          <h2 className="text-3xl font-bold text-cb-secondary">1.2M+</h2>
          <p className="text-xl font-semibold text-cb-primary/85">Applications Sent</p>
        </div>
      </div>
    </div>
  );
}
