import { MapPin, CheckCircle } from 'lucide-react';

const areas = [
  'Puyallup',
  'Tacoma',
  'Sumner',
  'Bonney Lake',
  'Auburn',
  'Federal Way',
  'Lakewood',
  'Spanaway',
  'Graham',
  'Edgewood',
  'Fife',
  'Milton',
  'Pacific',
  'University Place',
  'South Hill',
  'Parkland',
];

export default function ServiceArea() {
  return (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Puyallup and Pierce County map"
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-1 h-12 bg-[#D4AF37]" />
              <h2 className="text-4xl font-bold">OUR SERVICE AREA</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              McMains Roofing proudly serves Puyallup and the greater Pierce County area.
              We service these communities with fast and dependable roofing services.
            </p>

            <p className="text-gray-700 mb-8 font-semibold">
              Serving these communities and their surrounding areas:
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-[#D4AF37] flex-shrink-0" size={20} />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-black text-white p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#D4AF37] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">AND MANY MORE!</h3>
                  <p className="text-sm opacity-90">
                    Don't see your location? Call (253) 845-1234 to confirm service availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
