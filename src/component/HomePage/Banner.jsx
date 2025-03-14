import banner from "../../assets/Banner-1.jpg"
export default function Banner() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <img 
      src={banner} 
      alt="Chakri Bakri Banner" 
      className="absolute inset-0 w-full h-full " 
    />
  
    {/* Overlay */}
    <div className="absolute inset-0 bg-blue-800/20"></div>
  
    {/* Content */}
    <div className="absolute z-10 left-14">
      <h1 className="text-4xl md:text-6xl text-cb-white font-bold">Chakri Bakri</h1>
      <p className="mt-4 text-lg text-cb-white/85 md:w-[450px]">
        Find Your Dream Job. Connect with Top Employers. A seamless platform for job seekers and recruiters.
      </p>
      <button className="mt-6 btn text-lg bg-cb-white text-cb-secondary">Explore Jobs</button>
    </div>
  </section>

  )
}
