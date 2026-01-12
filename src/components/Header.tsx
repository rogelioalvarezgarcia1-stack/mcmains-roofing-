import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      className="absolute top-0 left-0 right-0 z-50 py-4 md:py-6 px-4 bg-gradient-to-b from-black/50 to-transparent"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-2 md:gap-6">
        <motion.div
          className="flex items-center space-x-2 md:space-x-4 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl px-3 py-2 md:px-4 md:py-3 border border-white/20"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
        >
          <motion.img
            src="https://static.wixstatic.com/media/e1b2a4_f4a320fec94a4f97aa9c048c904b1c3d~mv2.png"
            alt="McMains Roofing Logo"
            className="h-10 md:h-16 w-auto"
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="text-white border-l border-white/30 pl-2 md:pl-4">
            <motion.div
              className="font-bold text-sm md:text-2xl tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              McMains Roofing
            </motion.div>
            <motion.div
              className="text-[10px] md:text-sm opacity-90 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Est. 1996
            </motion.div>
          </div>
        </motion.div>
        <motion.a
          href="tel:2538451244"
          className="bg-[#F1C40F] hover:bg-white text-[#0B0B0C] px-4 py-2 md:px-8 md:py-4 rounded-lg md:rounded-xl flex items-center space-x-2 md:space-x-3 transition-all font-bold text-sm md:text-lg whitespace-nowrap shadow-lg hover:shadow-xl"
          initial={{ x: 50, opacity: 0, scale: 0.8 }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
            boxShadow: [
              "0 10px 30px rgba(241, 196, 15, 0.3)",
              "0 10px 40px rgba(241, 196, 15, 0.5)",
              "0 10px 30px rgba(241, 196, 15, 0.3)",
            ],
          }}
          transition={{
            x: { duration: 0.6, delay: 0.3, type: "spring", bounce: 0.5 },
            opacity: { duration: 0.6, delay: 0.3 },
            scale: { duration: 0.6, delay: 0.3 },
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Phone size={18} className="md:hidden" />
            <Phone size={22} className="hidden md:block" />
          </motion.div>
          <span className="hidden sm:inline">(253) 845-1244</span>
          <span className="sm:hidden">Call Now</span>
        </motion.a>
      </div>
    </motion.header>
  );
}
