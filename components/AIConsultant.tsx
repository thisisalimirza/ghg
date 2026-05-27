import React, { useState, useRef, useEffect } from 'react';
import { sendMessageStream } from '../services/geminiService';
import { ChatMessage } from '../types';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GenerateContentResponse } from '@google/genai';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello. I'm the Global Health Group virtual assistant. How can I assist you with our technical consultancy services today?",
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const stream = await sendMessageStream(userMsg.text);
      const botMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '' }]);

      let fullText = '';
      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text || '';
        fullText += textChunk;
        setMessages(prev =>
          prev.map(msg => msg.id === botMsgId ? { ...msg, text: fullText } : msg)
        );
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "I apologize, but I'm having trouble connecting to the server right now. Please try again later.",
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto mb-4 w-[90vw] max-w-[400px] h-[500px] bg-white rounded-none shadow-2xl flex flex-col overflow-hidden border border-parchment-200 transform transition-all duration-300 ease-out origin-bottom-right">
          {/* Header */}
          <div className="bg-forest-900 p-4 flex justify-between items-center text-parchment-100">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-forest-800 rounded-full">
                <Bot size={18} className="text-gold-400" />
              </div>
              <div>
                <h3 className="font-sans font-medium text-sm tracking-wide">GHG Technical Assistant</h3>
                <p className="text-[10px] text-parchment-400 tracking-[0.1em] uppercase">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-parchment-400 hover:text-parchment-100 transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-parchment-50 scrollbar-hide">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed font-light ${
                  msg.role === 'user'
                    ? 'bg-forest-900 text-parchment-100 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl'
                    : 'bg-white border border-parchment-200 text-ink-700 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-sm'
                } ${msg.isError ? 'bg-red-50 text-red-700 border-red-200' : ''}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-parchment-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                  <Loader2 className="animate-spin text-gold-500" size={14} />
                  <span className="text-xs text-ink-400 font-light tracking-wide">Analyzing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-parchment-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-1 bg-parchment-50 border border-parchment-200 px-4 py-2 text-sm font-light text-ink-800 placeholder:text-ink-300 focus:outline-none focus:border-forest-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-forest-900 text-parchment-100 p-2 hover:bg-forest-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-gold-400 hover:bg-gold-300 text-forest-950 p-4 shadow-lg transition-all duration-200 hover:scale-105 flex items-center gap-0 group"
      >
        <MessageSquare size={22} />
        {!isOpen && (
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-medium tracking-wider uppercase">
            Consult AI
          </span>
        )}
      </button>
    </div>
  );
};

export default AIConsultant;
