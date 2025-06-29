import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amanda Thomson",
      role: "Patient",
      text: "Curely has completely transformed how I manage my health. The app is intuitive and the doctor consultations are seamless.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Dr. Michael Chen",
      role: "Healthcare Provider",
      text: "As a doctor, I appreciate how Curely streamlines patient management and improves communication between appointments.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Sarah Wilson",
      role: "Mother of 3",
      text: "Managing my family's health has never been easier. The family plan is perfect for keeping track of everyone's appointments and medications.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "James Rodriguez",
      role: "Senior Patient",
      text: "The medication reminders and easy booking system have been life-changing. I never miss an appointment or medication anymore.",
      rating: 5,
      avatar: "JR"
    },
    {
      name: "Dr. Lisa Park",
      role: "Specialist",
      text: "Curely's secure platform makes it easy to access patient records and provide continuous care. Highly recommended for healthcare professionals.",
      rating: 5,
      avatar: "LP"
    },
    {
      name: "Mark Johnson",
      role: "Chronic Care Patient",
      text: "The health tracking features help me monitor my condition effectively. The reports I can share with my doctor are incredibly detailed.",
      rating: 5,
      avatar: "MJ"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real People. Real Results.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Curely has transformed healthcare experiences for thousands of users worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-purple-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 px-8 py-3 rounded-xl font-semibold">
            Read More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
