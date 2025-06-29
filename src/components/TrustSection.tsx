
import { Shield, Users, Clock, Award, Heart, Star } from "lucide-react";

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "Choose Your Doctor",
      description: "Select from a network of verified healthcare professionals based on your specific needs and preferences."
    },
    {
      icon: Heart,
      title: "Take Your Medications",
      description: "Never miss a dose with smart medication reminders and comprehensive prescription management."
    },
    {
      icon: Clock,
      title: "Save in Time",
      description: "Reduce waiting times and streamline your healthcare experience with efficient appointment scheduling."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Thousands Trust
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Doctify
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform is trusted by healthcare professionals and patients worldwide for its reliability, security, and ease of use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* App Screenshots */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="group">
              <div className="bg-black rounded-[1.5rem] p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-[1rem] h-40 flex items-center justify-center">
                  <div className="text-center p-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-2"></div>
                    <div className="w-12 h-1 bg-gray-300 rounded mx-auto mb-1"></div>
                    <div className="w-8 h-1 bg-gray-200 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">1000+</div>
            <div className="text-gray-600">Doctors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">500K+</div>
            <div className="text-gray-600">Appointments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600 flex items-center justify-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
