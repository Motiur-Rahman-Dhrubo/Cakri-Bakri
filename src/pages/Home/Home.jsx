
import Banner from "../../component/HomePage/Banner";
import JobCategory from "../../component/HomePage/JobCategory";
import LeteastJobs from "../../component/HomePage/LeteastJobs";
import { OurCompany } from "../../component/HomePage/OurCompany";
import Overview from "../../component/HomePage/Overview";
import StatsOverlay from "../../component/HomePage/StatsOverlay";
import Testimonials from "../../component/HomePage/Testimonial";

const Home = () => {
  
  return (
    <>
    <div className="h-[500px] w-full">
    <Banner />
    </div>
    <OurCompany className="w-full" />
    <StatsOverlay />
    <Overview />
    <JobCategory />
    <LeteastJobs />
    <Testimonials />
    </>
  );
};

export default Home;
