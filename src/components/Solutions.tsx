import React from 'react';
import { Users, Building, Target, BarChart2, UserCheck, Database, Filter, Rocket, Cog, Clock, DollarSign, Shield, Zap } from 'lucide-react';

export default function Solutions() {
  const paths = [
    {
      icon: Users,
      title: "Direct Hire",
      description: "Have full control over your sales recruitment process with in-house SDRs. More oversight, tailored strategies, integrate deeply within your company culture.",
      features: [
        { icon: Shield, text: "Full Control & Oversight" },
        { icon: Target, text: "Deep Company Integration" },
        { icon: Clock, text: "90+ Day Ramp-up" }
      ],
      considerations: "High recruitment and training costs, longer ramp-up times, and management overhead.",
      gradient: "from-military-600 to-military-700"
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
      considerations: "Typically saves up to 65% compared to internal hires. Ideal for companies looking to scale efficiently.",
      gradient: "from-military-700 to-military-800"
    },
    {
      icon: Cog,
      title: "SalesDev Done For You",
      description: "Enjoy a comprehensive service where we manage everything from recruitment to results. Focus on your core business operations.",
      features: [
        { icon: Shield, text: "Full Management" },
        { icon: Target, text: "Predictable Costs" },
        { icon: Zap, text: "Expert Oversight" }
      ],
      considerations: "Streamlined processes, predictable costs, and expert management.",
      gradient: "from-military-800 to-military-900"
    }
  ];

  const benefits = [
    {
      icon: UserCheck,
      title: "Access to Talent",
      description: "Access to certified SDRs with proven track records and extensive training."
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Get your SDR team up and running quickly with our streamlined process."
    },
    {
      icon: Target,
      title: "Strategic Targeting",
      description: "Precision-focused outreach to your ideal customer profiles."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-military-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div key={index} className="relative group">
              <div className={`relative bg-gradient-to-br ${path.gradient} rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow`}>
                <div className="h-14 w-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <path.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{path.title}</h3>
                <p className="text-military-100 mb-6">{path.description}</p>
                
                <div className="space-y-4 mb-6">
                  {path.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <feature.icon className="h-5 w-5 text-military-200" />
                      <span className="text-military-100">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-military-100">{path.considerations}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="h-12 w-12 bg-military-100 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-military-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}