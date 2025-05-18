
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([]); 

  // Initialize particles on component mount
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          speed: Math.random() * 2 + 0.5
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
    
    const moveParticles = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y - particle.speed,
          // Reset particle position when it reaches the top
          ...(particle.y <= 0 ? { y: 100 } : {})
        }))
      );
    }, 100);
    
    return () => clearInterval(moveParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 overflow-hidden">
      {/* Particles Background */}
      <div className="particle-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle animate-pulse-light"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>
      
      {/* Fusion Core Animation */}
      <div className="mb-16 relative">
        <div className="w-48 h-48 rounded-full bg-electric-blue/20 animate-pulse-light absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 scale-[2]"></div>
        <div className="w-40 h-40 rounded-full bg-electric-blue/30 animate-pulse-light absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 scale-[1.7]"></div>
        <div className="w-32 h-32 rounded-full bg-electric-blue/50 animate-glow absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 scale-150"></div>
        <div className="w-24 h-24 rounded-full bg-glowing-cyan animate-float fusion-glow absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
      </div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-center text-white">
        <span className="block">Equal Light.</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-glowing-cyan">Infinite Power.</span>
      </h1>
      
      <p className="text-lg md:text-xl max-w-2xl mb-10 text-center text-white/80">
        Powering the future with limitless clean energy and liberated labor. 
        The next generation of fusion technology accessible to all.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6">
        <Button asChild size="lg" className="bg-electric-blue hover:bg-glowing-cyan text-deep-space font-semibold px-8 py-6">
          <Link to="/signup">Get Started</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-electric-blue hover:bg-electric-blue hover:text-deep-space text-white font-semibold px-8 py-6">
          <Link to="/technology">Learn More</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;
