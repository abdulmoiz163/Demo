import { motion } from 'motion/react';
import { Clock, ArrowRight, CheckCircle2, Shield, AlertCircle, Info, Table } from 'lucide-react';
import { Link } from 'react-router-dom';

const detailedServices = [
  {
    id: 'vehicle-service',
    title: "VEHICLE SERVICE",
    tagline: "MAINTENANCE",
    price: "FROM £85",
    description: "A service is vital for engine components to run effectively. Fresh oil provides a clean engine approach and really benefits running costs and maintenance. Neglecting service can cause oil to solidify, leading to sludge and blockages.",
    features: [
      "Basic: Oil & Filter Change",
      "Interim: Oil, Filter, Air & Pollen",
      "Full: All above + Spark Plugs",
      "Improved Road Safety",
      "Reduced Running Costs",
      "Increased Car Value",
      "Protect Your Warranty"
    ],
    image: "https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'dpf-cleaning',
    title: "DPF CLEANING & REPLACING",
    tagline: "RESTORATION",
    price: "FROM £150",
    description: "We are #1 in Tamworth and Staffordshire for DPF solutions. Our service involves thorough cleaning to ensure optimal performance and reduced emissions using top-quality products.",
    features: [
      "Full Assessment: £50",
      "Stage 1 Clean: £150",
      "Stage 2 Clean: £180",
      "DPF & Carbon Package: £200",
      "DPF Replacement: From £300",
      "DPF Gutting: From £150",
      "Optimized Performance"
    ],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'pat-fluid',
    title: "ADBLUE & PAT FLUID",
    tagline: "EMISSIONS",
    price: "FROM £100",
    description: "Expert AdBlue and Eolys (PAT) fluid services. These additives are crucial for DPF regeneration. If empty, your car will not attempt regeneration, leading to blocked filters and engine issues.",
    features: [
      "Fluid Top-ups from £100",
      "Fault Finding & Diagnostics",
      "Eolys/PAT Fluid Specialists",
      "Regeneration Failure Fixes",
      "Data Reset & Programming",
      "MPG & Acceleration Recovery",
      "System Health Checks"
    ],
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'cambelt-wetbelt',
    title: "CAMBELT & WETBELT",
    tagline: "CRITICAL ENGINE",
    price: "CONTACT FOR QUOTE",
    description: "The cambelt is critical for your engine. As it ages, it can stretch or snap, causing catastrophic damage. We specialize in Ford 2L EcoBlue wetbelt packages and other major manufacturers.",
    features: [
      "Cambelt & Water Pump Kits",
      "Wetbelt Specialist Packages",
      "Ford EcoBlue Specialists",
      "Peugeot/Citroen/Vauxhall 1.2L",
      "Precision Timing Alignment",
      "Engine Noise Diagnostics",
      "Preventative Maintenance"
    ],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800"
  }
];

const wetbeltChart = [
  { make: "Peugeot", models: ["208 (1.2L) 2014+", "2008 (1.2L) 2013+", "308 (1.2L) 2014+", "3008 (1.2L) 2014+", "508 (1.2L) 2019+", "5008 (1.2L) 2014+", "Partner 2014+"] },
  { make: "Vauxhall", models: ["Combo (1.2L) 2018+", "Corsa (1.2L) 2019+", "Crossland (1.2L) 2017+", "Grandland (1.2L) 2017+", "Astra (1.2L)", "Mokka (1.2L)"] },
  { make: "Citroen", models: ["C1 2015-2018", "C3 Aircross 2016+", "C4 Cactus 2014+", "C5 Aircross 2019+", "C-Elysee 2018-2020", "DS4 2014-2019", "DS3 2016+", "DS7 2018+", "Berlingo 2018+"] }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">EXPERT AUTOMOTIVE SOLUTIONS</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 uppercase">OUR SERVICES</h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-2xl leading-relaxed">
            From routine maintenance to specialist DPF and wetbelt solutions, we bring dealer-level expertise directly to your location in Tamworth and Staffordshire.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-24">
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

        {/* Wetbelt Chart Section */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter uppercase mb-6">Wetbelt Application Chart</h2>
            <p className="text-brand-muted max-w-2xl">
              Common vehicles requiring specialist wetbelt maintenance. If your vehicle is listed, contact us for a preventative maintenance quote.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wetbeltChart.map((item) => (
              <div key={item.make} className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-display font-bold text-brand-blue mb-6 uppercase">{item.make}</h3>
                <ul className="space-y-3">
                  {item.models.map((model) => (
                    <li key={model} className="text-brand-muted text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                      {model}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Locking Wheel Nut Removal */}
        <div className="mb-24 glass-card p-12 md:p-20 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">SPECIALIST REMOVAL</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 uppercase">LOCKING NUT REMOVAL</h2>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                Stubborn locking nut? Lost the key? We provide a no-damage, hassle-free solution for all locking nuts including BMW, Vauxhall, Citroen/Peugeot, Ford, and VAG.
              </p>
              <Link to="/contact" className="bg-brand-blue hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold transition-all inline-block">
                GET A QUOTE
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-2xl text-center">
                  <Shield className="text-brand-blue mx-auto mb-4" size={32} />
                  <p className="text-xs font-bold uppercase tracking-widest">No Damage</p>
                </div>
                <div className="glass-card p-6 rounded-2xl text-center">
                  <Clock className="text-brand-blue mx-auto mb-4" size={32} />
                  <p className="text-xs font-bold uppercase tracking-widest">Fast Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ/Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <h3 className="text-3xl font-display font-bold uppercase tracking-tight">Eolys (PAT) Fluid FAQ</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold mb-2">What is Eolys fluid?</h4>
                <p className="text-brand-muted text-sm leading-relaxed">A cerium/iron based solution designed to assist in DPF regeneration. If empty, the car will not attempt regeneration.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">How long does it last?</h4>
                <p className="text-brand-muted text-sm leading-relaxed">A full tank should last around 70,000 miles, but varies by model.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Can I top it up myself?</h4>
                <p className="text-brand-muted text-sm leading-relaxed">Access is tricky and requires specialist programming and data reset once complete.</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl font-display font-bold uppercase tracking-tight">Cambelt Warning Signs</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <AlertCircle className="text-brand-blue shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Engine Noise</h4>
                  <p className="text-brand-muted text-sm">Listen for rubbing sounds. Turn off the engine immediately if heard.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertCircle className="text-brand-blue shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Car Not Starting</h4>
                  <p className="text-brand-muted text-sm">A broken cambelt will prevent the engine from starting entirely.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Info className="text-brand-blue shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Preventative Care</h4>
                  <p className="text-brand-muted text-sm">Always replace within recommended intervals to avoid catastrophic engine failure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
