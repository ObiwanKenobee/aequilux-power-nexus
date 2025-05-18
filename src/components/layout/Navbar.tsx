
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="relative mr-2">
              <div className="w-8 h-8 rounded-full bg-electric-blue animate-pulse-light"></div>
              <div className="absolute inset-0 bg-electric-blue opacity-50 rounded-full animate-ping"></div>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">AEQUILUX</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-electric-blue transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-electric-blue transition-colors">About</Link>
          <Link to="/technology" className="text-white hover:text-electric-blue transition-colors">Technology</Link>
          <Link to="/contact" className="text-white hover:text-electric-blue transition-colors">Contact</Link>
          <div className="flex space-x-4">
            <Button asChild variant="outline" className="border-electric-blue text-white hover:bg-electric-blue hover:text-deep-space">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-electric-blue text-deep-space hover:bg-glowing-cyan">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            className="text-white hover:text-electric-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-effect">
          <div className="px-4 py-5 space-y-4">
            <Link to="/" className="block text-white hover:text-electric-blue transition-colors">Home</Link>
            <Link to="/about" className="block text-white hover:text-electric-blue transition-colors">About</Link>
            <Link to="/technology" className="block text-white hover:text-electric-blue transition-colors">Technology</Link>
            <Link to="/contact" className="block text-white hover:text-electric-blue transition-colors">Contact</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button asChild variant="outline" className="border-electric-blue text-white hover:bg-electric-blue hover:text-deep-space w-full">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-electric-blue text-deep-space hover:bg-glowing-cyan w-full">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
