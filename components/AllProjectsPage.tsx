
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

const AllProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-sand pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <Link to="/" className="inline-flex items-center text-slate-500 hover:text-brand transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">All Projects</h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            A comprehensive look at my work across Fintech, eCommerce, and Product Operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjectsPage;
