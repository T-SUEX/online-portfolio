import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              I'm currently available for freelance projects and full-time engineering roles. 
              Let's discuss how my engineering skills can contribute to your medical innovations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                  <Mail size={18} className="text-teal-400" />
                </div>
                <span>alex.bioeng@example.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                  <MapPin size={18} className="text-teal-400" />
                </div>
                <span>San Francisco Bay Area, CA</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 border border-slate-700 hover:bg-teal-600 hover:border-teal-600 rounded-full flex items-center justify-center transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 border border-slate-700 hover:bg-teal-600 hover:border-teal-600 rounded-full flex items-center justify-center transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-teal-500 focus:outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-teal-500 focus:outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-teal-500 focus:outline-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Alex BioEng Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};