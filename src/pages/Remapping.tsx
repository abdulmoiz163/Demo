import { motion } from 'motion/react';
import { Cpu, Zap, Fuel, Activity, ShieldCheck, Trash2, Gauge, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Remapping() {
  const stage1Benefits = [
    { title: "Increased Power & Torque", detail: "Boosts horsepower and torque for better acceleration and pulling power." },
    { title: "Better Fuel Economy", detail: "Optimised fuel mapping means the engine runs more efficiently." },
    { title: "Improved Throttle Response", detail: "Faster response when you press the accelerator for a dynamic drive." },
    { title: "Higher Top Speed", detail: "Enables the car to reach higher speeds more smoothly and consistently." },
    { title: "Reduced Emissions", detail: "Optimising combustion makes the vehicle more environmentally friendly." }
  ];

  const adblueBenefits = [
    { title: "Zero Repair Costs", detail: "Eliminate expensive pump, injector, and sensor failures." },
    { title: "Enhanced Performance", detail: "Improved throttle response and overall engine power." },
    { title: "Simplified Maintenance", detail: "No more tedious fluid top-ups or monitoring levels." },
    { title: "Immediate Savings", detail: "Save money on DEF purchases and unexpected repair bills." },
    { title: "Fuel Efficiency", detail: "Better combustion leads to more efficient fuel use." }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">PERFORMANCE TUNING</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 uppercase">
            VEHICLE <br />
            <span className="text-gradient">REMAPPING</span>
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-3xl leading-relaxed">
            Unlock your vehicle's full potential with our expert remapping services. We recalibrate your engine control unit (ECU) to safely improve efficiency, power, and overall driving experience.
          </p>
        </div>

        {/* Stage 1 Section */}
        <div className="glass-card p-12 md:p-20 rounded-3xl mb-24 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Cpu className="text-brand-blue" size={32} />
                <h2 className="text-4xl font-display font-bold uppercase tracking-tight">Stage 1 Maps</h2>
              </div>
              <p className="text-brand-muted mb-8 leading-relaxed">
                A Stage 1 remap is a software recalibration of the vehicle's ECU. We adjust key parameters to bring out the engine's true potential within safe limits.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Fuel className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Fuel Injection Timing</h4>
                    <p className="text-brand-muted text-xs">Optimises fuel delivery for a more efficient combustion process.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Zap className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Turbo Boost Pressure</h4>
                    <p className="text-brand-muted text-xs">Enhances turbocharger performance for additional safe power.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Activity className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">Ignition Timing</h4>
                    <p className="text-brand-muted text-xs">Adjusts the spark timing to further optimize the combustion cycle.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {stage1Benefits.map((benefit, i) => (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl border border-white/5"
                >
                  <h4 className="text-brand-blue font-bold text-sm mb-2 uppercase">{benefit.title}</h4>
                  <p className="text-brand-muted text-xs leading-relaxed">{benefit.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* DPF Delete Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="glass-card p-12 rounded-3xl border border-brand-blue/20">
            <Trash2 className="text-brand-blue mb-6" size={40} />
            <h3 className="text-3xl font-display font-bold mb-6 uppercase">DPF Deletes</h3>
            <p className="text-brand-muted leading-relaxed mb-6">
              A DPF delete is a popular upgrade that removes the restrictive particulate filter from the exhaust system. This allows the engine to breathe more freely, significantly improving performance and reliability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Improved Performance",
                "Better Fuel Economy",
                "Reduced Emissions",
                "Longer Engine Life",
                "Increased Torque",
                "No More Clogs"
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-white/80">
                  <CheckCircle2 size={14} className="text-brand-blue" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-brand-muted text-sm italic">
              *Note: DPF deletes are intended for off-road or track use in certain jurisdictions.
            </p>
          </div>
          <div className="space-y-8">
            <div className="glass-card p-10 rounded-3xl">
              <ShieldCheck className="text-brand-blue mb-6" size={32} />
              <h4 className="text-xl font-display font-bold mb-4 uppercase">Enhanced Reliability</h4>
              <p className="text-brand-muted text-sm leading-relaxed">
                DPFs are one of the most common sources of engine problems. By removing them, you eliminate a major potential failure point, reduce maintenance costs, and improve engine power.
              </p>
            </div>
            <div className="glass-card p-10 rounded-3xl">
              <TrendingUp className="text-brand-blue mb-6" size={32} />
              <h4 className="text-xl font-display font-bold mb-4 uppercase">Win-Win for Efficiency</h4>
              <p className="text-brand-muted text-sm leading-relaxed">
                By removing the restrictive filter, your engine runs more efficiently and uses up to 5% less fuel. It's a win-win for both your wallet and the engine's longevity.
              </p>
            </div>
          </div>
        </div>

        {/* AdBlue Removal Section */}
        <div className="glass-card p-12 md:p-20 rounded-3xl mb-24 bg-gradient-to-br from-brand-dark to-brand-blue/5">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">EMISSIONS SOLUTIONS</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 uppercase">ADBLUE REMOVAL</h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              AdBlue systems are intricate and susceptible to expensive failures. Our removal service, paired with a remap, eliminates these failure points and saves you thousands in long-term maintenance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adblueBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl border border-white/5 text-center"
              >
                <h4 className="text-white font-bold mb-3 uppercase tracking-tight">{benefit.title}</h4>
                <p className="text-brand-muted text-sm leading-relaxed">{benefit.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brand-blue p-12 md:p-20 rounded-3xl text-center">
          <Gauge className="text-white mx-auto mb-8" size={64} />
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 uppercase tracking-tighter">TRANSFORM YOUR DRIVE</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-12">
            Experience smoother drives, better throttle response, and an improved driving experience today. Get in touch to learn how our remapping can transform your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/booking" className="bg-white text-brand-blue hover:bg-brand-dark hover:text-white px-12 py-5 rounded-full font-bold transition-all">
              BOOK A REMAP
            </Link>
            <Link to="/contact" className="border border-white/20 hover:bg-white/5 text-white px-12 py-5 rounded-full font-bold transition-all">
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
