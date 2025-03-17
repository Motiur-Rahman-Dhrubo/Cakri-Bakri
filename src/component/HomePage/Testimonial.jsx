import { FaQuoteLeft } from "react-icons/fa";



export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Software Engineer",
      message: "This platform helped me land my dream job! The interface is user-friendly and the opportunities are vast.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Marketing Specialist",
      message: "Excellent service! The job recommendations were spot-on and the application process was seamless.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Sophia Lee",
      role: "Data Analyst",
      message: "Cakri-Bakri is a game-changer! I found multiple job offers and improved my networking skills.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];
  return (
    <section className="py-5 bg-cb-card mb-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cb-secondary">What Our Users Say</h2>
        <p className="text-lg text-cb-secondary/80 mt-4">See how Cakri-Bakri has helped professionals grow.</p>
      </div>
      <div className="divider w-11/12 mx-auto my-0"></div>
      <div className="carousel w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 max-sm:gap-y-3 md:gap-x-4 mt-2">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="carousel-item w-full justify-center">
            <div className="bg-cb-primary p-6 rounded-lg shadow-lg max-w-lg flex flex-col items-center text-center">
              <FaQuoteLeft className="text-4xl text-cb-white mb-3" />
              <p className="text-cb-white/95 text-lg font-medium">{testimonial.message}</p>
              <div className="mt-4 flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-cb-white/80" />
                <div className="text-left">
                  <h4 className="text-cb-white/85 font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-cb-white/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <a href={`#slide${index}`} key={index} className="btn h-5 w-5 btn-circle bg-[#176B87] text-white"></a>
        ))}
      </div>
    </section>
  );
};

