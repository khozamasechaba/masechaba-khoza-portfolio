
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import * as Icons from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // @ts-ignore - dynamic icon access
  const IconComponent = Icons[project.icon] || Icons.Briefcase;

  return (
    <div className="group flex flex-col h-full space-y-4">
      <div className="aspect-square overflow-hidden rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] transition-all duration-300 bg-brand-50 flex items-center justify-center">
        <div className="w-1/2 h-1/2 bg-brand rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
          <IconComponent size={48} strokeWidth={3} />
        </div>
      </div>
      
      <div className="flex-grow space-y-2">
        <p className="text-sm font-bold text-brand uppercase tracking-wider">
          {project.company}
        </p>
        <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
          {project.title}
        </h3>
        <p className="text-slate-600 text-lg line-clamp-2">
          {project.summary}
        </p>
      </div>

      <Link 
        to={`/project/${project.id}`}
        className="inline-flex items-center justify-center bg-brand text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all active:scale-95 w-fit mt-auto"
      >
        View Project
      </Link>
    </div>
  );
};

export default ProjectCard;
