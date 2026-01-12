import { Phone, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#0B0B0C] min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://video.wixstatic.com/video/e1b2a4_7f74c21cd4cb4e9ca4b5d2bd39d76d0a/1080p/mp4/file.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#0A0F29] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="mb-8">
          <a
            href="https://www.google.com/search?sca_esv=b54de5dcee8cb050&rlz=1C1RXQR_enUS1189US1189&biw=1536&bih=730&aic=0&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOTH9GrBOw3UglFGl8hsEofaUmjyc4T_IoCF52auG-N2kkxRNYgxdidz2OXjVjSgjSgte9Ntbn-mNprNPmBUzOd1fGy9y_aKkaLdobzLBl6j6PDsf8A%3D%3D&q=McMains+Roofing+Inc+Reviews&sa=X&ved=2ahUKEwjC5s-YwYSSAxXfFzQIHXF2IPIQ0bkNegQINRAE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center bg-[#1a1a2e] border-2 border-[#F1C40F] rounded-2xl px-10 py-5 hover:bg-[#252540] hover:scale-105 transition-all cursor-pointer"
          >
            <div className="flex items-center space-x-3 mb-2">
              <img
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png"
                alt="Google"
                className="h-6"
              />
              <div className="flex items-center space-x-2">
                <span className="text-white text-4xl font-bold">4.6</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F1C40F] text-2xl">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white text-sm opacity-90">Based on 70+ Google Reviews</p>
          </a>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          ROOFING DONE ONCE.<br />BACKED FOR 25 YEARS.
        </h1>

        <p className="text-xl md:text-2xl text-white mb-8 font-light">
          Puyallup's Trusted Roofers — One of Washington's Longest Workmanship Warranties Since 1996
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="tel:2538451244"
            className="bg-[#F1C40F] hover:bg-[#2D2D2F] text-[#0B0B0C] hover:text-[#F1C40F] px-8 py-4 rounded-lg flex items-center space-x-2 transition-colors font-semibold text-lg"
          >
            <Phone size={20} />
            <span>(253) 845-1244</span>
          </a>
          <a
            href="#estimate"
            className="bg-[#F1C40F] hover:bg-[#2D2D2F] text-[#0B0B0C] hover:text-[#F1C40F] px-8 py-4 rounded-lg flex items-center space-x-2 transition-colors font-semibold text-lg"
          >
            <Calendar size={20} />
            <span>SCHEDULE NOW</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#F8F9FA] pointer-events-none"></div>
    </section>
  );
}
