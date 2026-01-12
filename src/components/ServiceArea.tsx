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
    <section className="py-20 px-4 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <a
              href="https://share.google/YJkPsC5CWnbBN3cwg"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-200 rounded-lg h-96 overflow-hidden relative cursor-pointer hover:opacity-95 transition-opacity"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172204.58634847876!2d-122.43843984912108!3d47.15299890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549057f15e0d4f45%3A0x7c2e3a67d088c9d!2sMcMains%20Roofing!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="McMains Roofing Location"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-[420px] h-[420px] border-[3px] border-red-600 rounded-full opacity-50"></div>
                  <div className="absolute w-[420px] h-[420px] bg-red-600 rounded-full opacity-5"></div>
                </div>
              </div>
            </a>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-1 h-12 bg-[#F1C40F]" />
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
                  <CheckCircle className="text-[#F1C40F] flex-shrink-0" size={20} />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#0B0B0C] text-white p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#F1C40F] flex-shrink-0 mt-1" size={24} />
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
