import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Why should I get my car serviced?",
    answer: "Regular servicing improves road safety, reduces running costs, increases car value, reduces the likelihood of breakdowns, and protects your warranty."
  },
  {
    question: "What is DPF cleaning?",
    answer: "DPF (Diesel Particulate Filter) cleaning is a process that removes soot and ash buildup from your diesel engine's exhaust filter, restoring performance and preventing expensive replacements."
  },
  {
    question: "How do I know if my cambelt needs changing?",
    answer: "Common signs include unusual engine noise, the car not starting, or reaching the manufacturer's recommended mileage/time interval (usually every 60,000 to 100,000 miles)."
  },
  {
    question: "What is AdBlue and why do I need it?",
    answer: "AdBlue is a fluid used in modern diesel engines to reduce harmful nitrogen oxide emissions. If your AdBlue system fails or runs dry, your vehicle may enter 'limp mode' or refuse to start."
  },
  {
    question: "Is your service really mobile?",
    answer: "Yes! We bring all the necessary equipment to your home, workplace, or any convenient location within our 30-mile service radius around Tamworth."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-brand-blue transition-colors"
      >
        <span className="text-lg font-display font-bold uppercase tracking-tight">{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-muted leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-blue font-display font-semibold tracking-widest text-xs uppercase mb-4 block">KNOWLEDGE BASE</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 uppercase">FREQUENTLY <br /> ASKED QUESTIONS</h1>
          <p className="text-brand-muted text-lg leading-relaxed">
            Everything you need to know about our specialist DPF and vehicle services.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12">
          {faqs.map((faq, index) => (
            <div key={index}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-muted mb-6">Still have questions?</p>
          <a href="/contact" className="text-brand-blue font-bold hover:underline">Get in touch with our specialists</a>
        </div>
      </div>
    </div>
  );
}
