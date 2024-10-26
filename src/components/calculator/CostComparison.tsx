import React from 'react';
import { DollarSign, Users, Brain, Clock } from 'lucide-react';

interface CostBreakdown {
  internal: {
    recruitment: number;
    training: number;
    salary: number;
    benefits: number;
    management: number;
    total: number;
  };
  outsourced: {
    monthly: number;
    setup: number;
    total: number;
  };
}

interface Props {
  costs: CostBreakdown;
  timeframe: number;
  sdrCount: number;
}

export default function CostComparison({ costs, timeframe, sdrCount }: Props) {
  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;

  const comparisonPoints = [
    {
      icon: Clock,
      internal: '3-6 months',
      outsourced: '2-4 weeks',
      label: 'Time to Full Productivity'
    },
    {
      icon: Brain,
      internal: 'Variable',
      outsourced: 'Pre-trained',
      label: 'Training Requirements'
    },
    {
      icon: Users,
      internal: 'Additional overhead',
      outsourced: 'Included',
      label: 'Management Needs'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl blur opacity-25"></div>
          <div className="relative bg-white rounded-xl p-6 border border-blue-100 shadow-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Avg. Internal Hiring Costs</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Recruitment</span>
                <span className="font-medium">{formatCurrency(costs.internal.recruitment)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Training</span>
                <span className="font-medium">{formatCurrency(costs.internal.training)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Salary</span>
                <span className="font-medium">{formatCurrency(costs.internal.salary)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Benefits</span>
                <span className="font-medium">{formatCurrency(costs.internal.benefits)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Management</span>
                <span className="font-medium">{formatCurrency(costs.internal.management)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-gray-900">Total Cost</span>
                  <span className="text-blue-600">{formatCurrency(costs.internal.total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl blur opacity-25"></div>
          <div className="relative bg-white rounded-xl p-6 border border-blue-100 shadow-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Outsourced SDR Costs</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Monthly Service</span>
                <span className="font-medium">{formatCurrency(costs.outsourced.monthly)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Setup Fee</span>
                <span className="font-medium">{formatCurrency(costs.outsourced.setup)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-gray-900">Total Cost</span>
                  <span className="text-blue-600">{formatCurrency(costs.outsourced.total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 border border-blue-100">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Considerations</h4>
        <div className="grid md:grid-cols-3 gap-6">
          {comparisonPoints.map((point, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2 text-blue-600">
                <point.icon className="h-5 w-5" />
                <span className="font-medium">{point.label}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500">Internal</div>
                  <div className="font-medium text-gray-900">{point.internal}</div>
                </div>
                <div>
                  <div className="text-gray-500">Outsourced</div>
                  <div className="font-medium text-gray-900">{point.outsourced}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}