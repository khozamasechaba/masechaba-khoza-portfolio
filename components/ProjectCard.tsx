
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      <div className="p-1 bg-gradient-to-r from-brand-200 to-brand-400 opacity-20 group-hover:opacity-100 transition-opacity"></div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider">
            {project.company}
          </span>
          <div className="text-brand-300 group-hover:text-brand-500 transition-colors">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
             </svg>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-700 transition-colors">
          {project.title}
        </h3>

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">Challenge</p>
            <p className="text-slate-600 text-sm italic">"{project.challenge}"</p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">Solution</p>
            <p className="text-slate-700 text-sm">{project.solution}</p>
          </div>
          <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
            <p className="text-xs font-bold text-emerald-700 uppercase mb-1">Impact</p>
            <p className="text-emerald-800 font-semibold text-sm">{project.impact}</p>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-slate-50">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] px-2 py-1 bg-slate-100 text-slate-500 rounded font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
