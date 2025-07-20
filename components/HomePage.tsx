import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sprout, MapPin, Sparkles, Wind, PackageSearch } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] rounded-lg overflow-hidden flex items-center justify-center text-center text-white mb-16"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>太陽の恵み、食卓へ</h1>
          <p className="text-xl md:text-2xl mb-8" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>Freshness from our fields to your table.</p>
          <NavLink
            to="/store"
            className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Shop Vegetables
          </NavLink>
        </div>
      </section>

      {/* Our Farms Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-text-main">Where We Grow Them</h2>
          <p className="text-lg text-brand-text-light mt-2">Sustainable farms blessed by nature.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg shadow-xl w-full h-auto overflow-hidden aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.292348578529!2d-122.39575908468205!3d37.79549307975618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580668e681533%3A0x4523c535334a42f!2sFerry%20Building!5e0!3m2!1sen!2sus!4v1652891941649!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Farm Location Map"
            ></iframe>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-12 h-12 text-brand-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-brand-text-main">Prime Locations</h3>
                <p className="text-brand-text-light mt-1">Our vegetables are sourced from the best local farms, like those featured at the Ferry Plaza Farmers Market in San Francisco, ensuring produce of the highest quality.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Sprout className="w-12 h-12 text-brand-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-brand-text-main">Organic Practices</h3>
                <p className="text-brand-text-light mt-1">We are committed to organic farming, avoiding synthetic pesticides and fertilizers to grow vegetables that are not only delicious but also safe and healthy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Process Section */}
      <section className="py-16 my-16 bg-brand-primary-light rounded-lg">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-brand-text-main">Our Commitment to Cleanliness</h2>
          <p className="text-lg text-brand-text-light mt-2">Following meticulous Japanese standards for hygiene and quality.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center px-4">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Sparkles className="w-12 h-12 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-brand-text-main mb-2">Triple-Washed</h3>
            <p className="text-brand-text-light">Every vegetable is washed three times in purified, chilled water to remove any impurities while preserving its crispness and nutritional value.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Wind className="w-12 h-12 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-brand-text-main mb-2">Air-Dried & Chilled</h3>
            <p className="text-brand-text-light">After washing, produce is gently air-dried and immediately chilled to maintain peak freshness from our facility to your kitchen.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <PackageSearch className="w-12 h-12 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-brand-text-main mb-2">Careful Packaging</h3>
            <p className="text-brand-text-light">We package our vegetables with care in breathable, eco-friendly materials to ensure they arrive at your door in perfect condition.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;