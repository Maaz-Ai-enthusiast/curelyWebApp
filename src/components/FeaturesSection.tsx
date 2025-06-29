
import { Calendar, Activity, FileText, Shield, Clock, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Appointment Booking",
      description: "Schedule appointments with healthcare providers quickly and easily through our intuitive booking system.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Activity,
      title: "Health Tracker",
      description: "Monitor your vital signs, track medications, and keep a comprehensive record of your health metrics.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: FileText,
      title: "Digital Health Records",
      description: "Access your complete medical history, lab results, and prescriptions securely from anywhere.",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Instant Telehealth",
      description: "Connect with healthcare professionals instantly through secure video consultations.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Secure & Encrypted",
      description: "Your health data is protected with enterprise-grade security and end-to-end encryption.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Users,
      title: "Family Management",
      description: "Manage health records and appointments for your entire family from a single account.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Nothing You Don't.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <span className="text-purple-600 font-medium hover:text-purple-700 cursor-pointer">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature highlight with phone mockup */}
        <div className="mt-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Experience Healthcare
                <br />
                Like Never Before
              </h3>
              <p className="text-purple-100 text-lg mb-8">
                Join thousands of users who have transformed their healthcare experience with our comprehensive digital platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                  Get Started Free
                </button>
                <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-purple-600 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-black rounded-[2.5rem] p-3 shadow-2xl mx-auto max-w-xs">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <div className="h-80 bg-gradient-to-br from-purple-100 to-pink-100 p-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Activity className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Health Dashboard</h4>
                      <p className="text-sm text-gray-600 mb-4">Track your wellness journey</p>
                      <div className="space-y-2">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Heart Rate</span>
                            <span className="text-sm font-medium text-gray-900">72 BPM</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Blood Pressure</span>
                            <span className="text-sm font-medium text-gray-900">120/80</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
