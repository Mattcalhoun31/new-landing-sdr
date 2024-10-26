import React from 'react';
import { Target, Brain, Ear, MessageCircle, Trophy, Monitor, Video, BarChart2, BookOpen, Users, Zap, Shield, CheckCircle, Database, Headphones, BookOpen as BookOpenIcon, Target as TargetIcon, Users as UsersIcon, LineChart, PieChart } from 'lucide-react';

export default function Training() {
  const methodologies = [
    {
      icon: Target,
      name: "SPIN Selling",
      description: "Master situation, problem, implication, and need-payoff questions to uncover deep customer needs.",
      benefit: "37% close rate"
    },
    {
      icon: Brain,
      name: "Challenger Sale",
      description: "Learn to teach, tailor, and take control of the customer conversation with insight-led selling.",
      benefit: "53% win rate"
    },
    {
      icon: Ear,
      name: "Chris Voss Tactics",
      description: "Master tactical empathy, labeling emotions, and mirroring techniques for better deal outcomes.",
      benefit: "48% conversion"
    },
    {
      icon: LineChart,
      name: "MEDDIC",
      description: "Qualify opportunities through Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, Champion.",
      benefit: "42% close rate"
    },
    {
      icon: PieChart,
      name: "Sandler Sales",
      description: "Build trust through pain points, budget, and decision-making process discovery using a consultative approach.",
      benefit: "45% win rate"
    }
  ];

  const skillSets = [
    {
      title: "Hard Skills",
      icon: Monitor,
      skills: [
        { name: "CRM Proficiency", description: "Mastery of platforms like HubSpot, Salesforce, and Pipedrive", icon: Database },
        { name: "Video Prospecting", description: "Creating engaging, personalized video outreach", icon: Video },
        { name: "A/B Testing", description: "Refining messaging through testing", icon: BarChart2 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Active Listening", description: "Understanding client needs and building rapport", icon: Headphones },
        { name: "Continuous Learning", description: "Staying informed about industry trends", icon: BookOpenIcon },
        { name: "Coachability", description: "Embracing feedback and adjusting strategies", icon: Target }
      ]
    },
    {
      title: "Strategic Skills",
      icon: Trophy,
      skills: [
        { name: "Personalized Outreach", description: "Balancing quality and quantity in prospecting", icon: MessageCircle },
        { name: "Relationship Building", description: "Establishing trust and nurturing connections", icon: UsersIcon }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-2xl bg-white shadow-md mb-6">
            <div className="flex items-center justify-center gap-4">
              <BookOpen className="h-12 w-12 text-military-600" />
              <h2 className="text-4xl font-bold text-gray-900">ProspectHunter University</h2>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At ProspectHunter University, our SDRs are equipped with essential skills to thrive in today's dynamic outbound marketing landscape. Our comprehensive training program covers both hard and soft skills, ensuring our reps are ready to excel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 bg-white px-6 py-3 rounded-lg inline-block">
              Elite Sales Methodologies
            </h3>
            {methodologies.map((method, index) => (
              <div key={index} className="relative group">
                <div className="relative bg-military-50 rounded-xl p-6 border border-military-200 hover:border-military-300 transition duration-300 shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-military-100 rounded-xl flex items-center justify-center group-hover:bg-military-200 transition-colors">
                      <method.icon className="h-6 w-6 text-military-600" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-lg text-gray-900">{method.name}</h4>
                        <span className="text-sm text-military-600 bg-white px-3 py-1 rounded-full border border-military-200 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          {method.benefit}
                        </span>
                      </div>
                      <p className="text-gray-600">{method.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {skillSets.map((skillSet, index) => (
              <div key={index} className="bg-military-50 rounded-xl p-6 border border-military-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-military-100 rounded-lg flex items-center justify-center">
                    <skillSet.icon className="h-5 w-5 text-military-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{skillSet.title}</h3>
                </div>
                <div className="space-y-4">
                  {skillSet.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-military-100">
                      <div className="h-8 w-8 bg-military-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <skill.icon className="h-4 w-4 text-military-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{skill.name}</h4>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}