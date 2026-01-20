import { Shield } from 'lucide-react';

export default function LeadForm() {

  return (
    <section id="estimate" className="py-16 px-4 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-[#0B0B0C]">
            <h2 className="text-4xl font-bold mb-4">
              Sign Up for a No-Pressure Estimate and Learn How We Protect Your Roof for 25 Years
            </h2>
            <p className="text-lg text-[#2D2D2F] mb-6">
              Get a local expert out to your home. Our professional roofers will help you with a free inspection and honest recommendations.
            </p>
            <p className="text-base text-[#F1C40F] font-semibold">
              Ask about our $250 Referral Bonus & 5% Discount for Veterans & Seniors
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <form action="https://formspree.io/f/xojjnryd" method="POST" className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1C40F]"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Best Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1C40F]"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1C40F]"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
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
