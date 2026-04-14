import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer Dpf cleaning, Vehicle remapping, solution maps, vehicle servicing, and wet belt packages using top-end quality products for not just the best results but guaranteed to last quality."
  },
  {
    question: "What remap would be best for me?",
    answer: "A vehicle remap is very unique to the customer's time, issues & what they would ideally like to get from the remap. Whether that's a stage 1 remap for performance or economy for better fuel use, or if you're having several issues like DPF or AdBlue and want a vehicle solution to save time and money in the future and help the lifespan of the vehicle, we have various solutions tailored to help every individual."
  },
  {
    question: "What makes your services unique?",
    answer: "We use top-end quality products to ensure customer satisfaction and 100% confidence in first-time fixes."
  },
  {
    question: "Can you save me money or give me the best price?",
    answer: "We work to everyone's budget and at a timeframe that suits both parties. We can help save money by choosing the correct parts or advising what the best solution would be."
  },
  {
    question: "Do you provide vehicle diagnostics?",
    answer: "Yes, we offer vehicle diagnostics as part of our comprehensive servicing and cleaning packages."
  },
  {
    question: "Do you offer mobile services?",
    answer: "Yes, we offer mobile services for added convenience to our customers, covering a vast amount of work carried out on your doorstep from basic services to engine work."
  },
  {
    question: "Where are you located?",
    answer: "We are located in Tamworth, England, United Kingdom. We cover the surrounding area mainly within the Staffordshire region."
  },
  {
    question: "Do you offer warranty on your services?",
    answer: "Yes, we provide warranty on our services to ensure customer satisfaction."
  },
  {
    question: "How can I contact you?",
    answer: "You can contact us through our website, phone, WhatsApp, Facebook, Instagram or via Google for any inquiries or to schedule a service appointment."
  },
  {
    question: "How long does Dpf cleaning take?",
    answer: "The duration of Dpf cleaning can vary depending on the vehicle and the extent of cleaning required."
  },
  {
    question: "Are you able to fix the issue straight away?",
    answer: "We always carry out a full check of the problem and depending on what the issue is we can fix on the spot or rearrange for an appropriate appointment to complete all work and to have parts readily available."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including cash, credit/debit cards."
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
