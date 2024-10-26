import React from 'react';
import { Clock, DollarSign, Target, Rocket, ArrowRight } from 'lucide-react';

export default function Storytelling() {
  const stats = [
    { 
      icon: Clock,
      value: '41',
      unit: 'days',
      label: 'Average Time to Hire'
    },
    {
      icon: DollarSign,
      value: '65%',
      unit: '',
      label: 'Revenue Loss from Delays'
    },
    {
      icon: Target,
      value: '14',
      unit: 'days',
      label: 'Our Deployment Time'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-military-50 via-white to-military-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-military-100 text-military-800 mb-6">
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-semibold">The SDR Bottleneck</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Breaking Through the
              <span className="block text-military-700">Sales Development Barrier</span>
            </h2>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="lead">
                Imagine this: You're running a thriving company, but your sales pipeline is stalling. 
                The culprit? A bottleneck in hiring Sales Development Representatives (SDRs).
              </p>
              
              <div className="my-8 grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-military-100 text-military-700 mb-3">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div className="text-2xl font-bold text-military-700">
                      {stat.value}<span className="text-sm ml-1">{stat.unit}</span>
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p>
                A study shows that the average time to hire is 41 days, but in sales, every day counts. 
                Delayed recruitment means lost revenue, increased workloads for existing staff, and missed market opportunities.
              </p>
            </div>

            <button className="inline-flex items-center px-6 py-3 bg-military-700 text-white rounded-lg hover:bg-military-800 transition-colors">
              Ready to Crush Quotas
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-military-400 to-military-600 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-military-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">A Real-Life Success Story</h3>
              
              <div className="space-y-6">
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-military-200">
                  <h4 className="text-lg font-semibold text-military-700 mb-2">The Challenge</h4>
                  <p className="text-gray-600">
                    A $10 million CRM company struggled with lengthy SDR onboarding processes, causing significant pipeline delays.
                  </p>
                </div>

                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-military-200">
                  <h4 className="text-lg font-semibold text-military-700 mb-2">The Solution</h4>
                  <p className="text-gray-600">
                    By implementing a structured training program, they revolutionized their onboarding process.
                  </p>
                </div>

                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-military-200">
                  <h4 className="text-lg font-semibold text-military-700 mb-2">The Result</h4>
                  <p className="text-gray-600">
                    New hires were ramped up in just two weeks, quickly booking meetings and hitting quotas.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-military-50 rounded-xl border border-military-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">The ProspectHunter Advantage</h4>
                <p className="text-gray-600">
                  Our SDRs are not only ready to deploy but are continuously trained and upskilled at ProspectHunter University. 
                  Skip the marathon of hiring delays and sprint straight to success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}