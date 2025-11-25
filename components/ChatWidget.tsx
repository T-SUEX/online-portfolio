import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/gemini';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Alex's AI Assistant. Ask me anything about his projects or biomedical skills.", timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMsg.text);

    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col border border-slate-200 mb-4 animate-in slide-in-from-bottom-5 fade-in duration-300 overflow-hidden">
          {/* Header */}
          <div className="bg-teal-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Portfolio Assistant</h3>
                <p className="text-xs text-teal-100">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-teal-700 p-1 rounded transition">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-teal-600 text-white'}`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} /> }
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white text-slate-700 shadow-sm border border-slate-200 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
               <div className="flex max-w-[85%] gap-2 flex-row">
                 <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0">
                    <Bot size={14} />
                 </div>
                 <div className="p-3 rounded-2xl bg-white text-slate-700 shadow-sm border border-slate-200 rounded-tl-none flex items-center gap-2">
                   <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                   <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                   <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                 </div>
               </div>
             </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my projects..."
                className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-colors flex items-center justify-center w-10 h-10"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-slate-700' : 'bg-teal-600 hover:bg-teal-700'} text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 group`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium pl-0 group-hover:pl-2">Ask AI Assistant</span>}
      </button>
    </div>
  );
};