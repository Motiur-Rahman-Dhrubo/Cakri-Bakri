import { Link } from "react-router";
import banner from "../../assets/Banner-2.jpg";

export default function AboutBanner() {
  return (
    <section className="max-sm:pt-10 relative w-full h-[400px] md:h-[500px] flex flex-col max-sm:gap-y-4 md:flex-row items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img 
        src={banner} 
        alt="Chakri Bakri Team" 
        className="absolute inset-0 w-full h-full object-cover object-bottom" 
      />
    
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>
    
      {/* Content */}
      <div className="absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 text-center">
        <h1 className="text-5xl md:text-6xl text-white font-bold">Meet Our Team</h1>
        <p className="mt-4 text-lg text-white/95">
          We are a passionate team of six, dedicated to making <Link to={"/"} className="font-bold hover:underline">Chakri Bakri</Link> your go-to platform for career success. 
          From development to design, we work together to bring innovation and opportunity to job seekers and employers.
        </p>
        
      </div>
    </section>
  );
}
