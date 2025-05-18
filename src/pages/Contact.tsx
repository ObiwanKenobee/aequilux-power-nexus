
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully",
      description: "We'll get back to you as soon as possible.",
    });
    
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setIsLoading(false);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space to-black">
      <Navbar />
      <div className="container mx-auto py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-block relative mb-6">
              <div className="w-16 h-16 rounded-full bg-fusion-purple animate-pulse-light mx-auto"></div>
              <div className="absolute inset-0 bg-fusion-purple opacity-30 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Have questions about AEQUILUX? Our team is here to help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-electric-blue mb-4">Get in Touch</h2>
                <p className="text-white/80 mb-6">
                  Whether you're interested in partnership opportunities, investment, or 
                  learning more about our technology, we'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Email</h3>
                    <p className="text-electric-blue">info@aequilux.com</p>
                    <p className="text-white/60 text-sm mt-1">We aim to respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Headquarters</h3>
                    <p className="text-white/80">AEQUILUX Tower</p>
                    <p className="text-white/80">123 Fusion Boulevard</p>
                    <p className="text-white/80">San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Phone</h3>
                    <p className="text-electric-blue">+1 (555) 123-4567</p>
                    <p className="text-white/60 text-sm mt-1">Monday-Friday, 9AM-5PM PT</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-32"
                    placeholder="Please provide details about your inquiry..."
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-electric-blue hover:bg-glowing-cyan text-deep-space" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-deep-space" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
