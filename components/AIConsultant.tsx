import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { getTradeAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import ReactMarkdown from 'react-markdown';

export const AIConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: "Hello! I'm your **Gateway to GMT Commerce Solutions AI** consultant. Ask me about **UK-India HS codes**, **import tariffs**, or **shipping documentation**.",
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: query, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    const advice = await getTradeAdvice(query);

    const modelMsg: ChatMessage = { role: 'model', content: advice, timestamp: new Date() };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col h-[600px]">
      {/* Header */}
      <div className="bg-royal-900 p-4 flex items-center justify-between shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Bot className="text-saffron-500" size={20} />
          </div>
          <div>
            <h3 className="font-bold text-white">Gateway to GMT AI</h3>
            <p className="text-indigo-200 text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Powered by Gemini 2.5
            </p>
          </div>
        </div>
        <div className="hidden md:block">
           <span className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full border border-white/10">Preview Mode</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] md:max-w-[75%] rounded-2xl p-4 shadow-sm ${
                msg.role === 'user'
                  ? 'bg-royal-900 text-white rounded-tr-sm'
                  : 'bg-white text-slate-700 border border-slate-100 rounded-tl-sm'
              }`}
            >
              {msg.role === 'model' ? (
                <div className="prose prose-sm prose-slate max-w-none">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-sm">{msg.content}</p>
              )}
              <span className={`text-[10px] block mt-2 opacity-60 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-tl-sm p-4 border border-slate-100 shadow-sm flex items-center gap-2">
              <Loader2 className="animate-spin text-royal-900" size={16} />
              <span className="text-slate-500 text-sm">Consulting trade regulations...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-100 shrink-0">
        <form onSubmit={handleConsult} className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about regulations, HS codes, or logistics..."
              className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-royal-900/20 focus:border-royal-900 outline-none transition-all text-sm"
              disabled={isLoading}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
               <Sparkles size={16} />
            </div>
          </div>
          <button
            type="submit"
            disabled={!query.trim() || isLoading}
            className="bg-royal-900 hover:bg-royal-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center"
          >
            <Send size={18} />
          </button>
        </form>
        <p className="text-center text-[10px] text-slate-400 mt-2 flex items-center justify-center gap-1">
          <AlertCircle size={10} />
          AI advice is for informational purposes only. Consult a professional for legal decisions.
        </p>
      </div>
    </div>
  );
};