import { Shield, Users, DollarSign, Award, CheckCircle, Star } from 'lucide-react';

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
            <div className="absolute -inset-4 bg-gradient-to-br from-[#F1C40F] to-[#D4A017] rounded-lg opacity-20 blur-xl" />
            <img
              src="https://static.wixstatic.com/media/e1b2a4_e6baeeae3eed472fb4faa0a82d1d37a2~mv2.jpg"
              alt="McMains Roofing professional"
              className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
