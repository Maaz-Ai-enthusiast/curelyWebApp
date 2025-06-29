import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Manage Your Health{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Anytime,
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Anywhere.
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Take control of your health with our comprehensive digital health platform. 
              Connect with doctors, track your wellness, and manage appointments all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl flex items-center gap-2">
                <Download size={20} />
                Download for iOS
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl flex items-center gap-2">
                <Play size={20} />
                Get it on Google Play
              </Button>
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left">
            <div className="relative z-10 flex justify-center items-center">
              {/* Phone mockups container */}
              <div className="relative w-full max-w-md">
                {/* Main phone */}
                <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl transform rotate-1">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    <div className="h-96 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
                        <h3 className="font-semibold text-gray-900 mb-2">Find a Doctor</h3>
                        <p className="text-sm text-gray-600">Connect with verified healthcare professionals</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Second phone - positioned behind and to the left */}
                <div className="absolute -left-8 top-8 bg-black rounded-[2.5rem] p-2 shadow-xl transform -rotate-12 scale-90 z-0">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    <div className="h-80 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-3"></div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Health Records</h4>
                        <p className="text-xs text-gray-600">Secure digital health data</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Third phone - positioned behind and to the right */}
                <div className="absolute -right-6 top-12 bg-black rounded-[2.5rem] p-2 shadow-xl transform rotate-12 scale-85 z-0">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    <div className="h-72 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-2"></div>
                        <h4 className="font-medium text-gray-900 text-sm mb-1">Appointments</h4>
                        <p className="text-xs text-gray-600">Easy booking system</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
