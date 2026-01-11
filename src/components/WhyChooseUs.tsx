import { Clock, DollarSign, Award, Home } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'EXPERIENCED',
    description: "We've been trusted as a contractor for over a quarter-century, and our crews are qualified and experienced.",
  },
  {
    icon: DollarSign,
    title: 'HONEST ESTIMATES',
    description: 'We provide our customers with free estimates on services which should fit your convenience.',
  },
  {
    icon: Award,
    title: 'FULLY LICENSED',
    description: 'We are licensed and insured contractors. Our company has earned trust by going above and beyond.',
  },
  {
    icon: Home,
    title: 'ROOFING TYPES',
    description: 'Our team services a wide variety of roofs and roofing materials, including the one right for you.',
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
              <h2 className="text-4xl font-bold">WHY CHOOSE MCMAINS ROOFING</h2>
            </div>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F8F9FA] rounded-lg flex items-center justify-center">
                    <reason.icon className="text-[#F1C40F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F1C40F] to-[#D4A017] rounded-lg transform rotate-3" />
            <img
              src="https://images.pexels.com/photos/7031845/pexels-photo-7031845.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="McMains Roofing professional"
              className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
