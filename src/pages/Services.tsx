import { motion } from 'motion/react';
import { Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const detailedServices = [
  {
    id: 'dpf-cleaning',
    title: "DPF CLEANING",
    tagline: "RESTORATION",
    price: "FROM £199",
    description: "Specialist DPF cleaning services to restore your vehicle's performance and efficiency. We use advanced chemical cleaning and forced regeneration techniques.",
    features: [
      "Advanced Chemical Cleaning",
      "Forced Regeneration",
      "Sensor Diagnostics",
      "Performance Report",
      "Mobile Service"
    ],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'adblue-solutions',
    title: "ADBLUE SOLUTIONS",
    tagline: "EMISSIONS",
    price: "FROM £149",
    description: "Expert AdBlue services to ensure your diesel vehicle runs cleanly and complies with emissions standards. We fix common AdBlue faults and sensor issues.",
    features: [
      "Fault Code Clearing",
      "Sensor Calibration",
      "System Flushing",
      "Software Updates",
      "Mobile Service"
    ],
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'remapping',
    title: "VEHICLE REMAPPING",
    tagline: "PERFORMANCE",
    price: "FROM £249",
    description: "Unlock your vehicle's true potential with our professional remapping services. Choose between Stage 1 Power, Economy, or a custom Blend.",
    features: [
      "Stage 1 Power Map",
      "Economy Tuning",
      "EGR/DPF Software",
      "Speed Limiter Removal",
      "Before/After Diagnostics"
    ],
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'mobile-mechanic',
    title: "MOBILE MECHANIC",
    tagline: "MAINTENANCE",
    price: "FROM £85",
    description: "Comprehensive mobile mechanic services for general repairs and maintenance. From wet belt replacements to general servicing.",
    features: [
      "Full/Interim Servicing",
      "Wet Belt Replacement",
      "Brake Repairs",
      "Suspension Work",
      "Diagnostic Scanning"
    ],
    image: "https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">PRECISION ENGINEERED CARE</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 uppercase">OUR SERVICES</h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-2xl leading-relaxed">
            Every curve, every stitch, every surface deserves meticulous attention. Discover our range of bespoke detailing and valeting solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row"
            >
              <div className="lg:w-2/5 relative h-64 lg:h-auto">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/40 to-transparent" />
              </div>
              
              <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-2 block">{service.tagline}</span>
                      <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">{service.title}</h2>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-display font-bold text-white">{service.price}</span>
                    </div>
                  </div>
                  
                  <p className="text-brand-muted mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-white/80">
                        <CheckCircle2 size={16} className="text-brand-blue" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/booking" className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold transition-all text-center">
                    BOOK SERVICE
                  </Link>
                  <Link to="/contact" className="border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-full font-bold transition-all text-center">
                    ENQUIRE NOW
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-24 glass-card rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">TAILORED EXCELLENCE</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 uppercase">BUILD YOUR CUSTOM PACKAGE</h2>
            <p className="text-brand-muted text-lg mb-10">
              Every vehicle has unique requirements. Use our bespoke configurator to select individual treatments that match your driving lifestyle and aesthetic goals.
            </p>
            <Link to="/booking" className="bg-brand-blue hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold transition-all inline-block">
              CONFIGURE NOW
            </Link>
          </div>
          
          <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" 
              alt="Custom Package" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-brand-dark via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
