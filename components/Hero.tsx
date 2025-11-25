import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PORTFOLIO_OWNER, TITLE, BIO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/30 pt-16">
      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-2">
            Open for Opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Hello, I'm <span className="text-teal-600">{PORTFOLIO_OWNER}</span>.
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 font-medium">
            {TITLE}
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {BIO}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href="#projects" className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
            <button className="px-8 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
              Download CV <Download size={18} />
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative">
           <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative rounded-full w-full h-full overflow-hidden border-4 border-white shadow-2xl">
                 <img 
                  src="https://picsum.photos/600/600?grayscale" 
                  alt={PORTFOLIO_OWNER} 
                  className="w-full h-full object-cover"
                 />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};