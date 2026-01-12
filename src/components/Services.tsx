import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'ROOF REPLACEMENT',
    description: "When your roof is beyond repair or it's time for an upgrade, we'll replace it efficiently and affordably.",
    image: 'https://static.wixstatic.com/media/e1b2a4_26df948372c4416c981a3267b1410091~mv2.jpeg',
  },
  {
    title: 'ROOF REPAIR',
    description: "Our team is able to fix anything from minor damage to structural repairs on your roof with care and expertise.",
    image: 'https://static.wixstatic.com/media/e1b2a4_d719adaee9364335bc12f912e99f0451~mv2.jpeg',
  },
  {
    title: 'STORM RESTORATION',
    description: "After a big storm, especially when hail, wind or fallen trees hit your roof, our team can help restore it quickly.",
    image: 'https://static.wixstatic.com/media/e1b2a4_1f126691a2eb47fb8803b1c5ce0bd753~mv2.jpeg',
  },
  {
    title: 'COMMERCIAL',
    description: "We don't only work in residential capacity. We also perform roofing services for a variety of commercial clients.",
    image: 'https://static.wixstatic.com/media/e1b2a4_fdfc6a86f1e74dc09ef71290241d89cc~mv2.jpeg',
  },
  {
    title: 'ALL SERVICES',
    description: "Our company uses a range of roofing materials including asphalt, metal, and TPO. We also provide gutter installation.",
    image: 'https://static.wixstatic.com/media/e1b2a4_d4c34072ec7842ae8807372af50af0ce~mv2.jpg',
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-1 h-12 bg-[#F1C40F]" />
            <h2 className="text-4xl font-bold">OUR ROOFING AND RESTORATION SERVICES</h2>
          </div>
          <p className="text-lg text-gray-700">
            Ask about our <span className="font-bold text-[#F1C40F]">25-Year Workmanship Warranty</span> — included with every residential roof replacement.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row"
            >
              <div className="relative md:w-64 h-48 md:h-auto">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-[#F1C40F] to-[#D4A017]" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#estimate"
                  className="inline-flex items-center space-x-2 bg-[#F1C40F] hover:bg-[#2D2D2F] text-[#0B0B0C] hover:text-[#F1C40F] px-6 py-2 rounded-lg transition-colors w-fit font-semibold"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
