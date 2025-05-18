
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "AEQUILUX represents the most significant breakthrough in clean energy I've witnessed in my 30-year career.",
      author: "Dr. Elena Rodriguez",
      position: "Chief Nuclear Scientist, Global Energy Institute"
    },
    {
      id: 2,
      quote: "The integration of fusion technology with automated labor systems creates a truly revolutionary approach to resource management.",
      author: "Michael Chang",
      position: "Director of Operations, TechFuture"
    },
    {
      id: 3,
      quote: "We've deployed AEQUILUX cells in three developing regions, and the economic impact has been transformative.",
      author: "Aisha Nkosi",
      position: "Sustainability Lead, World Development Fund"
    }
  ];

  const partners = [
    "Global Energy Institute", 
    "TechFuture", 
    "World Development Fund",
    "Fusion Research Alliance",
    "GreenTech Ventures",
    "International Power Consortium"
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">What People Are Saying</h2>
        <p className="text-lg text-center text-white/70 max-w-3xl mx-auto mb-16">
          Hear from our partners and early adopters about the impact of AEQUILUX technology
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass-effect p-8 rounded-xl flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-electric-blue mb-6 opacity-60">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
              
              <p className="italic text-white/80 mb-6">"{testimonial.quote}"</p>
              
              <div className="mt-auto">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-electric-blue text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-8 text-center text-white">Our Partners</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="px-6 py-3 glass-effect rounded-lg text-white/70">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
