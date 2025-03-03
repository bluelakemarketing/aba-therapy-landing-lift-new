
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 ${
      isScrolled ? 'py-3 glass shadow-sm' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl md:text-2xl font-semibold text-blue-700">
              BlueLake<span className="text-teal-600">Marketing</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground/80 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#approach" className="text-foreground/80 hover:text-blue-600 transition-colors">
              Approach
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass absolute left-0 right-0 top-full p-4 mt-2 rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-foreground/80 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-foreground/80 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#approach" 
                className="text-foreground/80 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Approach
              </a>
              <a 
                href="#testimonials" 
                className="text-foreground/80 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-foreground/80 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
