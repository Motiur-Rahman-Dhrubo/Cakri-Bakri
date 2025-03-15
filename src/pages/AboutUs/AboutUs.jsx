import AboutBanner from "../../component/AboutUsPage/AboutBanner";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "MD. MOTIUR RAHMAN",
      title: "Front-End Web Developer",
      description: "Junior front-end web developer with a strong passion for creating interactive and visually captivating web experiences.",
      image: "https://motiur383-portfolio.netlify.app/assets/me.png", // Replace with actual image
      portfolio: "https://motiur383-portfolio.netlify.app/",
      github: "https://github.com/Motiur-Rahman-Dhrubo",
    },
    {
      name: "Abu Bakr Siddik",
      title: "Fontend Developer",
      description: "PassionateJunior Web Developer with a strong enthusiasm for building dynamic and user-friendly web applications.",
      image: "https://avatars.githubusercontent.com/u/174480439?v=4",
      portfolio: "https://portfoilo-abubakrsiddik.surge.sh/",
      github: "https://github.com/abubakrsiddikl",
    },
    {
      name: "MD. RABBI SARKAR",
      title: "Full-Stack Developer",
      description: "Computer Science student and full-stack developer passionate about building impactful web applications.",
      image: "https://avatars.githubusercontent.com/u/142886884?v=4",
      portfolio: "https://md-rabbi-sarkar.github.io/my-portfolio",
      github: "https://github.com/Md-Rabbi-Sarkar",
    },
    {
      name: "Mahmudur Rahman",
      title: "MERN Developer",
      description: "Working As Engineer in a private pharmaceutical compnay and learning web design and development in programming hero and online platform.",
      image: "https://i.ibb.co.com/Y7nfM5DG/mylasted.jpg",
      portfolio: "https://mahmudurprotfolio.netlify.app/",
      github: "https://github.com/mahmud819",
    },
    {
      name: "Emily Davis",
      title: "Fullstack Web Developer",
      description: "Fullstack web developer who is passionate about making beautiful websites.",
      image: "https://002stupid-wilderness.surge.sh/assets/WhatsApp%20Image%202025-02-05%20at%2019.23.28_b6334d59-ZL8vXAUU.jpg",
      portfolio: "https://002stupid-wilderness.surge.sh/",
      github: "https://github.com/ezmahir",
    },
    {
      name: "Ripanul Alam Ridoy",
      title: "Junior Frontend Developer",
      description: "Junior Frontend Developer specializing in the React.js. Exploring Next.js and TypeScript to enhance my skills.",
      image: "https://i.ibb.co.com/S5VDdjL/formal-pic-self.png",
      portfolio: "https://ripanulalam.netlify.app",
      github: "https://github.com/RRDesignHub",
    },
    
  ];
  return (
    <div>
      <AboutBanner />
      <div className="py-16 w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-cb-primary flex flex-col p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:drop-shadow-[0px_0px_10px_rgba(10,172,247,0.7)] transition-all duration-500"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-cb-white/70"
              />
              <h3 className="mt-4 text-2xl font-bold text-cb-white uppercase">
                {member.name}
              </h3>
              <p className="text-cb-white/80 text-lg">{member.title}</p>
              <div className="my-1 bg-cb-white/80 h-[4px] rounded-[100%]"></div>
              <p className="text-cb-white/60 ">{member.description}</p>
              <div className="grow"></div>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-transparent border border-cb-white text-cb-white hover:text-cb-secondary hover:bg-cb-white/90"
                >
                  Portfolio
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-cb-white text-cb-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
