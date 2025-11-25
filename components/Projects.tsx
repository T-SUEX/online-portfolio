import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Projects</h2>
            <p className="text-slate-600">Engineering solutions for complex medical challenges.</p>
          </div>
          <a href="#" className="text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1 group">
            View All Projects <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-teal-700 shadow-sm">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                   <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">+{project.technologies.length - 3}</span>
                    )}
                   </div>
                   
                   <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Outcome</p>
                      <p className="text-sm text-slate-700 font-medium">{project.outcome}</p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};