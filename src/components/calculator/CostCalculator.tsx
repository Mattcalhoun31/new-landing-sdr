import React, { useState, useCallback } from 'react';
import { Calculator, DollarSign, Users, Clock, TrendingUp } from 'lucide-react';
import CostComparison from './CostComparison';

interface CostInputs {
  sdrCount: number;
  timeframe: number;
  baseSalary: number;
}

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

export default function CostCalculator() {
  const [inputs, setInputs] = useState<CostInputs>({
    sdrCount: 2,
    timeframe: 1,
    baseSalary: 48566
  });

  const calculateCosts = useCallback((sdrCount: number, years: number, baseSalary: number): CostBreakdown => {
    // Internal costs
    const recruitmentCost = sdrCount * 8000; // Average of $6k-$10k
    const firstYearTraining = sdrCount * 6000;
    const subsequentTraining = sdrCount * 3500 * (years - 1); // $3.5k average for subsequent years
    const annualOTE = baseSalary * 1.3; // 30% higher than base
    const benefitsRate = 0.3;
    const managementCost = 120000 * (sdrCount / 5); // 1 manager per 5 SDRs

    const totalSalary = sdrCount * baseSalary * years;
    const totalBenefits = totalSalary * benefitsRate;
    const totalTraining = firstYearTraining + (years > 1 ? subsequentTraining : 0);
    const totalManagement = managementCost * years;

    // Outsourced costs
    const monthlyRate = 4500; // Average monthly cost per SDR
    const setupFee = 2500 * sdrCount;
    const totalOutsourced = (monthlyRate * 12 * years * sdrCount) + setupFee;

    return {
      internal: {
        recruitment: recruitmentCost,
        training: totalTraining,
        salary: totalSalary,
        benefits: totalBenefits,
        management: totalManagement,
        total: recruitmentCost + totalTraining + totalSalary + totalBenefits + totalManagement,
      },
      outsourced: {
        monthly: monthlyRate * 12 * years * sdrCount,
        setup: setupFee,
        total: totalOutsourced,
      },
    };
  }, []);

  const costs = calculateCosts(inputs.sdrCount, inputs.timeframe, inputs.baseSalary);
  const savings = costs.internal.total - costs.outsourced.total;
  const savingsPercentage = (savings / costs.internal.total) * 100;

  return (
    <section id="calculator" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Calculator className="h-6 w-6" />
            <h3 className="text-2xl font-bold">SDR Cost Calculator</h3>
          </div>
          <p className="text-blue-100">Compare the costs of internal hiring vs. outsourced SDR solutions</p>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-700 font-medium mb-1 block">Number of SDRs</span>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={inputs.sdrCount}
                    onChange={(e) => setInputs(prev => ({ ...prev, sdrCount: parseInt(e.target.value) || 1 }))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-gray-700 font-medium mb-1 block">Base Salary (Annual)</span>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    min="30000"
                    max="100000"
                    value={inputs.baseSalary}
                    onChange={(e) => setInputs(prev => ({ ...prev, baseSalary: parseInt(e.target.value) || 48566 }))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-gray-700 font-medium mb-1 block">Timeframe (Years)</span>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={inputs.timeframe}
                    onChange={(e) => setInputs(prev => ({ ...prev, timeframe: parseInt(e.target.value) || 1 }))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </label>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <h4 className="text-lg font-semibold text-gray-900">Potential Savings</h4>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">
                  ${savings.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">
                  {savingsPercentage.toFixed(1)}% cost reduction over {inputs.timeframe} year{inputs.timeframe > 1 ? 's' : ''}
                </div>
              </div>
            </div>
          </div>

          <CostComparison costs={costs} timeframe={inputs.timeframe} sdrCount={inputs.sdrCount} />
        </div>
      </div>
    </section>
  );
}