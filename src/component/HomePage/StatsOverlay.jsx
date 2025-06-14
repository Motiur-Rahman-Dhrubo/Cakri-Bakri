import React from "react";

export default function StatsOverlay() {
  return (
    <div className="mt-5 md:my-12 relative w-11/12 mx-auto bg-[#175A87] text-primary-content py-4 md:py-6 rounded-lg">
      <h2 className="text-center max-sm:px-3 text-cb-white text-3xl md:text-4xl font-bold mb-4">Our Company Statistics</h2>
      <div className="divider w-11/12 mx-auto my-0"></div>
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center text-center">
        <div className="w-1/2 md:w-1/4 py-4 transform transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_4px_10px_rgba(4,164,217,0.8)]">
          <h2 className="text-3xl font-bold text-cb-white/90">12K+</h2>
          <p className="text-xl font-semibold text-cb-white/80">Jobs Available</p>
        </div>
        <div className="w-1/2 md:w-1/4 py-4 transform transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_4px_10px_rgba(4,164,217,0.8)]">
          <h2 className="text-3xl font-bold text-cb-white/90">50K+</h2>
          <p className="text-xl font-semibold text-cb-white/80">Job Seekers</p>
        </div>
        <div className="w-1/2 md:w-1/4 py-4 transform transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_4px_10px_rgba(4,164,217,0.8)]">
          <h2 className="text-3xl font-bold text-cb-white/90">5K+</h2>
          <p className="text-xl font-semibold text-cb-white/80">Job Publishers</p>
        </div>
        <div className="w-1/2 md:w-1/4 py-4 transform transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_4px_10px_rgba(4,164,217,0.8)]">
          <h2 className="text-3xl font-bold text-cb-white/90">1.2M+</h2>
          <p className="text-xl font-semibold text-cb-white/80">Applications Sent</p>
        </div>
      </div>
    </div>
  );
}
