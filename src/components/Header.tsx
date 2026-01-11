import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="https://static.wixstatic.com/media/e1b2a4_f4a320fec94a4f97aa9c048c904b1c3d~mv2.png"
            alt="McMains Roofing Logo"
            className="h-16 w-auto"
          />
          <div className="text-white">
            <div className="font-bold text-xl">McMains Roofing</div>
            <div className="text-xs opacity-90">Est. 1995</div>
          </div>
        </div>
        <a
          href="tel:2538451234"
          className="bg-[#F1C40F] hover:bg-[#2D2D2F] text-[#0B0B0C] hover:text-[#F1C40F] px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors font-semibold"
        >
          <Phone size={18} />
          <span>(253) 845-1234</span>
        </a>
      </div>
    </header>
  );
}
