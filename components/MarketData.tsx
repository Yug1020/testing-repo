import React from 'react';
import { TrendingUp, Award, Zap, BarChart3, ArrowRight } from 'lucide-react';

const products = [
  { 
    rank: 1, 
    name: "Insulin Medicaments", 
    category: "Pharmaceuticals", 
    market: "£826M+ (5.4% CAGR)", 
    advantage: "High-value, specialized mfg capability" 
  },
  { 
    rank: 2, 
    name: "Lentils", 
    category: "Food & Agriculture", 
    market: "£3.3B (95% imported)", 
    advantage: "India is a key established supplier" 
  },
  { 
    rank: 3, 
    name: "LED Lights", 
    category: "Electronics", 
    market: "£6.9B (7.4% growth)", 
    advantage: "Sustainability push & cost efficiency" 
  },
  { 
    rank: 4, 
    name: "Cotton Textiles", 
    category: "Textiles", 
    market: "£10B+ market size", 
    advantage: "Zero tariff potential under FTA" 
  },
  { 
    rank: 5, 
    name: "Cardamoms", 
    category: "Spices", 
    market: "£7.2M (Growing demand)", 
    advantage: "India supplies 30% of UK imports" 
  },
  { 
    rank: 6, 
    name: "Natural Honey", 
    category: "Food", 
    market: "£497M (95% imported)", 
    advantage: "High demand, 5.3% annual growth" 
  },
  { 
    rank: 7, 
    name: "Synthetic Flavouring", 
    category: "F&B Industry", 
    market: "Supports £230B+ sector", 
    advantage: "Critical industry input for F&B" 
  },
  { 
    rank: 8, 
    name: "Agarbatti (Incense)", 
    category: "Wellness", 
    market: "£46M wellness market", 
    advantage: "Strong cultural & wellness trends" 
  },
  { 
    rank: 9, 
    name: "Hair Care Products", 
    category: "Personal Care", 
    market: "£9.3B sector", 
    advantage: "Significant FTA cost advantage" 
  },
  { 
    rank: 10, 
    name: "Brown Rice", 
    category: "Food", 
    market: "£1.9B rice market", 
    advantage: "Health trends driving consumption" 
  },
];

export const MarketData: React.FC = () => {
  return (
    <section id="market-data" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-royal-900 font-bold tracking-wider text-xs uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            2024 Market Intelligence
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-4 mb-6">
            High-Potential Opportunities
          </h2>
          <p className="text-slate-600 text-lg">
            Our analysis has identified specific sectors where Indian exporters hold a significant competitive advantage in the UK market, driven by demand gaps and tariff benefits.
          </p>
        </div>

        {/* Insight Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-indigo-50 text-royal-900 rounded-2xl flex items-center justify-center mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">FTA Advantage</h3>
              <p className="text-slate-600 leading-relaxed">
                The proposed UK-India Free Trade Agreement aims for zero tariffs on <strong>99% of products</strong>, giving Indian goods a massive competitive edge over other non-EU suppliers.
              </p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-saffron-50 text-saffron-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cost Competitiveness</h3>
              <p className="text-slate-600 leading-relaxed">
                Indian manufacturing currently offers <strong>20-30% cost savings</strong> compared to European alternatives in sectors like automotive components and textiles.
              </p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Growing Demand</h3>
              <p className="text-slate-600 leading-relaxed">
                Surging UK demand for <strong>sustainable textiles</strong>, organic foods, and specialized pharmaceuticals aligns perfectly with India's export growth sectors.
              </p>
           </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8 bg-royal-900 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="font-serif font-bold text-2xl mb-2">Top 10 Products to Import</h3>
              <p className="text-indigo-200 text-sm">Ranked by recommendation score and market potential.</p>
            </div>
            <div className="flex items-center gap-2 text-xs bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
               <BarChart3 size={16} className="text-saffron-500" />
               <span>Source: 2024 Trade Analysis Report</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="p-6 font-semibold border-b border-slate-200">Rank</th>
                  <th className="p-6 font-semibold border-b border-slate-200">Product Name</th>
                  <th className="p-6 font-semibold border-b border-slate-200">Category</th>
                  <th className="p-6 font-semibold border-b border-slate-200">UK Market Context</th>
                  <th className="p-6 font-semibold border-b border-slate-200">Strategic Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {products.map((item) => (
                  <tr key={item.rank} className="hover:bg-indigo-50/30 transition-colors group">
                    <td className="p-6 font-bold text-royal-900 text-lg">#{item.rank}</td>
                    <td className="p-6 font-bold text-slate-800 text-base">{item.name}</td>
                    <td className="p-6">
                      <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide group-hover:bg-white group-hover:shadow-sm transition-all">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-6 text-slate-600 font-medium">{item.market}</td>
                    <td className="p-6 text-slate-600 flex items-center gap-2">
                      <ArrowRight size={14} className="text-saffron-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.advantage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 p-4 text-center border-t border-slate-200">
             <button className="text-royal-900 text-sm font-semibold hover:text-royal-800 transition-colors flex items-center justify-center gap-1 mx-auto">
               View Full 50-Product Report <ArrowRight size={16} />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};