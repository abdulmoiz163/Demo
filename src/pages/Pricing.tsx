import { motion } from 'motion/react';
import { MapPin, Tag, Info, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingData = [
  { service: "Dpf assessment", price: "£50" },
  { service: "Dpf cleaning", price: "£150" },
  { service: "Dpf replacement", price: "£300" },
  { service: "Vehicle Diagnostics", price: "£50" },
  { service: "Carbon Cleaning", price: "£80" },
  { service: "Basic service", price: "£80" },
  { service: "Interim service", price: "£120" },
  { service: "Full service package", price: "£200" },
  { service: "Fault finding", price: "£120" },
  { service: "Cambelt & waterpump", price: "£400" },
  { service: "Wetbelt packages", price: "£600" },
  { service: "Exhaust System Repair", price: "£150" },
  { service: "Brake Pad Replacement", price: "£60" },
  { service: "Disc & pads replacement", price: "£150" },
  { service: "Pat fluid + adblue fault", price: "£50" },
  { service: "Pat fluid refill", price: "£100" },
  { service: "Suspension work", price: "£80" },
  { service: "Parts replace", price: "£100" },
  { service: "Alternator replacement", price: "£150" },
  { service: "Starter motor replacement", price: "£50" },
  { service: "Locking wheel nut removal", price: "£50", note: "welding price differs" },
  { service: "Welding", price: "£100" },
  { service: "Adblue fault finding", price: "£50" },
  { service: "Dpf gutting", price: "£150" },
  { service: "MOT failures", price: "£50" },
  { service: "Vehicle remaps", price: "£200" },
];

const coverageAreas = [
  "Tamworth", "Lichfield", "Polesworth", "Atherstone", "Nuneaton",
  "Burntwood", "Cannock", "Burton upon Trent", "Swadlincote", "Rugeley",
  "Sutton Coldfield", "Hinckley", "Fradley", "Barton under Needwood", "Brownhills"
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">TRANSPARENT PRICING</span>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 uppercase">
            PRICE & <br />
            <span className="text-gradient">COVERAGE</span>
          </h1>
          <p className="text-brand-muted text-lg md:text-xl max-w-3xl leading-relaxed">
            We believe in honest, upfront pricing with no hidden costs. Our mobile service covers a vast area of Staffordshire and surrounding regions, bringing expert care directly to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Pricing Table */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-3xl overflow-hidden border border-white/5">
              <div className="p-8 border-b border-white/5 bg-white/5">
                <div className="flex items-center gap-3">
                  <Tag className="text-brand-blue" size={24} />
                  <h2 className="text-2xl font-display font-bold uppercase tracking-tight">Service Price List</h2>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-brand-muted text-[10px] uppercase tracking-widest border-b border-white/5">
                      <th className="px-8 py-4 font-semibold">Product / Service</th>
                      <th className="px-8 py-4 font-semibold text-right">Price (From)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {pricingData.map((item, index) => (
                      <tr key={index} className="hover:bg-white/5 transition-colors group">
                        <td className="px-8 py-4">
                          <span className="text-white font-medium block">{item.service}</span>
                          {item.note && (
                            <span className="text-[10px] text-brand-muted uppercase tracking-wider">{item.note}</span>
                          )}
                        </td>
                        <td className="px-8 py-4 text-right">
                          <span className="text-brand-blue font-display font-bold text-lg">{item.price}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-8 bg-brand-blue/5 border-t border-white/5">
                <div className="flex items-start gap-4">
                  <Info className="text-brand-blue shrink-0" size={20} />
                  <p className="text-xs text-brand-muted leading-relaxed">
                    * All prices are starting figures and may vary based on vehicle make, model, and specific requirements. All cleans cover a basic area of 10 miles; any further may incur extra costs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Area */}
          <div className="space-y-8">
            <div className="glass-card p-10 rounded-3xl border border-brand-blue/20">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="text-brand-blue" size={24} />
                <h2 className="text-2xl font-display font-bold uppercase tracking-tight">Coverage Area</h2>
              </div>
              <p className="text-brand-muted text-sm mb-8 leading-relaxed">
                We cover a vast area of Staffordshire and surrounding locations. If your area isn't listed, please get in touch for a quote.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {coverageAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3 text-sm text-white/80 py-2 border-b border-white/5 last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                    {area}
                  </div>
                ))}
                <div className="pt-4">
                  <span className="text-brand-blue font-bold text-sm uppercase tracking-widest">+ More Areas</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 rounded-3xl bg-brand-blue">
              <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">Need a Quote?</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed">
                Get in touch today for all individual quotes and area availability. We're here to help.
              </p>
              <Link to="/contact" className="bg-white text-brand-blue hover:bg-brand-dark hover:text-white px-8 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2 text-sm">
                CONTACT US <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
