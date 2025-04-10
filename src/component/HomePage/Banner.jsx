import { motion } from "motion/react";
import img1 from "./../../assets/job-seeker1.png";
import img2 from "./../../assets/job-seeker2.png";
export default function Banner() {
  return (
    <section
      className={`bg-[url('/hero-bg.png')] bg-cover bg-no-repeat bg-center w-full md:h-[500px]`}
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
         
        </div>

        <div className="relative">
          <motion.div
            // animate={{
            //   x: [0, 10, 10, 0, 0],
            //   y: [0, 0, -10, -10, 0],
            // }}
            // transition={{
            //   delay: 1,
            //   duration: 4,
            //   repeat: Infinity,
            //   ease: "easeInOut",
            // }}
            className="md:w-[350px] absolute -top-24"
          >
            <img
              src={img1}
              alt=""
              className="w-full border-l-[12px] border-cb-primary/70 rounded-tl-[50px] rounded-br-4xl"
            />
          </motion.div>

          <motion.div
            // animate={{
            //   x: [10, 0, 0, 10, 10],
            //   y: [0, 0, 10, 10, 0],
            // }}
            // transition={{
            //   delay: 1,
            //   duration: 4,
            //   repeat: Infinity,
            //   ease: "easeInOut",
            // }}
            className="md:w-[350px] absolute left-36 top-20"
          >
            <img
              src={img2}
              className="w-full border-l-[12px] border-l-cb-primary/80 rounded-tl-[50px] rounded-br-[50px]"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
