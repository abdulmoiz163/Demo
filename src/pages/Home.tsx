import { motion } from 'motion/react';
import { Shield, Zap, Clock, MapPin, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "DPF CLEAN STAFFORDSHIRE",
    price: "FROM £199",
    description: "Specialist DPF cleaning services to restore your vehicle's performance and efficiency, all done at your convenience.",
    duration: "2-4 HOURS",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "ADBLUE SPECIALIST",
    price: "FROM £149",
    description: "Expert AdBlue services to ensure your diesel vehicle runs cleanly and complies with emissions standards.",
    duration: "1-2 HOURS",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "VEHICLE REMAPPING",
    price: "FROM £249",
    description: "Unlock your vehicle's true potential with our professional remapping services for power and economy.",
    duration: "2-3 HOURS",
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "MOBILE MECHANIC TAMWORTH",
    price: "FROM £85",
    description: "Comprehensive mobile mechanic services for general repairs and maintenance, brought directly to your location.",
    duration: "VARIES",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=800"
  }
];

const testimonials = [
  {
    name: "James Sterling",
    role: "Local Business Owner",
    content: "The level of detail is obsessive. My van runs better than the day it left the showroom. Absolutely peerless service.",
    rating: 5
  },
  {
    name: "Elena Vance",
    role: "Commuter",
    content: "Their DPF cleaning is magic. The warning lights are gone and the engine feels so much smoother. I trust them with my entire fleet.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Car Enthusiast",
    content: "Professional, punctual, and highly skilled. They fixed a complex AdBlue issue that two other garages couldn't solve. Simply the best.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Car" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-brand-blue font-display font-semibold tracking-widest text-sm uppercase mb-4 block">
              TAMWORTH'S PREMIER MOBILE SERVICE
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
              YOUR TRUSTED <br />
              <span className="text-gradient">MOBILE MECHANIC.</span>
            </h1>
            <p className="text-brand-muted text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              At Dpf & Vehicle Services Tamworth, we bring top-tier DPF, AdBlue, and general vehicle services directly to you, whether you're at home, work, or out shopping. Experience unparalleled convenience and quality with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="bg-brand-blue hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold transition-all text-center">
                BOOK NOW
              </Link>
              <Link to="/services" className="border border-white/20 hover:bg-white/5 text-white px-10 py-4 rounded-full font-bold transition-all text-center">
                OUR SERVICES
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">CRAFTSMANSHIP</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">OUR SPECIALIST SERVICES</h2>
            </div>
            <p className="text-brand-muted max-w-md text-right hidden md:block">
              We offer a comprehensive range of mobile mechanic services, with a strong focus on DPF and AdBlue solutions. Our professional and friendly team is equipped to handle your vehicle's needs efficiently and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl glass-card h-80"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-1">{service.title}</h3>
                      <p className="text-brand-muted text-sm max-w-xs">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-brand-blue font-bold block">{service.price}</span>
                      <span className="text-brand-muted text-[10px] uppercase tracking-widest flex items-center justify-end gap-1">
                        <Clock size={10} /> {service.duration}
                      </span>
                    </div>
                  </div>
                  <Link to="/services" className="inline-flex items-center text-xs font-bold tracking-widest uppercase hover:text-brand-blue transition-colors">
                    LEARN MORE <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">EXCELLENCE DEFINED</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-12 leading-none">
                WHY CHOOSE <br />
                <span className="text-gradient">DPF & VEHICLE SERVICES?</span>
              </h2>
              
              <p className="text-brand-muted mb-12 leading-relaxed">
                We pride ourselves on using only top-end quality products to deliver the best service possible. Our commitment to excellence ensures complete customer satisfaction and 100% confidence in first-time fixes. We bring our expertise directly to you, offering convenience without compromising on quality.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Shield className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">CERTIFIED SPECIALISTS</h4>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      Industry-leading techniques and proprietary processes that exceed dealership standards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Zap className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">THE MACRO FOCUS</h4>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      We analyze vehicle systems with advanced diagnostics to reveal and fix every imperfection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">PREMIUM ONLY SOLUTIONS</h4>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      We use only top-end quality products to deliver the best service possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Mechanic at work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-8 rounded-2xl max-w-[240px]">
                <div className="text-4xl font-display font-bold text-brand-blue mb-1">100%</div>
                <p className="text-xs font-bold tracking-widest uppercase text-white">FIRST TIME FIX CONFIDENCE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Busy Lives & Specialist Care */}
      <section className="py-24 bg-brand-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-3xl"
            >
              <h3 className="text-3xl font-display font-bold mb-6 uppercase tracking-tight">Serving Busy Lives</h3>
              <p className="text-brand-muted leading-relaxed">
                Life in Tamworth can be hectic, whether you're a busy family, running a local business, or part of the younger generation on the go. Our mobile mechanic service is designed to fit seamlessly into your schedule, providing expert care without the hassle of a garage visit.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-3xl"
            >
              <h3 className="text-3xl font-display font-bold mb-6 uppercase tracking-tight">Specialist Care</h3>
              <p className="text-brand-muted leading-relaxed">
                From specific issues like DPF problems and remapping to addressing wet belts, we have the specialist knowledge and tools to provide precise, effective solutions. We're dedicated to getting your vehicle back to optimal performance with minimal disruption to your day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">THE INNER CIRCLE</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase">CLIENT SPOTLIGHT</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-brand-blue fill-brand-blue mr-1" />
                    ))}
                  </div>
                  <p className="text-lg italic text-white/90 leading-relaxed mb-8">
                    "{t.content}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center font-display font-bold text-brand-blue">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-brand-muted text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tighter">
            READY FOR PRECISION?
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            Join the elite circle of vehicle owners who demand nothing but the best. Book your mobile service today.
          </p>
          <Link to="/booking" className="bg-white text-brand-blue hover:bg-brand-dark hover:text-white px-12 py-5 rounded-full font-bold transition-all inline-block">
            SCHEDULE YOUR SERVICE
          </Link>
        </div>
      </section>
    </div>
  );
}
