import { motion } from 'motion/react';
import { Shield, Target, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">OUR STORY</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 uppercase">
            DRIVEN BY <br />
            <span className="text-gradient">EXCELLENCE</span>
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-2xl leading-relaxed">
            At Tamworth DPF & Vehicle Services, we bring top-tier DPF, AdBlue, and general vehicle services directly to you. Experience unparalleled convenience and quality with our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="aspect-video rounded-3xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=1000" 
              alt="Workshop" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-blue/10" />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold mb-6 uppercase tracking-tight">Your Trusted Mobile Mechanic</h2>
            <p className="text-brand-muted mb-6 leading-relaxed">
              Life in Tamworth can be hectic. Our mobile mechanic service is designed to fit seamlessly into your schedule, providing expert care without the hassle of a garage visit. Whether you're at home, work, or out shopping, we bring the garage to you.
            </p>
            <p className="text-brand-muted mb-8 leading-relaxed">
              We pride ourselves on using only top-end quality products to deliver the best service possible. Our commitment to excellence ensures complete customer satisfaction and 100% confidence in first-time fixes.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Award className="text-brand-blue" size={20} />
                <span className="text-xs font-bold tracking-widest uppercase">Certified Techs</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-brand-blue" size={20} />
                <span className="text-xs font-bold tracking-widest uppercase">Fully Insured</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-10 rounded-3xl">
            <Target className="text-brand-blue mb-6" size={32} />
            <h3 className="text-xl font-display font-bold mb-4 uppercase">Our Mission</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              To provide the most convenient and high-quality vehicle maintenance services in Staffordshire, ensuring every client drives with confidence.
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <Users className="text-brand-blue mb-6" size={32} />
            <h3 className="text-xl font-display font-bold mb-4 uppercase">Our Team</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              A collective of specialist mechanics with decades of experience in DPF systems, engine remapping, and advanced vehicle diagnostics.
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <Shield className="text-brand-blue mb-6" size={32} />
            <h3 className="text-xl font-display font-bold mb-4 uppercase">Our Promise</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              We never compromise on quality. Every job is performed with the best products and tools available on the market today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
