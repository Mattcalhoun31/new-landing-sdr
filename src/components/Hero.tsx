import React from 'react';
import { ArrowRight, BarChart2, Users, Target, UserPlus, Zap, DollarSign, Gauge, CheckCircle } from 'lucide-react';

export default function Hero() {
  const benefits = [
    { text: "50% reduction in recruitment costs", icon: DollarSign },
    { text: "10-day deployment vs. 90+ day hiring cycle", icon: Zap },
    { text: "Proven 3X pipeline acceleration", icon: BarChart2 }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Supercharge Your Sales with <span className="text-blue-600">Proven SDR Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eliminate recruitment headaches and boost your sales pipeline with our ready-to-deploy SDRs, trained in tactical and strategic quota crushing.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
                <benefit.icon className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-800 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold">
              Accelerate Your Growth <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors text-lg font-semibold">
              View Success Stories
            </button>
          </div>
        </div>

        {/* Rest of the Hero component remains the same */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl shadow-xl text-white hover:shadow-2xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Recruitment</h3>
                <p className="text-lg text-blue-100">Stop paying to hire unproven Sales Dev reps</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-blue-700 to-blue-800 p-8 rounded-xl shadow-xl text-white hover:shadow-2xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Ramp</h3>
                <p className="text-lg text-blue-100">Cut onboarding times with certified Reps, ready to perform</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart2 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Higher Conversion Rates</h3>
            <p className="text-gray-600">Companies using outsourced SDRs see a 30% increase in lead conversion rates.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cost Savings</h3>
            <p className="text-gray-600">Reduce recruitment costs by 50% with our ready-to-deploy SDRs.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Specialized Skills</h3>
            <p className="text-gray-600">Trained in MMA - Mixed methodology appointment setters with tactical hands on experience.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Gauge className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Rapid Deployment</h3>
            <p className="text-gray-600">Our R2D (Ready-to-deploy) reps are ready to perform in half the usual onboarding time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}