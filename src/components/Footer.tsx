import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0C] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://static.wixstatic.com/media/e1b2a4_f4a320fec94a4f97aa9c048c904b1c3d~mv2.png"
                alt="McMains Roofing Logo"
                className="h-16 w-auto"
              />
              <div className="border-l border-gray-700 pl-3">
                <div className="font-bold text-lg">McMains Roofing</div>
                <div className="text-sm text-gray-400">Est. 1996</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Trusted roofing contractor serving Puyallup and Pierce County since 1996.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-[#B0B0B0] hover:text-[#F1C40F] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#estimate" className="text-[#B0B0B0] hover:text-[#F1C40F] transition-colors">
                  Get Estimate
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#B0B0B0] hover:text-[#F1C40F] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-[#B0B0B0] hover:text-[#F1C40F] transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#roof-replacement" className="text-[#B0B0B0] hover:text-[#F1C40F] transition-colors">
                  Roof Replacement
                </a>
              </li>
              <li>
                <a href="#roof-repair" className="text-[#B0B0B0] hover:text-[#F1C40F] transition-colors">
                  Roof Repair
                </a>
              </li>
              <li>
                <a href="#storm-restoration" className="text-[#B0B0B0] hover:text-[#F1C40F] transition-colors">
                  Storm Restoration
                </a>
              </li>
              <li>
                <a href="#commercial-roofing" className="text-[#B0B0B0] hover:text-[#F1C40F] transition-colors">
                  Commercial Roofing
                </a>
              </li>
              <li>
                <a href="#gutter-installation" className="text-[#B0B0B0] hover:text-[#F1C40F] transition-colors">
                  Additional Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-[#F1C40F]" />
                <a href="tel:2538451244" className="text-[#B0B0B0] hover:text-[#F1C40F] transition-colors">
                  (253) 845-1244
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-[#F1C40F]" />
                <a
                  href="mailto:info@mcmainsroofing.com"
                  className="text-[#B0B0B0] hover:text-[#F1C40F] transition-colors"
                >
                  info@mcmainsroofing.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-[#F1C40F] mt-1 flex-shrink-0" />
                <span className="text-[#B0B0B0]">Serving Puyallup & Pierce County, WA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="bg-gradient-to-r from-[#F1C40F]/10 to-transparent rounded-lg p-6 mb-6">
            <p className="text-white text-lg font-semibold mb-2">
              Know someone who needs a roof? Refer a friend and get <span className="text-[#F1C40F]">$250</span> when they book with us.
            </p>
            <p className="text-white text-base">
              Plus <span className="text-[#F1C40F] font-semibold">5% Off for All Veterans & Seniors</span>.
            </p>
          </div>

          <p className="text-sm text-[#B0B0B0]">Copyright © {new Date().getFullYear()} McMains Roofing. All Rights Reserved.</p>
          <div className="mt-2 space-x-4 text-sm">
            <a href="#" className="text-[#B0B0B0] hover:text-[#F1C40F] transition-colors">
              Privacy Policy
            </a>
            <span className="text-[#B0B0B0]">|</span>
            <a href="#" className="text-[#B0B0B0] hover:text-[#F1C40F] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
