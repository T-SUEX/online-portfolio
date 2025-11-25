import React from 'react';
import { SKILLS } from '../constants';
import { Cpu, Activity, FileCheck } from 'lucide-react';

const icons = {
  "Engineering & Design": <Cpu className="text-teal-600" size={28} />,
  "Software & Analysis": <Activity className="text-blue-600" size={28} />,
  "Regulatory & Clinical": <FileCheck className="text-purple-600" size={28} />
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A diverse skillset spanning core engineering principles, software development, and regulatory compliance essential for modern medical device development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 inline-block p-3 bg-white rounded-xl shadow-sm">
                {icons[skillGroup.category as keyof typeof icons] || <Activity />}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};