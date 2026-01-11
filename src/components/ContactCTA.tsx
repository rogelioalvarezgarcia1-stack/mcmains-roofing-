import { Phone, Calendar } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#0A0F29] to-[#0B0B0C]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              CONTACT US FOR AN ESTIMATE TODAY
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:2538451234"
                className="bg-[#F1C40F] hover:bg-[#2D2D2F] text-[#0B0B0C] hover:text-[#F1C40F] px-8 py-4 rounded-lg flex items-center space-x-2 transition-colors font-semibold text-lg"
              >
                <Phone size={20} />
                <span>(253) 845-1234</span>
              </a>
              <a
                href="#estimate"
                className="bg-[#F1C40F] hover:bg-[#2D2D2F] text-[#0B0B0C] hover:text-[#F1C40F] px-8 py-4 rounded-lg flex items-center space-x-2 transition-colors font-semibold text-lg"
              >
                <Calendar size={20} />
                <span>SCHEDULE NOW</span>
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/8961186/pexels-photo-8961186.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="McMains Roofing work truck"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
