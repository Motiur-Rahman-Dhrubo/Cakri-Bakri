
import Banner from "../../component/HomePage/Banner";
import LeteastJobs from "../../component/HomePage/LeteastJobs";
import Overview from "../../component/HomePage/Overview";
import StatsOverlay from "../../component/HomePage/StatsOverlay";
import Testimonials from "../../component/HomePage/Testimonial";

const Home = () => {
  return (
    <>
    <div className="h-[500px] w-full">
    <Banner />
    </div>
    <StatsOverlay />
    <Overview />
    <LeteastJobs />

    <Testimonials />
    </>
  );
};

export default Home;
