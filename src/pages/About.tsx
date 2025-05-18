
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from "framer-motion";

const About = () => {
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
              <div className="w-16 h-16 rounded-full bg-electric-blue animate-pulse-light mx-auto"></div>
              <div className="absolute inset-0 bg-electric-blue opacity-30 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">About AEQUILUX</h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Pioneering the future of energy and labor through groundbreaking fusion technology
            </p>
          </div>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-bold text-electric-blue mb-4">Our Vision</h2>
              <p className="text-white/90 mb-4">
                At AEQUILUX, we envision a world where clean, limitless energy powers human prosperity without environmental cost. 
                Our name—combining "aequus" (equal) and "lux" (light)—reflects our mission: equal access to the power of fusion energy for all.
              </p>
              <p className="text-white/90">
                Founded in 2023 by a coalition of fusion scientists, AI specialists, and labor economists, 
                AEQUILUX was born from the belief that energy abundance can transform labor systems and provide universal prosperity.
              </p>
            </section>
            
            <section className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-electric-blue mb-4">Our Mission</h2>
                <ul className="space-y-4 text-white/90">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-electric-blue flex-shrink-0"></div>
                    <p>Deploy compact fusion reactors globally, prioritizing underserved communities</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-electric-blue flex-shrink-0"></div>
                    <p>Create an integrated platform linking energy production with labor optimization</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-electric-blue flex-shrink-0"></div>
                    <p>Democratize access to both energy and economic opportunity worldwide</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-electric-blue flex-shrink-0"></div>
                    <p>Accelerate transition away from fossil fuels through superior technology</p>
                  </li>
                </ul>
              </div>
              <div className="glass-effect rounded-xl overflow-hidden h-full flex items-center justify-center p-8">
                <div className="relative w-full aspect-square max-w-xs">
                  <div className="absolute inset-0 bg-electric-blue/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-8 border-4 border-electric-blue/40 rounded-full"></div>
                  <div className="absolute inset-16 bg-fusion-purple/30 rounded-full animate-ping"></div>
                  <div className="absolute inset-20 bg-glowing-cyan/50 rounded-full animate-pulse"></div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-electric-blue mb-4">Leadership Team</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Dr. Elena Chen",
                    title: "Chief Science Officer",
                    desc: "Former lead researcher at ITER with 15 years in plasma physics."
                  },
                  {
                    name: "Marcus Webb",
                    title: "Chief Executive Officer",
                    desc: "Serial entrepreneur with previous successful energy startups."
                  },
                  {
                    name: "Dr. Kwame Osei",
                    title: "Chief Labor Economist",
                    desc: "Pioneer in automation economics and universal basic assets theory."
                  }
                ].map((person, i) => (
                  <div key={i} className="glass-effect rounded-xl p-6 text-center">
                    <div className="w-20 h-20 bg-electric-blue/20 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-white text-xl font-semibold">{person.name}</h3>
                    <p className="text-electric-blue font-medium mb-2">{person.title}</p>
                    <p className="text-white/70 text-sm">{person.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
