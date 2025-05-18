
import { cn } from '@/lib/utils';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Deploy AEQUILUX Fusion Cells",
      description: "Install our compact fusion cells, designed for minimal footprint and maximum output.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Monitor & Manage Energy Flows",
      description: "Access real-time data and control systems through our intuitive dashboard interface.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Connect to Labor & Market Ecosystem",
      description: "Integrate with our global network of automated systems and energy marketplace.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-6 bg-deep-space">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">How It Works</h2>
        <p className="text-lg text-center text-white/70 max-w-3xl mx-auto mb-16">
          A simple three-step process to revolutionize your energy infrastructure
        </p>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col md:flex-row items-center mb-16 last:mb-0">
              <div 
                className={cn(
                  "flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center glass-effect mb-8 md:mb-0",
                  index % 2 === 0 ? "md:mr-12" : "md:order-last md:ml-12"
                )}
              >
                <div className="text-electric-blue fusion-glow">{step.icon}</div>
              </div>
              
              <div className={cn(
                "flex-grow glass-effect p-8 rounded-xl relative",
                index % 2 === 0 ? "" : "md:text-right"
              )}>
                <span className="absolute -top-4 left-4 bg-electric-blue text-deep-space font-bold px-4 py-1 rounded-md">
                  Step {step.id}
                </span>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
