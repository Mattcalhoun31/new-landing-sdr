import React from 'react';
import { History, Award, Target, Rocket, Star, TrendingUp } from 'lucide-react';

export default function Story() {
  const milestones = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'Started as a bootstrapped pioneer in outbound marketing'
    },
    {
      year: '2015',
      title: 'Innovation',
      description: 'Developed proprietary sales methodologies'
    },
    {
      year: '2018',
      title: 'Expansion',
      description: 'Launched global training programs'
    },
    {
      year: '2023',
      title: 'Evolution',
      description: 'Created the Special Forces of SalesDev'
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <History className="h-10 w-10 text-military-600" />
              <h2 className="text-4xl font-bold text-gray-900">Pioneering the Future of Sales</h2>
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              From a bootstrapped pioneer and leader in outbound marketing, to creating the special forces of SalesDev and accelerating client growth, our journey represents one of innovation, excellence, and faith.
            </p>

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-military-400 to-military-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-white rounded-lg shadow-xl p-6 border border-military-100">
                  <div className="flex items-start gap-4">
                    <Target className="h-6 w-6 text-military-600" />
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

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-military-400 to-military-600 rounded-2xl blur opacity-25"></div>
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-military-50 to-white border border-military-100 shadow-xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="p-8">
                  <div className="space-y-8">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 h-12 w-12 bg-military-50 rounded-xl flex items-center justify-center">
                          {index === 0 && <Rocket className="h-6 w-6 text-military-600" />}
                          {index === 1 && <Star className="h-6 w-6 text-military-600" />}
                          {index === 2 && <Award className="h-6 w-6 text-military-600" />}
                          {index === 3 && <TrendingUp className="h-6 w-6 text-military-600" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-semibold text-military-600">{milestone.year}</span>
                            <div className="h-px flex-grow bg-military-200"></div>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">{milestone.title}</h4>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}