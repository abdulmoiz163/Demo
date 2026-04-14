import { motion } from 'motion/react';
import { Shield, Target, Users, Award, CheckCircle2, TrendingUp, Wrench, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">ABOUT US</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 uppercase">
            SMALL FAMILY <br />
            <span className="text-gradient">OWNED BUSINESS</span>
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-3xl leading-relaxed">
            We got started from the wanting and need to continue growing. Having worked at dealer level, I felt like you get to a certain point where everyday is the same. We went mobile because we want to be out in the open exploring new areas, meeting new clients and making the most successful mobile mechanic business we possibly can.
          </p>
        </div>

        {/* Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="aspect-video rounded-3xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional Mechanic Tools" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-blue/10" />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold mb-6 uppercase tracking-tight">Our Experience</h2>
            <p className="text-brand-muted mb-6 leading-relaxed">
              At the heart of everything we do lies our experience. With years of dedicated practice and commitment at dealer level, we’ve built a solid foundation of knowledge and expertise. Our journey has been shaped by collaborating with partners, overcoming challenges and continuously evolving to stay ahead.
            </p>
            <p className="text-brand-muted mb-8 leading-relaxed">
              We are always keeping up to date with training, knowledge and equipment to make sure we can always fix newer vehicles. Our training has been completed through organizations like <strong>IMI</strong> and <strong>Mechanic Mindset</strong> to give us the best knowledge for every task.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Award className="text-brand-blue" size={20} />
                <span className="text-xs font-bold tracking-widest uppercase">IMI Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-brand-blue" size={20} />
                <span className="text-xs font-bold tracking-widest uppercase">Dealer Level Expertise</span>
              </div>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="glass-card p-10 rounded-3xl">
            <Target className="text-brand-blue mb-6" size={32} />
            <h3 className="text-xl font-display font-bold mb-4 uppercase">Our Goals</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              Our primary goal is to bring professional expertise directly to your doorstep, saving you time and eliminating the stress of traditional garages. We aim to build long-lasting relationships based on trust and exceptional service.
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <TrendingUp className="text-brand-blue mb-6" size={32} />
            <h3 className="text-xl font-display font-bold mb-4 uppercase">Transparency</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              By focusing on transparency and efficiency, we ensure you can get back on the road quickly and safely, with total confidence in the quality of our work.
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <Wrench className="text-brand-blue mb-6" size={32} />
            <h3 className="text-xl font-display font-bold mb-4 uppercase">Solutions</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              We are here to give the best but most affordable experience, overcoming all obstacles from basic services to intense diagnostic work to create only a solution.
            </p>
          </div>
        </div>

        {/* DDTSB Section */}
        <div className="glass-card p-12 md:p-20 rounded-3xl relative overflow-hidden mb-24">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">ADVANCED DIAGNOSTICS</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 uppercase">POWERED BY DDTSB</h2>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                We use DDTSB to access thousands of data points and user knowledge across the networking area. This ensures a 100% rate for testing and procedures, helping us get to the problematic area quickly and effectively while keeping your costs down.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['DPFs', 'Adblue Faults', 'Patfluid Faults', 'Diagnostic Faults'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 size={16} className="text-brand-blue" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="aspect-square rounded-full border-2 border-brand-blue/20 flex items-center justify-center p-12">
                <div className="text-center">
                  <span className="text-6xl font-display font-bold text-brand-blue block">100%</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-white">TESTING ACCURACY</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promotional Offer */}
        <div className="bg-brand-blue p-12 rounded-3xl text-center">
          <Sparkles className="text-white mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-display font-bold text-white mb-6 uppercase tracking-tighter">Promotional Offer</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Don't miss out on the chance to save while enjoying the quality and service you love. Keep an eye on this space for the latest updates and grab these amazing deals while they last!
          </p>
          <a href="/contact" className="bg-white text-brand-blue hover:bg-brand-dark hover:text-white px-10 py-4 rounded-full font-bold transition-all inline-block">
            INQUIRE ABOUT DEALS
          </a>
        </div>
      </div>
    </div>
  );
}
