
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import {
  FaCode,
  FaPaintBrush,
  FaChartLine,
  FaUsers,
  FaWrench,
  FaStethoscope,
  FaSchool,
  FaBullhorn,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router";
export default function JobCategory() {
  const jobCategories = [
    {
      categoryName: "Software Development",
      jobsAvailable: 128,
      icon: <FaCode className="text-2xl md:text-4xl text-blue-600" />,
    },
    {
      categoryName: "Design & Creative",
      jobsAvailable: 87,
      icon: <FaPaintBrush className="text-2xl md:text-4xl  text-pink-500" />,
    },
    {
      categoryName: "Marketing & Sales",
      jobsAvailable: 102,
      icon: <FaChartLine className="text-2xl md:text-4xl  text-green-600" />,
    },
    {
      categoryName: "Human Resources",
      jobsAvailable: 56,
      icon: <FaUsers className="text-2xl md:text-4xl  text-yellow-600" />,
    },
    {
      categoryName: "Engineering",
      jobsAvailable: 73,
      icon: <FaWrench className="text-2xl md:text-4xl  text-red-600" />,
    },
    {
      categoryName: "Healthcare",
      jobsAvailable: 64,
      icon: <FaStethoscope className="text-2xl md:text-4xl  text-purple-600" />,
    },
    {
      categoryName: "Education",
      jobsAvailable: 48,
      icon: <FaSchool className="text-2xl md:text-4xl  text-indigo-600" />,
    },
    {
      categoryName: "Advertising & Media",
      jobsAvailable: 39,
      icon: <FaBullhorn className="text-2xl md:text-4xl  text-rose-600" />,
    },
    {
      categoryName: "Transportation",
      jobsAvailable: 41,
      icon: <FaTruck className="text-2xl md:text-4xl  text-gray-700" />,
    },
    {
      categoryName: "Security Services",
      jobsAvailable: 29,
      icon: <FaShieldAlt className="text-2xl md:text-4xl  text-teal-600" />,
    },
  ];
  return (
    <>
      <div className="mt-12 py-6  w-11/12 mx-auto">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl md:text-4xl font-bold text-cb-secondary">
            Popular Categories
          </h2>
          <div className="w-44 h-[2px] bg-cb-btn"></div>
        </div>

        <div className="pt-10">
          <Swiper
            loop={true}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {jobCategories.map((category, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-gradient-to-r from-[#177C87] to-[#64CCC5] p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                  <Link to={`jobs-category/${category.categoryName}`}>
                    <p className="bg-[#64CCC5] p-3 w-fit rounded-lg">{category.icon}</p>
                    <div className="mt-4">
                      <h2 className="text-blue-50  text-lg font-semibold">
                        {category.categoryName}
                      </h2>
                      <p className="text-sm text-blue-50/80">
                        {category.jobsAvailable} jobs available
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
