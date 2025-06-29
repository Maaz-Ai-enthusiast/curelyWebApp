
import { Button } from "@/components/ui/button";
import { Download, Play, QrCode } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Download Curely & Take Control
            <br />
            of Your Health
          </h2>
          <p className="text-purple-100 text-lg mb-12 max-w-2xl mx-auto">
            Join millions of users who trust Curely for their healthcare needs. 
            Download our app today and experience the future of digital health.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* QR Code */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center mb-4">
                <QrCode className="w-24 h-24 text-white" />
              </div>
              <p className="text-gray-600 text-sm font-medium">Scan to Download</p>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-3 w-full sm:w-auto">
                <Download className="w-6 h-6" />
                Download for iOS
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-3 w-full sm:w-auto">
                <Play className="w-6 h-6" />
                Get it on Google Play
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">4.9★</div>
              <div className="text-purple-100 text-sm">App Store Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-purple-100 text-sm">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-purple-100 text-sm">Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-purple-100 text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
