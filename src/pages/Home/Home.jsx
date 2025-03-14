
import Banner from "../../component/HomePage/Banner";
import LeteastJobs from "../../component/HomePage/LeteastJobs";
import StatsOverlay from "../../component/HomePage/StatsOverlay";
import Testimonials from "../../component/HomePage/Testimonial";

const Home = () => {
  return (
    <>
    <div className="h-[500px] w-full">
    <Banner />
    </div>
    <StatsOverlay />

    <LeteastJobs />

    <Testimonials />
    </>
  );
};

export default Home;
