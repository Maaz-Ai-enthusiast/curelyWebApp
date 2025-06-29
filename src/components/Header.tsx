
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Curely</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-purple-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-purple-600 transition-colors">Features</button>
            <button onClick={() => scrollToSection('download')} className="text-gray-700 hover:text-purple-600 transition-colors">Downloads</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-purple-600 transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('footer')} className="text-gray-700 hover:text-purple-600 transition-colors">Contact</button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">Features</button>
              <button onClick={() => scrollToSection('download')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">Downloads</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">Pricing</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">FAQ</button>
              <button onClick={() => scrollToSection('footer')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">Contact</button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-700 justify-start">
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
