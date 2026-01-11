import { Shield } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="estimate" className="py-16 px-4 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-[#0B0B0C]">
            <h2 className="text-4xl font-bold mb-4">
              Sign Up Today For A Thorough Estimate.
            </h2>
            <p className="text-xl text-[#F1C40F] font-semibold mb-6">
              No Strings Attached.
            </p>
            <p className="text-lg text-[#B0B0B0]">
              Get in touch with one of our professional roofers who will help with your home inspection needs.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1C40F]"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Best Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1C40F]"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1C40F]"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1C40F]"
                  required
                />
              </div>

              <div className="flex items-start space-x-2 text-xs text-gray-600">
                <input type="checkbox" required className="mt-1" />
                <p>
                  By checking this box I consent to receive marketing and promotional calls, SMS, or email from McMains Roofing and its representatives. Consent is not a condition of purchase. View our Terms of Service and Privacy Policy.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F1C40F] hover:bg-[#2D2D2F] text-[#0B0B0C] py-4 rounded-lg font-bold text-lg transition-colors"
              >
                SUBMIT NOW
              </button>

              <div className="flex items-center justify-center space-x-2 text-green-600 text-sm">
                <Shield size={20} />
                <span className="font-semibold">Your information is safe and secure</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
