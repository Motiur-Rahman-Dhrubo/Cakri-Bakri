import banner from "../../assets/Banner-1.jpg"
export default function Banner() {
  return (
    <section className="max-sm:pt-10 relative w-full md:h-[500px] flex flex-col max-sm:gap-y-4 md:flex-row items-center justify-center overflow-hidden">
    {/* Background Image */}
    <img 
      src={banner} 
      alt="Chakri Bakri Banner" 
      className="max-sm:hidden absolute inset-0 w-full h-full " 
    />
  
    {/* Overlay */}
    <div className="max-sm:hidden absolute inset-0 bg-blue-800/20"></div>
  
    {/* Content */}
    <div className="md:absolute z-10 left-14 max-sm:w-11/12">
      <h1 className="text-5xl md:text-6xl text-cb-primary md:text-cb-white font-bold">Chakri Bakri</h1>
      <p className="mt-4 text-lg text-cb-primary/80 md:text-cb-white/85 md:w-[450px]">
        Find Your Dream Job. Connect with Top Employers. A seamless platform for job seekers and recruiters.
      </p>
      <button className="mt-6 btn text-lg bg-cb-btn md:bg-cb-white text-cb-secondary md:text-cb-secondary">Explore Jobs</button>
    </div>

    <div className="md:hidden w-11/12 mx-auto rounded-lg">
    <img 
      src={banner} 
      alt="Chakri Bakri Banner" 
      className="w-full h-full rounded-lg drop-shadow-[0_4px_10px_var(--color-cb-card)]" 
    />
    </div>
  </section>
  )
}
