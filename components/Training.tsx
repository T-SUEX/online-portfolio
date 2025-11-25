import React from 'react';
import { TRAINING } from '../constants';
import { Award, Calendar } from 'lucide-react';

export const TrainingSection: React.FC = () => {
  return (
    <section id="training" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Training & Certifications</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Continuous professional development to stay at the forefront of biomedical engineering.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {TRAINING.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-4 md:gap-6 bg-slate-50 p-6 rounded-xl border border-slate-100 transition hover:border-teal-200">
               <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                    <Award size={24} />
                  </div>
               </div>
               <div className="flex-1">
                 <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                    <div className="flex items-center text-slate-500 text-sm gap-1 mt-1 md:mt-0">
                      <Calendar size={14} />
                      <span>{item.year}</span>
                    </div>
                 </div>
                 <p className="text-teal-600 font-medium text-sm mb-2">{item.institution}</p>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   {item.description}
                 </p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};