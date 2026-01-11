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
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 bg-[#0B0B0C] border border-[#F1C40F] rounded-full px-5 py-3">
            <div className="flex items-center space-x-1">
              <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center overflow-hidden bg-white">
                <img
                  src="https://static.wixstatic.com/media/e1b2a4_b9d7f524e686408ca3d34e313eb33a90~mv2.png"
                  alt="Google"
                  className="w-3 h-3 object-contain"
                />
              </div>
              <span className="text-white text-sm font-bold">70+ REVIEWS ON</span>
            </div>
            <img
              src="https://static.wixstatic.com/media/e1b2a4_2ff935bd7bdb4576b0da8a5713840fa7~mv2.png"
              alt="Google"
              className="h-[14px]"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          TRUSTED ROOFING IN<br />PUYALLUP
        </h1>

        <p className="text-xl md:text-2xl text-white mb-8 font-light">
          Protecting homes with quality service since 1995.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="tel:2538451234"
            className="bg-[#F1C40F] hover:bg-[#2D2D2F] text-[#0B0B0C] hover:text-[#F1C40F] px-8 py-4 rounded-lg flex items-center space-x-2 transition-colors font-semibold text-lg"
          >
            <Phone size={20} />
            <span>(253) 845-1234</span>
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
