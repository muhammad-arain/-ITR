
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2, Minimize2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { CONTACT_DETAILS } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm your ITR Solar Assistant. How can I help you switch to clean energy today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: `You are 'ITR Solar Assistant', the professional AI representative for ITR Solar (ITR Automation Group), a top solar solutions provider in Pakistan.
          
          Company Info:
          - Services: Residential, Commercial, and Industrial solar systems, net metering, high-efficiency inverters, and lithium battery storage.
          - Authorized Partners: Inverex, Crown, MaxPower, Volnex, Longi Solar, Jinko Solar.
          - Locations: Branches in Hyderabad (Rahat Cinema Road & Autobhan Road). Service coverage is nationwide across Pakistan.
          - Contact: Phone 0315-2733377, WhatsApp 0322-4487487.
          - Hours: 10:30 AM to 9:00 PM (Friday Closed).
          
          Guidelines:
          - Be professional, technical yet easy to understand, and helpful.
          - If asked about prices, explain that they depend on specific system requirements (KW size) and recommend a free site assessment.
          - Encourage users to contact via WhatsApp for a formal quote.
          - If you don't know an answer, provide the office contact details.
          - Keep responses concise and focused on solar benefits in the Pakistani context (high electricity rates, load shedding).`
        }
      });

      const response = await chat.sendMessage({ message: userMessage });
      const text = response.text || "I apologize, but I'm having trouble connecting. Please try again or contact us on WhatsApp.";
      
      setMessages(prev => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please contact our support team directly at " + CONTACT_DETAILS.mainBranch.mobile }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">ITR Solar Assistant</h3>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-emerald-100 font-medium">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1.5 rounded-lg transition-colors">
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 chat-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] flex items-start space-x-2 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-lg flex-shrink-0 ${msg.role === 'user' ? 'bg-emerald-100 text-emerald-600' : 'bg-white border text-slate-400'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="p-2 rounded-lg bg-white border text-slate-400">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-100 rounded-tl-none shadow-sm">
                    <Loader2 className="w-4 h-4 text-emerald-600 animate-spin" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about solar systems..."
                className="w-full bg-slate-100 border-none rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`absolute right-2 p-2 rounded-lg transition-all ${
                  input.trim() && !isLoading ? 'bg-emerald-600 text-white' : 'text-slate-400'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group border-4 border-white"
          aria-label="Open Chat"
        >
          <MessageSquare className="w-8 h-8" />
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-white text-slate-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Solar AI Assistant
          </span>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
