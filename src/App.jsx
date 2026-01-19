import React, { useState } from 'react';
// import { Navbar } from './components/Navbar';
// import { Hero } from './components/Hero';
// import { Features } from './components/Features';
// import { MarketData } from './components/MarketData';
// import { AIConsultant } from './components/AIConsultant';
// import { WaitlistModal } from './components/WaitlistModal';
// import { ArrowUpRight } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // We also let the modal handle its own automatic opening logic via internal state in the component,
  // but this state allows us to manually trigger it from buttons.
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* <Navbar onJoinWaitlist={handleOpenModal} /> */}
      
      <main>
        {/* <Hero onJoinWaitlist={handleOpenModal} /> */}
        
        {/* <Features /> */}

        {/* <MarketData /> */}

        {/* AI Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">
                  Meet your new <br/>
                  <span className="text-royal-900">Trade Consultant</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  Need a specific UK-India HS code? Not sure about the tariffs for exporting electronics from London to Delhi? 
                  Our Gemini-powered AI consultant is here to help 24/7.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1 text-xs">✓</div>
                    <p className="text-slate-700">Instant answers to Indo-British regulatory questions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1 text-xs">✓</div>
                    <p className="text-slate-700">Up-to-date tariff schedules and duty rates</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1 text-xs">✓</div>
                    <p className="text-slate-700">Support for both UK and Indian documentation</p>
                  </div>
                </div>

                <button 
                  onClick={handleOpenModal}
                  className="group flex items-center gap-2 text-royal-900 font-semibold hover:text-royal-800 transition-colors"
                >
                  Get full access 
                  {/* <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> */}
                </button>
              </div>

              <div className="flex-1 w-full">
                {/* <AIConsultant /> */}
              </div>
            </div>
          </div>
          
          {/* Background blob for AI section */}
          <div className="absolute left-0 bottom-0 -translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl -z-10" />
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-1 md:col-span-2">
                 <div className="flex items-center gap-2 mb-4 text-white">
                    <div className="p-1.5 bg-white rounded text-royal-900">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg>
                    </div>
                    <span className="font-serif font-bold text-xl">Indo-British Commerce Solutions</span>
                 </div>
                 <p className="text-slate-400 max-w-sm mb-6">
                   Empowering businesses to trade between the UK and India with confidence, speed, and intelligence.
                 </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">HS Code Finder</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Duty Calculator</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Compliance API</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Logistics Network</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
              <p>&copy; 2024 Indo-British Commerce Solutions. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* <WaitlistModal isOpenProp={isModalOpen} onClose={handleCloseModal} /> */}
    </div>
  );
}