import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <div className="text-lg font-bold text-gray-800">M</div>
              </div>
              <div>
                <div className="font-bold">McMains Roofing</div>
                <div className="text-xs opacity-75">Est. 1995</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Trusted roofing contractor serving Puyallup and Pierce County since 1995.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#estimate" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  Get Estimate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  Roof Replacement
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  Roof Repair
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  Storm Restoration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  Commercial Roofing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  Gutter Installation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-cyan-500" />
                <a href="tel:2538451234" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  (253) 845-1234
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-cyan-500" />
                <a
                  href="mailto:info@mcmainsroofing.com"
                  className="text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  info@mcmainsroofing.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-cyan-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Serving Puyallup & Pierce County, WA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>Copyright © {new Date().getFullYear()} McMains Roofing. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-cyan-500 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-cyan-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
