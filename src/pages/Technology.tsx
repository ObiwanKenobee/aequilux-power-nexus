
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from "framer-motion";

const Technology = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space to-black">
      <Navbar />
      <div className="container mx-auto py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-xl p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-block relative mb-6">
              <div className="w-16 h-16 rounded-full bg-glowing-cyan animate-pulse-light mx-auto"></div>
              <div className="absolute inset-0 bg-glowing-cyan opacity-30 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Our Technology</h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              The science and engineering behind AEQUILUX's breakthrough fusion energy systems
            </p>
          </div>
          
          <div className="space-y-16">
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-electric-blue mb-4">Compact Fusion Reactor</h2>
                <p className="text-white/90 mb-4">
                  Our proprietary HELIOS reactor uses advanced magnetic confinement to create and sustain 
                  plasma at temperatures exceeding 150 million degrees Celsius — hotter than the core of the sun.
                </p>
                <p className="text-white/90">
                  Unlike traditional fusion approaches, our compact design leverages breakthroughs in 
                  high-temperature superconductors and AI-optimized magnetic field configurations to achieve
                  stable fusion in a facility just 1/10th the size of conventional tokamaks.
                </p>
              </div>
              <div className="glass-effect rounded-xl overflow-hidden h-64 flex items-center justify-center relative animate-pulse-light">
                <div className="absolute inset-0 particle-container">
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full bg-electric-blue/30 animate-pulse"></div>
                      <div className="absolute inset-4 rounded-full border-2 border-electric-blue/60 animate-spin" style={{animationDuration: '10s'}}></div>
                      <div className="absolute inset-8 rounded-full bg-glowing-cyan/40 animate-pulse"></div>
                      <div className="absolute inset-12 rounded-full bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-electric-blue mb-6">Key Technological Innovations</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "AI-Driven Plasma Control",
                    desc: "Machine learning algorithms optimize magnetic confinement in real-time, maintaining plasma stability with microsecond precision."
                  },
                  {
                    title: "Novel Neutron Shield",
                    desc: "Our patented composite materials capture neutron emissions with unprecedented efficiency, enhancing both safety and energy conversion."
                  },
                  {
                    title: "Modular Power Grid Interface",
                    desc: "Seamlessly integrates with existing infrastructure, allowing scalable deployment from rural microgrids to urban power networks."
                  }
                ].map((tech, i) => (
                  <div key={i} className="glass-effect rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-glowing-cyan mb-4 flex items-center justify-center">
                      <span className="text-black font-bold">{i+1}</span>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">{tech.title}</h3>
                    <p className="text-white/70">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="glass-effect rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-electric-blue mb-4">AEQUILUX Integration Platform</h2>
              <p className="text-white/90 mb-6">
                Beyond the physical fusion technology, our software platform connects energy production with 
                labor optimization tools, creating a seamless ecosystem for managing both power and productivity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-electric-blue/30 rounded-lg p-4 md:p-6">
                  <h3 className="text-white text-lg font-semibold mb-3">Energy Management</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-electric-blue rounded-full"></span>
                      <span>Real-time output monitoring and distribution</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-electric-blue rounded-full"></span>
                      <span>Predictive maintenance scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-electric-blue rounded-full"></span>
                      <span>Automated load balancing and grid integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-electric-blue rounded-full"></span>
                      <span>Energy marketplace for surplus distribution</span>
                    </li>
                  </ul>
                </div>
                <div className="border border-fusion-purple/30 rounded-lg p-4 md:p-6">
                  <h3 className="text-white text-lg font-semibold mb-3">Labor System Integration</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-fusion-purple rounded-full"></span>
                      <span>Energy-to-labor conversion metrics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-fusion-purple rounded-full"></span>
                      <span>Automated task distribution based on energy availability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-fusion-purple rounded-full"></span>
                      <span>Universal Basic Energy (UBE) tracking and allocation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-fusion-purple rounded-full"></span>
                      <span>Community prosperity index monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Technology;
