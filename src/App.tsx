import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Storytelling from './components/Storytelling';
import Story from './components/Story';
import Solutions from './components/Solutions';
import Training from './components/Training';
import CostCalculator from './components/calculator/CostCalculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Storytelling />
      <Story />
      <CostCalculator />
      <Solutions />
      <Training />
      <Footer />
    </div>
  );
}

export default App;