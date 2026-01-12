import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 md:py-6 px-4 bg-gradient-to-b from-black/50 to-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-2 md:gap-6">
        <div className="flex items-center space-x-2 md:space-x-4 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl px-3 py-2 md:px-4 md:py-3 border border-white/20">
          <img
            src="https://static.wixstatic.com/media/e1b2a4_f4a320fec94a4f97aa9c048c904b1c3d~mv2.png"
            alt="McMains Roofing Logo"
            className="h-10 md:h-16 w-auto"
          />
          <div className="text-white border-l border-white/30 pl-2 md:pl-4">
            <div className="font-bold text-sm md:text-2xl tracking-wide">McMains Roofing</div>
            <div className="text-[10px] md:text-sm opacity-90 font-medium">Est. 1996</div>
          </div>
        </div>
        <a
          href="tel:2538451244"
          className="bg-[#F1C40F] hover:bg-white text-[#0B0B0C] px-4 py-2 md:px-8 md:py-4 rounded-lg md:rounded-xl flex items-center space-x-2 md:space-x-3 transition-all font-bold text-sm md:text-lg whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Phone size={18} className="md:hidden" />
          <Phone size={22} className="hidden md:block" />
          <span className="hidden sm:inline">(253) 845-1244</span>
          <span className="sm:hidden">Call Now</span>
        </a>
      </div>
    </header>
  );
}
