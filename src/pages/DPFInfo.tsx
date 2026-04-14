import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle2, Info, Settings, Car, ShieldAlert, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const brandInfo = [
  {
    brand: "Volkswagen (VAG Group)",
    issue: "Failed Natural Regeneration",
    description: "Common problems with VW DPFs are often due to failed regeneration. Temperature sensors suffer from carbon build-up and stop sending correct data, leading to failed cycles. We identify the specific faulty sensor to restore performance without needing a full DPF replacement.",
    models: ["Golf", "Polo", "Passat", "Tiguan", "Audi A1/A3/A4/A5/A6 (RS models included)", "Skoda Octavia", "SEAT models"]
  },
  {
    brand: "Ford",
    issue: "Differential Pressure Sensor Failure",
    description: "The 1.6 engine in particular suffers from pressure pipe cracking and differential pressure sensor failure. Fuel vaporizers also massively affect the DPF by blocking fuel flow needed for soot dilution.",
    models: ["Kuga", "Transits", "Mondeo", "Ranger", "Focus"]
  },
  {
    brand: "Peugeot / Citroen",
    issue: "AdBlue & PAT Fluid Faults",
    description: "These brands use a PAT fluid system to dilute soot. When this fluid runs out or the additive tank becomes faulty, DPF issues begin, often showing 'Risk of particle filter blocking' on the dash.",
    models: ["208", "308", "3008", "5008", "DS3", "Partner", "Relay"]
  },
  {
    brand: "Nissan / Renault / Dacia",
    issue: "1.5 dCi Engine Sensors",
    description: "The 1.5 dCi engine suffers from sensor issues, upstream pressure faults, and DPF blockages. These hard-to-reach components require precise time and expertise to replace and recalibrate.",
    models: ["Renault Captur/Clio/Megane", "Dacia Duster", "Nissan Qashqai/Note"]
  },
  {
    brand: "Vauxhall",
    issue: "Periodic Component Failures",
    description: "Common issues include boost leaks, glow plugs, and sensor errors that directly impact DPF health. AdBlue issues are also becoming more frequent on newer models.",
    models: ["Corsa", "Astra", "Insignia", "Combo"]
  },
  {
    brand: "Mercedes-Benz",
    issue: "Sensor Heat Damage & Boost Leaks",
    description: "DPF sensors on Mercedes models are often located very close to the exhaust, leading to melted pipes or inaccurate readings from heat cycles. Boost pipe splits are also a common cause of limp mode.",
    models: ["2.0L Diesel", "2.2L Diesel", "3.0L V6", "Vito", "GLA Models"]
  },
  {
    brand: "Land Rover / Jaguar / Range Rover",
    issue: "2.0L Ingenium Engine Issues",
    description: "Common symptoms include increased oil/fuel consumption, limp mode, and failed regeneration. The 2.0L Ingenium engine is particularly sensitive to DPF soot loading.",
    models: ["Discovery 3/4/Sport", "Freelander 2", "Range Rover Evoque/Sport/Velar", "Jaguar F-Pace/E-Pace"]
  },
  {
    brand: "BMW / Mini",
    issue: "Glow Plug & Pressure Sensor Errors",
    description: "Faulty glow plugs are the most common cause of DPF blockage in BMWs, as they are required for the regeneration process. We understand the specific test conditions required for BMW natural cycles.",
    models: ["1/2/3/4 Series", "X1", "X5", "Mini Countryman/One/Cooper"]
  },
  {
    brand: "Mazda",
    issue: "Extreme Soot Loading",
    description: "Mazdas often arrive with soot levels at maximum capacity. Issues are frequently found with fuel injectors and exhaust temperature sensors.",
    models: ["Mazda 5", "Mazda 6", "Mazda CX-5"]
  }
];

const regenerationFactors = [
  { title: "Glow Plugs", detail: "Turned on during regeneration; failure prevents the process." },
  { title: "Thermostat", detail: "If broken, engine won't reach optimal temp for regeneration." },
  { title: "Lambda Sensor", detail: "Part of the emissions system; damage affects results." },
  { title: "Short Journeys", detail: "Low speeds prevent engine from reaching working temperature." },
  { title: "Low Revs", detail: "Engine warms up too slowly, interrupting the burn cycle." },
  { title: "Wrong Oil", detail: "Requires specific mid-SAPS or low-SAPS engine oil." },
  { title: "EGR Valve", detail: "Clogging causes excessive soot accumulation." },
  { title: "Additive Tank", detail: "Empty tanks compromise the entire regeneration process." }
];

