import React from 'react';
import { Search, FileCheck, Anchor, BarChart3, Globe2, Lock } from 'lucide-react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    title: "Instant HS Code Lookup",
    description: "Stop guessing. Our AI analyzes your product description to find the precise Harmonized System code instantly.",
    icon: Search
  },
  {
    title: "Automated Compliance",
    description: "Stay ahead of changing regulations. We automatically check your shipments against current import/export restrictions.",
    icon: FileCheck
  },
  {
    title: "Freight Optimization",
    description: "Compare routes and carriers in real-time to find the most cost-effective and fastest shipping options.",
    icon: Anchor
  },
  {
    title: "Landed Cost Calculator",
    description: "Calculate duties, taxes, and fees upfront. Know your true margins before you ship.",
    icon: BarChart3
  },
  {
    title: "Global Market Data",
    description: "Access real-time trade data and trends from over 150 countries to identify new market opportunities.",
    icon: Globe2
  },
  {
    title: "Secure Documentation",
    description: "Generate and store all required trade documents on a secure, blockchain-verified ledger.",
    icon: Lock
  }
];

export const Features: React.FC = () => {
  return (
    <div className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Everything you need to trade globally</h2>
          <p className="text-slate-600">
            We've built the most comprehensive operating system for international trade, designed to remove friction and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-indigo-50 text-royal-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-royal-900 group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};