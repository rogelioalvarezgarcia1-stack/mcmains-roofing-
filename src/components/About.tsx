import { Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/8961186/pexels-photo-8961186.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Roofing work"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Roof inspection"
              className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
            />
            <img
              src="https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Completed roof"
              className="rounded-lg shadow-lg w-full h-64 object-cover -mt-8"
            />
            <img
              src="https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Roofing team"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-1 h-12 bg-[#D4AF37]" />
              <h2 className="text-4xl font-bold">ABOUT MCMAINS ROOFING</h2>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              When you're looking for a trusted roofing company in Puyallup, look no further than McMains Roofing.
              For over a quarter-century, we've been Pierce County's go-to roofing experts. We're known for our
              excellence in residential and commercial roofing services, and we're ready to provide the straight
              answers and quality workmanship your property deserves.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              At McMains Roofing, we pride ourselves on quality craftsmanship and a high degree of professionalism.
              We don't play games with pricing or make false promises. We show up when we say we will, give an
              honest assessment of your roof, and provide straightforward recommendations that serve your best interests.
            </p>

            <div className="bg-[#F5F5F5] border-l-4 border-[#D4AF37] p-6 mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <Award className="text-[#D4AF37]" size={32} />
                <h3 className="text-2xl font-bold">FINANCING IS AVAILABLE!</h3>
              </div>
              <a href="#estimate" className="text-[#D4AF37] font-semibold hover:text-[#C49B2E]">
                Learn more →
              </a>
            </div>

            <p className="text-gray-600 italic">
              Get in touch with us today to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