export default function DPFInfo() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">TECHNICAL EXPERTISE</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 uppercase">
            DPF SPECIALIST <br />
            <span className="text-gradient">INFORMATION</span>
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-3xl leading-relaxed">
            Your vehicle's Diesel Particulate Filter (DPF) is critical for emissions and performance. As trusted specialists, we provide the deep technical knowledge required to fix issues that standard garages often misdiagnose.
          </p>
        </div>

        {/* Complexity Section */}
        <div className="glass-card p-12 md:p-20 rounded-3xl mb-24 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8 uppercase tracking-tight">The Complexity of DPF Systems</h2>
              <p className="text-brand-muted mb-6 leading-relaxed">
                Many garages suggest replacing the DPF because they don't have the time or specialized knowledge to diagnose the root cause. A DPF isn't just a "box of soot"—it's a complex system with oxidation catalysts, NOx converters, and multiple sensors.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <ShieldAlert className="text-brand-blue shrink-0" size={24} />
                  <p className="text-sm text-white/80"><strong>WARNING:</strong> Never power-wash or jet-wash your DPF. This can cause irrevocable damage to the internal precious metal coatings.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-2xl text-center border border-white/5">
                <span className="text-brand-blue font-display font-bold text-3xl block mb-2">8+</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-muted">Sensors per System</span>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center border border-white/5">
                <span className="text-brand-blue font-display font-bold text-3xl block mb-2">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-muted">Diagnostic Accuracy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Specifics */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter uppercase mb-12">Manufacturer Specific Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandInfo.map((item) => (
              <motion.div
                key={item.brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Car className="text-brand-blue" size={24} />
                  <h3 className="text-xl font-display font-bold uppercase">{item.brand}</h3>
                </div>
                <div className="mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-brand-blue uppercase block mb-1">Common Issue</span>
                  <p className="text-white font-bold text-sm">{item.issue}</p>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-muted uppercase block mb-2">Affected Models</span>
                  <div className="flex flex-wrap gap-2">
                    {item.models.map(model => (
                      <span key={model} className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/10 text-white/60">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Weak Link */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="glass-card p-12 rounded-3xl border border-brand-blue/20">
            <Zap className="text-brand-blue mb-6" size={40} />
            <h3 className="text-3xl font-display font-bold mb-6 uppercase">The Differential Pressure Sensor</h3>
            <p className="text-brand-muted leading-relaxed mb-6">
              This is the "Weak Link" in most DPF systems. It relates pressure differentiation data back to the ECU. Without this data, the DPF will never regenerate itself.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8">
              Once soot loading passes 65%, the ECU won't allow regeneration due to fire risk. At this point, we perform a "2-pronged attack": we clean the DPF to reduce soot, then run a complete regeneration cycle to satisfy the ECU.
            </p>
            <Link to="/contact" className="inline-flex items-center text-brand-blue font-bold uppercase tracking-widest text-sm hover:gap-2 transition-all">
              GET A DIAGNOSTIC QUOTE <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-8">Regeneration Blockers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {regenerationFactors.map(factor => (
                <div key={factor.title} className="glass-card p-6 rounded-2xl border border-white/5">
                  <h4 className="text-brand-blue font-bold text-sm mb-2 uppercase">{factor.title}</h4>
                  <p className="text-brand-muted text-xs leading-relaxed">{factor.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Warning Lights */}
        <div className="bg-brand-gray p-12 md:p-20 rounded-3xl text-center">
          <AlertTriangle className="text-brand-blue mx-auto mb-8" size={64} />
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 uppercase">Common Warning Lights</h2>
          <p className="text-brand-muted text-lg max-w-3xl mx-auto mb-12">
            If you see a DPF symbol, a yellow coil, or your car enters "Limp Mode," don't panic. We deal with these daily. Why pay a garage hundreds to guess at the problem? Call us first and get the job done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/booking" className="bg-brand-blue hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold transition-all">
              BOOK DPF ASSESSMENT
            </Link>
            <Link to="/contact" className="border border-white/20 hover:bg-white/5 text-white px-12 py-5 rounded-full font-bold transition-all">
              CONTACT A SPECIALIST
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
