import {
  AiOutlineUserAdd,
  AiOutlineSearch,
  AiOutlineCheckCircle,
} from "react-icons/ai";
export default function Overview() {
  return (
    <section className="bg-blue-100 py-5 mt-12">
      <div className="w-11/12 mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-cb-secondary mb-4">
          Three Simple Steps to Land Your Dream Job
        </h2>
        <p className="text-gray-700 mb-3 max-sm:hidden">
          Effortlessly navigate your hiring journey with our streamlined
          process.
        </p>
        <div className="divider my-0 mb-2"></div>
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-gradient-to-l from-[#175A87] via-[#177C87] to-[#64CCC5] rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_4px_10px_rgba(4,164,217,0.8)]">
            <div className="text-cb-white text-4xl mb-4 flex justify-center">
              <AiOutlineUserAdd />
            </div>
            <h3 className="text-xl font-semibold text-cb-white mb-2">
              Step 1: Create an Account
            </h3>
            <p className="text-cb-white/70">
              Sign up quickly and easily to begin your job search or post new
              opportunities.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-gradient-to-l from-[#175A87] via-[#177C87] to-[#64CCC5] rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_4px_10px_rgba(4,164,217,0.8)]">
            <div className="text-cb-white text-4xl mb-4 flex justify-center">
              <AiOutlineSearch />
            </div>
            <h3 className="text-xl font-semibold text-cb-white mb-2">
              Step 2: Post or Apply for Jobs
            </h3>
            <p className="text-cb-white/70">
              Browse listings or showcase your job openings to attract the best
              candidates.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-gradient-to-l from-[#175A87] via-[#177C87] to-[#64CCC5] rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_4px_10px_rgba(4,164,217,0.8)]">
            <div className="text-cb-white text-4xl mb-4 flex justify-center">
              <AiOutlineCheckCircle />
            </div>
            <h3 className="text-xl font-semibold text-cb-white mb-2">
              Step 3: Get Hired or Find the Perfect Candidate
            </h3>
            <p className="text-cb-white/70">
              Connect in real-time, schedule interviews, and finalize the hiring
              process.
            </p>
          </div>
        </div>

        {/* Optional CTA Button */}
        <div className="mt-5">
          <button className="btn bg-[#176B87] text-white hover:bg-[#0a4b61] px-8 py-3">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
