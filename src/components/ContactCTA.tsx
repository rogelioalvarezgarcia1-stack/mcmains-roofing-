import { Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#0A0F29] to-[#0B0B0C]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              CONTACT US FOR AN ESTIMATE TODAY
            </motion.h2>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="tel:2538451244"
                className="bg-[#F1C40F] hover:bg-[#2D2D2F] text-[#0B0B0C] hover:text-[#F1C40F] px-8 py-4 rounded-lg flex items-center space-x-2 transition-colors font-semibold text-lg"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", bounce: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                <span>(253) 845-1244</span>
              </motion.a>
              <motion.a
                href="#estimate"
                className="bg-[#F1C40F] hover:bg-[#2D2D2F] text-[#0B0B0C] hover:text-[#F1C40F] px-8 py-4 rounded-lg flex items-center space-x-2 transition-colors font-semibold text-lg"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring", bounce: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={20} />
                <span>SCHEDULE NOW</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <img
              src="https://static.wixstatic.com/media/e1b2a4_e0bb29d6c6c0460d868a311a250c180d~mv2.jpg"
              alt="McMains Roofing work truck"
              className="w-full h-80 object-cover scale-110"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
