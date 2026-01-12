import { Shield, Users, DollarSign, Award, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: Shield,
    title: '25-Year Workmanship Warranty',
    description: 'Most roofers stop at 5–10 years. We back your roof for 25.',
  },
  {
    icon: Users,
    title: 'Local Products & Crews',
    description: '100% Washington-sourced and installed — no subcontractors.',
  },
  {
    icon: DollarSign,
    title: '$250 Referral Bonus',
    description: 'Know someone who needs a roof? Send them our way and get paid.',
  },
  {
    icon: Award,
    title: '5% Discount for Veterans & Seniors',
    description: "A thank-you to those who've built our community.",
  },
  {
    icon: CheckCircle,
    title: 'Fully Licensed & Insured',
    description: "We've been protecting homes the right way since 1996.",
  },
  {
    icon: Star,
    title: 'A+ BBB Rating with 5-Star Reviews',
    description: 'Rated and reviewed by local homeowners you can relate to.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-1 h-12 bg-[#F1C40F]" />
              <h2 className="text-4xl font-bold">Why Homeowners Choose McMains Roofing</h2>
            </div>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-[#F8F9FA] rounded-lg flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring", bounce: 0.6 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <reason.icon className="text-[#F1C40F]" size={24} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  >
                    <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.02, rotate: 1 }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-[#F1C40F] to-[#D4A017] rounded-lg opacity-20 blur-xl"
              animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src="https://static.wixstatic.com/media/e1b2a4_e6baeeae3eed472fb4faa0a82d1d37a2~mv2.jpg"
              alt="McMains Roofing professional"
              className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
