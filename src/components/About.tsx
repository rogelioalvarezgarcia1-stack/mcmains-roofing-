import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              src="https://static.wixstatic.com/media/e1b2a4_d0f6c949e837428e8a0fe7501eef4530~mv2.jpg"
              alt="McMains Roofing work 1"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
            <motion.img
              src="https://static.wixstatic.com/media/e1b2a4_db5d1b96b2ed4cae820f55bece8d0ad9~mv2.jpg"
              alt="McMains Roofing work 2"
              className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            />
            <motion.img
              src="https://static.wixstatic.com/media/e1b2a4_644839af7f744c3da35c4c4d7b772ebe~mv2.jpg"
              alt="McMains Roofing work 3"
              className="rounded-lg shadow-lg w-full h-64 object-cover -mt-8"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
            <motion.img
              src="https://static.wixstatic.com/media/e1b2a4_1d91947f2e944b18996dd1ab12b449ee~mv2.jpg"
              alt="McMains Roofing work 4"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="w-1 h-12 bg-[#F1C40F]"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <h2 className="text-4xl font-bold">ABOUT MCMAINS ROOFING</h2>
            </motion.div>

            <motion.p
              className="text-gray-700 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              At McMains Roofing, we pride ourselves on quality craftsmanship and a wide range of roofing solutions.
              We've been serving the Puyallup area and surrounding Pierce County communities since 1996 with a mission
              to protect homes like yours using trusted materials and experienced installers.
            </motion.p>

            <motion.p
              className="text-gray-700 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              We proudly partner with local suppliers and hire only local crews, keeping jobs and materials in Washington.
              No out-of-state subs, no shortcuts, just honest work by people who live under the same skies.
            </motion.p>

            <motion.div
              className="bg-[#F8F9FA] border-l-4 border-[#F1C40F] p-6 mb-6"
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
                >
                  <Award className="text-[#F1C40F]" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold">FINANCING IS AVAILABLE!</h3>
              </div>
              <a href="#estimate" className="text-[#F1C40F] font-semibold hover:text-[#D4A017]">
                Learn more →
              </a>
            </motion.div>

            <motion.p
              className="text-gray-600 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Get in touch with us today to learn more.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
