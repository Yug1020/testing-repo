import React from 'react';
import { ArrowRight, Globe, ShieldCheck, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onJoinWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinWaitlist }) => {
  return (
    <div className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-royal-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-saffron-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-royal-900 font-medium text-xs tracking-wider uppercase mb-6 border border-indigo-100">
                Bridging Markets: UK & India
              </span>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
                Indo-British Trade <br/>
                <span className="text-royal-900 relative">
                  Simplified
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-saffron-400/20 -z-10 transform -rotate-1"></span>
                </span>
                {" "} by AI.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Navigate complex customs regulations between India and the UK, find accurate HS codes instantly, and optimize your cross-border supply chain.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={onJoinWaitlist}
                  className="w-full sm:w-auto px-8 py-4 bg-royal-900 text-white rounded-lg font-semibold shadow-lg shadow-royal-900/20 hover:bg-royal-800 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Join Solutions Waitlist
                  <ArrowRight size={18} />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-royal-900 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  View Demo
                </button>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-slate-400">
                <div className="flex items-center gap-2 text-sm">
                  <Globe size={16} /> <span>UK-India Focused</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ShieldCheck size={16} /> <span>Full Compliance</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp size={16} /> <span>Data Driven</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Graphic Content */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white"
            >
              <img 
                src="https://picsum.photos/800/600" 
                alt="Global Logistics Dashboard" 
                className="w-full h-auto object-cover opacity-90"
              />
              
              {/* Floating Cards */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Customs Cleared</p>
                    <p className="text-[10px] text-slate-500">Mumbai Port - Felixstowe</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Duty Saved</p>
                    <p className="text-lg font-bold text-royal-900">£12,450</p>
                  </div>
                  <div className="h-8 w-px bg-slate-200"></div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Transit Time</p>
                    <p className="text-lg font-bold text-saffron-600">22 Days</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};