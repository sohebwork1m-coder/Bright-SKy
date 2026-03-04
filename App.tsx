
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#EDF8FF] to-[#F8F9FA] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-screen-2xl bg-white/70 backdrop-blur-xl rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-cyan-500/10 p-4 sm:p-6 lg:p-10">
        <Header />
        <main>
          <Hero />
          <FeatureCards />
          <Testimonials />
        </main>
      </div>
    </div>
  );
};

export default App;
