import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 uppercase">
            CONNECT <br />
            <span className="text-gradient">WITH US</span>
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-2xl leading-relaxed">
            Professional grade DPF cleaning and vehicle services for the automotive enthusiast. Get in touch for a quote or to book your mobile service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 glass-card p-8 md:p-12 rounded-3xl">
            <h2 className="text-2xl font-display font-bold mb-8 uppercase tracking-tight">Send an Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-brand-muted mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-brand-muted mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-brand-muted mb-2">Select Service</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none">
                  <option className="bg-brand-dark">DPF Cleaning</option>
                  <option className="bg-brand-dark">AdBlue Solutions</option>
                  <option className="bg-brand-dark">Vehicle Remapping</option>
                  <option className="bg-brand-dark">Mobile Mechanic</option>
                  <option className="bg-brand-dark">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-brand-muted mb-2">How can we help with your vehicle?</label>
                <textarea 
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none"
                  placeholder="Tell us about your vehicle and the issues you're experiencing..."
                />
              </div>

              <button className="w-full sm:w-auto bg-brand-blue hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2">
                SEND MESSAGE <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-6">Contact Channels</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Phone className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-muted mb-1">Call Us</p>
                    <p className="text-white font-bold">+44 7310 536906</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Mail className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-muted mb-1">Email</p>
                    <p className="text-white font-bold">staffordshire.dpf@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <a 
                    href="https://api.whatsapp.com/send?phone=7310536906" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group w-full"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/20 transition-colors">
                      <MessageSquare className="text-brand-blue" size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-brand-muted mb-1">WhatsApp</p>
                      <p className="text-white font-bold group-hover:text-brand-blue transition-colors">Chat with us</p>
                    </div>
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-muted mb-1">Service Area</p>
                    <p className="text-white font-bold leading-tight">Tamworth, Staffordshire & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-6">Service Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-muted">Monday - Friday</span>
                  <span className="text-white font-bold">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-muted">Saturday</span>
                  <span className="text-white font-bold">09:00 - 16:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-muted">Sunday</span>
                  <span className="text-brand-blue font-bold uppercase text-[10px] tracking-widest">By Appointment</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl flex justify-between items-center">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-muted">Follow Our Work</span>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61555745214652#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-blue transition-colors"><Facebook size={20} /></a>
                <a href="https://instagram.com/Dpfcleanstaffordshire" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-blue transition-colors"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 h-96 rounded-3xl overflow-hidden relative border border-white/10">
          <iframe 
            src="https://maps.google.com/maps?q=Tamworth,UK&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2) opacity(0.6)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Tamworth Service Area Map"
          ></iframe>
          <div className="absolute bottom-6 left-6">
            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold">TAMWORTH HQ</h4>
                <p className="text-xs text-brand-muted uppercase tracking-widest">MOBILE SERVICE RADIUS: 30 MILES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
