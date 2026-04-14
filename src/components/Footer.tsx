import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-gray border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <div className="h-20 w-20 rounded-full overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dqffphhit/image/upload/v1776098801/419722053_122095329536191507_3318283306620550307_n_aol58t.jpg" 
                  alt="Tamworth DPF Logo" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed mb-8">
              Precision-engineered automotive care for the discerning owner. We treat every vehicle like a masterpiece, delivering top-tier DPF and AdBlue solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61555745214652#" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/Dpfcleanstaffordshire" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=7310536906" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-blue transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-brand-muted hover:text-white text-sm transition-colors">Services</Link></li>
              <li><Link to="/remapping" className="text-brand-muted hover:text-white text-sm transition-colors">Vehicle Remapping</Link></li>
              <li><Link to="/pricing" className="text-brand-muted hover:text-white text-sm transition-colors">Price & Coverage</Link></li>
              <li><Link to="/dpf-info" className="text-brand-muted hover:text-white text-sm transition-colors">DPF Specialist Info</Link></li>
              <li><Link to="/about" className="text-brand-muted hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-brand-muted hover:text-white text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-brand-muted hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6 text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-brand-muted hover:text-white text-sm transition-colors">DPF Cleaning</Link></li>
              <li><Link to="/services" className="text-brand-muted hover:text-white text-sm transition-colors">AdBlue Solutions</Link></li>
              <li><Link to="/services" className="text-brand-muted hover:text-white text-sm transition-colors">Vehicle Remapping</Link></li>
              <li><Link to="/services" className="text-brand-muted hover:text-white text-sm transition-colors">Mobile Mechanic</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6 text-sm tracking-wider uppercase">Location</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-brand-muted text-sm">
                <MapPin size={18} className="text-brand-blue shrink-0" />
                <span>Tamworth, Staffordshire & surrounding areas, United Kingdom</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-muted text-sm">
                <Phone size={18} className="text-brand-blue shrink-0" />
                <span>+44 7310 536906</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-muted text-sm">
                <Mail size={18} className="text-brand-blue shrink-0" />
                <span>staffordshire.dpf@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-brand-muted uppercase tracking-widest">
          <p>© 2024 TAMWORTH DPF & VEHICLE SERVICES. PRECISION IN EVERY DETAIL.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
