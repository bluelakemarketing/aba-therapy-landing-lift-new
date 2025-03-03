
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Working with BlueLake Marketing transformed our ABA practice. Within six months, our client base increased by 40% and we had to hire additional therapists to meet demand.",
    author: "Dr. Sarah Johnson",
    position: "Clinical Director, Sunshine ABA Therapy",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 2,
    quote: "The team at BlueLake truly understands the unique marketing challenges faced by ABA providers. They created a website and digital strategy that perfectly communicates our approach and values to families.",
    author: "Michael Chen",
    position: "CEO, Spectrum Behavioral Services",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    quote: "Our online presence was practically non-existent before partnering with BlueLake. Now we're ranking at the top of local searches and getting qualified inquiries every day. The ROI has been incredible.",
    author: "Jennifer Martinez",
    position: "Operations Manager, Behavioral Milestones",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 4,
    quote: "BlueLake's approach to marketing is thorough and professional. They took the time to understand our practice and created a strategy that helped us reach more families while maintaining the highest ethical standards.",
    author: "Dr. Robert Thompson",
    position: "Founder, Thompson ABA Center",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-blue-600 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-700 via-blue-600 to-teal-600 opacity-100"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500 mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-500 mix-blend-soft-light filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-4">
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Trusted by ABA Therapy Providers</span>
          </h2>
          <p className="text-xl text-white/80">
            Hear directly from ABA practices that have transformed their growth through our specialized marketing services.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Testimonial cards */}
          <div className="relative overflow-hidden h-[500px] md:h-[350px]">
            <div 
              className="absolute inset-0 transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full h-full flex-shrink-0 flex flex-col md:flex-row glass-dark rounded-2xl p-8 md:p-12"
                >
                  <div className="flex-shrink-0 flex flex-col items-center md:items-start mb-6 md:mb-0 md:mr-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/20 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <h4 className="text-xl font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-white/70 text-sm">{testimonial.position}</p>
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <svg className="w-12 h-12 text-white/20 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-xl md:text-2xl text-white leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center md:justify-end items-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index 
                      ? "bg-white w-8" 
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
