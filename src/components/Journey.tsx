import React from 'react';
import { History, Award, Target, Rocket, Star, TrendingUp } from 'lucide-react';

export default function Journey() {
  // Previous milestones array remains the same

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <History className="h-10 w-10 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Pioneering the Future of Sales</h2>
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              From a bootstrapped pioneer and leader in outbound marketing, to creating the special forces of SalesDev and accelerating client growth, our journey represents one of innovation, excellence, and faith.
            </p>

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-white rounded-lg shadow-xl p-6 border border-blue-100">
                  <div className="flex items-start gap-4">
                    <Target className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Our Mission</h3>
                      <p className="text-gray-600">
                        Revolutionizing sales development through cutting-edge technology, 
                        expert training, and data-driven strategies that deliver measurable results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Rest of the component remains the same */}
        </div>
      </div>
    </section>
  );
}