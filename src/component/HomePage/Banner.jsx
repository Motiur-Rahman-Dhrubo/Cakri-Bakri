import { motion } from "motion/react";
import img1 from "./../../assets/job-seeker1.png";
import img2 from "./../../assets/job-seeker2.png";
import { useState } from "react";
import { useNavigate } from "react-router";
export default function Banner() {
  const navigate = useNavigate();
  const [search, setSearch] = useState(null);

  const handleJobSearch = async () => {
    if (!search) return;
    navigate(`jobs-category/${search}`);
  };
  return (
    <section
      className={`bg-[#DBEAFE] bg-cover bg-no-repeat bg-center w-full md:h-[500px]`}
    >
      <div className="w-11/12 h-full mx-auto grid grid-cols-2 content-center">
        <div className="justify-self-start">
          <h1 className="text-5xl md:text-6xl font-primary text-gray-800 uppercase font-bold">
            Chakri <span className="text-cb-primary">Bakri</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400/95 md:w-[450px]">
            Find Your Dream Job. Connect with Top Employers. A seamless platform
            for job seekers and recruiters.
          </p>
          <div className="mt-10 w-md h-14 flex items-center">
            <div className="w-full h-full">
              <label className="input w-full h-full rounded-l-2xl rounded-r-none">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  className="outline-0 focus:outline-0"
                  placeholder="What are you looking for?"
                  required
                />
              </label>
            </div>
            <button
              onClick={handleJobSearch}
              className="btn px-8 bg-cb-primary h-[58px] text-md font-bold uppercase text-white join-item rounded-r-2xl rounded-l-none"
            >
              Search
            </button>
          </div>
          <h3 className="pt-6 text-md font-semibold text-gray-500">
            Trending Keywords: Software Development, Marketing &
            Sales, Engineering, Healthcare, Education, Security Services
          </h3>
        </div>

        <div className="relative">
          <motion.div
            animate={{
              x: [0, 10, 10, 0, 0],
              y: [0, 0, -10, -10, 0],
            }}
            transition={{
              delay: 1,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="lg:w-[380px] absolute -top-16"
          >
            <img
              src={img1}
              alt=""
              className="w-full border-l-[12px] border-cb-primary/90 rounded-tl-[50px] rounded-br-4xl"
            />
          </motion.div>

          <motion.div
            animate={{
              x: [10, 0, 0, 10, 10],
              y: [0, 0, 10, 10, 0],
            }}
            transition={{
              delay: 1,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="lg:w-[380px] absolute left-40 top-24"
          >
            <img
              src={img2}
              className="w-full border-l-[12px] border-l-cb-primary/95 rounded-tl-[50px] rounded-br-[50px]"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
