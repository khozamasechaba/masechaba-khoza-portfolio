
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col space-y-4">
      <div className="aspect-square overflow-hidden rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] transition-all duration-300">
        <img 
          src={project.previewImage} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="space-y-2">
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
        className="inline-flex items-center justify-center bg-brand text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all active:scale-95 w-fit"
      >
        View Project
      </Link>
    </div>
  );
};

export default ProjectCard;
