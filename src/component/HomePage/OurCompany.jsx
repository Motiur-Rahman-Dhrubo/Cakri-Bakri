import Marquee from "react-fast-marquee";
import { Link } from "react-router";
export const OurCompany = () => {
  const companyLogos = [
    {
      name: "Tech Innovate",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsirf4xb7L1sXA23X3ahQoqbMIxfPm0pTGw&s",
    },
    {
      name: "Global Solutions",
      logo: "https://globalsolutionbiz.com/wp-content/uploads/2022/09/Companylogo2-1024x374.png",
    },
    {
      name: "Creative Minds",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNdRcMTiULSxgM5s8qArbNNmLbE6VifN87g&s",
    },
    {
      name: "Alpha Dynamics",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaxtJuLS6ivL1K2vygSM9ELUqArDLDpS__6A&s",
    },
    {
      name: "Beta Systems",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5Uu96T7RyOkT2FxvubDgzJU9SlwQNUmA5A&s",
    },
    {
      name: "Omega Group",
      logo: "https://www.vhv.rs/dpng/d/595-5952148_2018-logo-omega-group-png-transparent.png",
    },
    {
      name: "Stellar Corp",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKTxhsma3iZ5QQlCSQBUExYrSoVfED8U6unA&s",
    },
    {
      name: "Nova Tech",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCADPrIq5AjCxSJA_XDNkRLE0UYF8IQNwn8Q&s",
    },
    {
      name: "Quantum Leap",
      logo: "https://images-platform.99static.com/Ls8wfz15ii0FAu2tW0tS9foJA1w=/271x167:1605x1501/500x500/top/smart/99designs-contests-attachments/65/65770/attachment_65770200",
    },
    {
      name: "Synergy Inc",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MSD-4B3CAUYaA8LwLhMZ479xEiIcjzfeOg&s",
    },
    {
      name: "Apex Industries",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsUO5HvKD_NUjPT8lamzlvVW8qOXfpccEJQ&s",
    },
    {
      name: "Zenith Global",
      logo: "https://zenith-gl.com/wp-content/uploads/2023/02/Zenith-Global_Black.png",
    },
  ];
  return (
    <div className="py-5 mt-12 w-11/12 mx-auto">
      <div className="flex items-center gap-3">
        <h2 className="text-3xl md:text-4xl font-bold text-cb-secondary">
          Our Trustworthy Companies
        </h2>
        <div className="w-44 h-[2px] bg-cb-btn"></div>
      </div>

      {/* scroling logo div */}
      <div className="py-10">
        <Marquee pauseOnHover={true} pauseOnClick={true}>
          {companyLogos?.map((logo, idx) => (
            <div key={idx} className="w-40 h-28 mx-4">
              <Link className="w-full h-full" to="/">
                <img src={logo?.logo} className="w-full h-full" alt={`logo-${idx}`} />
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
