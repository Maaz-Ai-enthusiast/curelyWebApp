
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform: string) => {
    // You can replace these with actual social media URLs
    const urls = {
      facebook: 'https://facebook.com/curely',
      twitter: 'https://twitter.com/curely_health',
      instagram: 'https://instagram.com/curely',
      linkedin: 'https://linkedin.com/company/curely'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  const handleContactClick = (type: string, value: string) => {
    if (type === 'email') {
      window.open(`mailto:${value}`, '_blank');
    } else if (type === 'phone') {
      window.open(`tel:${value}`, '_blank');
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">Curely</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in digital healthcare management. Connecting patients and healthcare providers for better health outcomes.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer" onClick={() => handleSocialClick('facebook')}>
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer" onClick={() => handleSocialClick('twitter')}>
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer" onClick={() => handleSocialClick('instagram')}>
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer" onClick={() => handleSocialClick('linkedin')}>
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-white transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">Blog</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors">Careers</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition-colors">Press</button></li>
              <li><button onClick={() => scrollToSection('download')} className="text-gray-400 hover:text-white transition-colors">Partners</button></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">Help Center</button></li>
              <li><button onClick={() => alert('Privacy Policy - Coming Soon!')} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => alert('Terms of Service - Coming Soon!')} className="text-gray-400 hover:text-white transition-colors">Terms of Service</button></li>
              <li><button onClick={() => scrollToSection('footer')} className="text-gray-400 hover:text-white transition-colors">Contact Us</button></li>
              <li><button onClick={() => alert('Security Information - Coming Soon!')} className="text-gray-400 hover:text-white transition-colors">Security</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-500" />
                <span className="text-gray-400">123 Health St, Medical City, MC 12345</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer" onClick={() => handleContactClick('phone', '+1-555-123-4567')}>
                <Phone className="w-5 h-5 text-purple-500" />
                <span className="text-gray-400 hover:text-white transition-colors">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer" onClick={() => handleContactClick('email', 'support@curely.com')}>
                <Mail className="w-5 h-5 text-purple-500" />
                <span className="text-gray-400 hover:text-white transition-colors">support@curely.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest health tips and updates delivered to your inbox.</p>
            </div>
            <div className="flex space-x-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
              <Button 
                onClick={() => alert('Newsletter subscription - Coming Soon!')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Curely. All rights reserved. Made with ❤️ for better healthcare.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
