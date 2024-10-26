import React from 'react';
import { Users, Rocket, Cog, Clock, DollarSign, Target, Shield, Zap, BarChart2 } from 'lucide-react';

export default function SdrPath() {
  const paths = [
    {
      icon: Users,
      title: "Internal Hiring",
      description: "Have full control over your sales recruitment process with in-house SDRs. More oversight, tailored strategies, integrate deeply within your company culture.",
      features: [
        { icon: Shield, text: "Full Control & Oversight" },
        { icon: Target, text: "Deep Company Integration" },
        { icon: Clock, text: "90+ Day Ramp-up" }
      ],
      considerations: "High recruitment and training costs, longer ramp-up times, and management overhead."
    },
    {
      icon: Rocket,
      title: "Outsourced SDRs",
      description: "Leverage cost-effective solutions with quick ramp-up times. Access specialized skills without the burden of recruitment.",
      features: [
        { icon: Zap, text: "10-Day Deployment" },
        { icon: DollarSign, text: "65% Cost Savings" },
        { icon: BarChart2, text: "Immediate ROI" }
      ],
      considerations: "Typically saves up to 65% compared to internal hires. Ideal for companies looking to scale efficiently."
    },
    {
      icon: Cog,
      title: "Done-for-You Model",
      description: "Enjoy a comprehensive service where we manage everything from recruitment to results. Focus on your core business operations.",
      features: [
        { icon: Shield, text: "Full Management" },
        { icon: Target, text: "Predictable Costs" },
        { icon: Zap, text: "Expert Oversight" }
      ],
      considerations: "Streamlined processes, predictable costs, and expert management."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-blue-600">SDR Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect SDR solution that aligns with your business goals, budget, and growth strategy
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white rounded-xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <path.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{path.title}</h3>
                <p className="text-gray-600 mb-6">{path.description}</p>
                
                <div className="space-y-4 mb-6">
                  {path.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-blue-50 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-sm text-gray-600">{path.considerations}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Compare Options in Detail
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}