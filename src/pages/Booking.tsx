import { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Check, ChevronRight, Calendar, User, ShieldCheck } from 'lucide-react';

const bookingServices = [
  {
    id: 'dpf-clean',
    title: "DPF CLEANING",
    price: 199,
    duration: "2-4 HOURS",
    description: "Full chemical clean and forced regeneration to restore performance.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 'adblue-fix',
    title: "ADBLUE SOLUTION",
    price: 149,
    duration: "1-2 HOURS",
    description: "Expert diagnostics and repair for AdBlue system faults.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 'remap',
    title: "STAGE 1 REMAP",
    price: 249,
    duration: "2-3 HOURS",
    description: "Performance and economy optimization for your engine.",
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 'full-valet',
    title: "MOBILE SERVICE",
    price: 85,
    duration: "VARIES",
    description: "General vehicle maintenance and mobile mechanic services.",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const currentService = bookingServices.find(s => s.id === selectedService);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div>
            <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">RESERVATION PORTAL</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase">
              SCHEDULE YOUR <br />
              <span className="text-brand-blue">PRECISION DETAIL.</span>
            </h1>
          </div>
          
          <div className="flex gap-8 border-b border-white/10 pb-4">
            <div className={`flex flex-col gap-1 ${step === 1 ? 'opacity-100' : 'opacity-40'}`}>
              <span className="text-[10px] font-bold tracking-widest uppercase">01 SERVICE</span>
              <div className={`h-1 w-full bg-brand-blue ${step === 1 ? 'block' : 'hidden'}`} />
            </div>
            <div className={`flex flex-col gap-1 ${step === 2 ? 'opacity-100' : 'opacity-40'}`}>
              <span className="text-[10px] font-bold tracking-widest uppercase">02 SCHEDULE</span>
              <div className={`h-1 w-full bg-brand-blue ${step === 2 ? 'block' : 'hidden'}`} />
            </div>
            <div className={`flex flex-col gap-1 ${step === 3 ? 'opacity-100' : 'opacity-40'}`}>
              <span className="text-[10px] font-bold tracking-widest uppercase">03 IDENTITY</span>
              <div className={`h-1 w-full bg-brand-blue ${step === 3 ? 'block' : 'hidden'}`} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bookingServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`relative text-left rounded-3xl overflow-hidden transition-all duration-300 border-2 ${
                      selectedService === service.id ? 'border-brand-blue' : 'border-transparent'
                    }`}
                  >
                    <div className="aspect-video relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover opacity-60"
                        referrerPolicy="no-referrer"
                      />
                      {selectedService === service.id && (
                        <div className="absolute top-4 right-4 bg-brand-blue text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                          SELECTED
                        </div>
                      )}
                    </div>
                    <div className="p-6 glass-card">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-display font-bold">{service.title}</h3>
                        <span className="text-brand-blue font-bold">£{service.price}+</span>
                      </div>
                      <p className="text-brand-muted text-sm mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex items-center gap-2 text-brand-muted text-[10px] font-bold tracking-widest uppercase">
                        <Clock size={12} /> {service.duration} DURATION
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="glass-card p-12 rounded-3xl text-center">
                <Calendar size={48} className="text-brand-blue mx-auto mb-6" />
                <h2 className="text-2xl font-display font-bold mb-4">SELECT DATE & TIME</h2>
                <p className="text-brand-muted mb-8">Please choose a preferred date for your mobile service.</p>
                <div className="grid grid-cols-7 gap-2 mb-8">
                  {[...Array(31)].map((_, i) => (
                    <button key={i} className="aspect-square flex items-center justify-center rounded-lg hover:bg-brand-blue hover:text-white transition-colors text-sm border border-white/5">
                      {i + 1}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {['09:00', '11:00', '14:00', '16:00'].map(time => (
                    <button key={time} className="py-3 rounded-xl border border-white/10 hover:border-brand-blue transition-colors text-sm font-bold">
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="glass-card p-12 rounded-3xl">
                <User size={48} className="text-brand-blue mb-6" />
                <h2 className="text-2xl font-display font-bold mb-8">YOUR INFORMATION</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="First Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue" />
                    <input type="text" placeholder="Last Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue" />
                  <textarea placeholder="Vehicle Make, Model & Registration" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue resize-none" />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl sticky top-32">
              <h3 className="text-xs font-bold tracking-widest uppercase text-brand-muted mb-8">Booking Summary</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-muted mb-1">Service</p>
                    <p className="text-white font-bold">{currentService?.title || 'Not selected'}</p>
                  </div>
                  <p className="text-white font-bold">£{currentService?.price || 0}</p>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-muted mb-1">Date & Time</p>
                    <p className="text-white font-bold">To be selected...</p>
                  </div>
                  <Calendar size={14} className="text-brand-muted" />
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-muted mb-1">Est. Total</p>
                    <p className="text-3xl font-display font-bold text-white">£{currentService?.price || 0}.00</p>
                  </div>
                  <span className="text-[10px] text-brand-muted uppercase tracking-widest mb-1">Excl. VAT</span>
                </div>
              </div>

              <button 
                disabled={!selectedService}
                onClick={() => setStep(prev => Math.min(prev + 1, 3))}
                className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
                  selectedService 
                    ? 'bg-brand-blue text-white hover:bg-blue-600' 
                    : 'bg-white/5 text-white/20 cursor-not-allowed'
                }`}
              >
                {step === 3 ? 'CONFIRM BOOKING' : 'CONTINUE TO NEXT STEP'} <ChevronRight size={18} />
              </button>
              
              <p className="text-[10px] text-brand-muted text-center mt-6 leading-relaxed">
                Pricing may vary based on vehicle size and condition upon physical inspection.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <ShieldCheck className="text-brand-blue" size={24} />
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-white">SECURE RESERVATION</p>
                <p className="text-[10px] text-brand-muted">Your data is protected by industry-standard encryption.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
