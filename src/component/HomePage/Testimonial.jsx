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
    <section className="py-12 bg-[#EEF5FF]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#176B87]">What Our Users Say</h2>
        <p className="text-lg text-gray-600 mt-2">See how Cakri-Bakri has helped professionals grow.</p>
      </div>
      <div className="divider w-11/12 mx-auto my-0"></div>
      <div className="carousel w-11/12 mx-auto grid grid-cols-3 mt-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="carousel-item w-full justify-center">
            <div className="bg-[#B4D4FF] p-6 rounded-lg shadow-lg max-w-lg mx-4 flex flex-col items-center text-center">
              <FaQuoteLeft className="text-4xl text-[#176B87] mb-3" />
              <p className="text-gray-800 text-lg font-medium">{testimonial.message}</p>
              <div className="mt-4 flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-[#176B87]" />
                <div>
                  <h4 className="text-[#176B87] font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-700">{testimonial.role}</p>
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

