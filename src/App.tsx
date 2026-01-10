import Header from './components/Header';
import Hero from './components/Hero';
import LeadForm from './components/LeadForm';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceArea from './components/ServiceArea';
import Reviews from './components/Reviews';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <Hero />
      <LeadForm />
      <About />
      <Services />
      <WhyChooseUs />
      <ServiceArea />
      <ContactCTA />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
