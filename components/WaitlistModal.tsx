import React, { useState, useEffect } from 'react';
import { X, Send, Container } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WaitlistFormData } from '../types';

interface WaitlistModalProps {
  isOpenProp?: boolean;
  onClose?: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpenProp, onClose }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formData, setFormData] = useState<WaitlistFormData>({ companyName: '', email: '' });

  // Handle internal state or props
  const isOpen = isOpenProp !== undefined ? isOpenProp : internalIsOpen;
  
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  // Trigger popup after 5 seconds if not controlled externally
  useEffect(() => {
    if (isOpenProp !== undefined) return;

    const timer = setTimeout(() => {
      // Check if user has already closed it in this session (optional logic, kept simple here)
      const hasSeen = sessionStorage.getItem('hasSeenWaitlist');
      if (!hasSeen) {
        setInternalIsOpen(true);
        sessionStorage.setItem('hasSeenWaitlist', 'true');
      }
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [isOpenProp]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.companyName && formData.email) {
      // Simulate API call
      console.log('Submitting waitlist data:', formData);
      setHasSubmitted(true);
      setTimeout(() => {
        handleClose();
        // Reset after close for next time if needed
        setTimeout(() => setHasSubmitted(false), 500); 
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            {/* Decorative Header */}
            <div className="bg-royal-900 p-6 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-royal-900 to-royal-800" />
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-saffron-500/20 rounded-full blur-2xl" />
               
               <button 
                 onClick={handleClose}
                 className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
               >
                 <X size={20} />
               </button>

               <div className="relative z-10">
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border border-white/10">
                   <Container className="text-saffron-500" size={24} />
                 </div>
                 <h3 className="text-xl font-serif font-bold text-white mb-1">
                   Gateway to GMT Commerce Solutions
                 </h3>
                 <p className="text-indigo-100 text-sm">Your bridge between the UK and India.</p>
               </div>
            </div>

            {/* Body */}
            <div className="p-8">
              {hasSubmitted ? (
                <div className="text-center py-8">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Send size={32} />
                  </motion.div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Request Sent!</h4>
                  <p className="text-slate-500 text-sm">We'll contact you about our UK-India solutions shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-center text-slate-600 mb-6 text-sm">
                    Get early access to our AI-powered customs clearance and freight tracking dashboard for Indo-British trade.
                  </p>
                  
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-700 uppercase mb-1">Company Name</label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-royal-900 focus:ring-1 focus:ring-royal-900 outline-none transition-all text-slate-800"
                      placeholder="e.g. London Exports Ltd"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-royal-900 focus:ring-1 focus:ring-royal-900 outline-none transition-all text-slate-800"
                      placeholder="name@company.com"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-royal-900 hover:bg-royal-800 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 mt-4"
                  >
                    Join Waitlist
                  </button>
                  
                  <p className="text-xs text-center text-slate-400 mt-4">
                    We respect your privacy. No spam.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};