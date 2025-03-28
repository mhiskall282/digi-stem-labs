import React from 'react';
import { motion } from 'framer-motion';
import { Folder, GitBranch, Star, Users, Clock, Plus } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Quantum Circuit Simulator',
      description: 'A web-based quantum circuit simulation tool for educational purposes',
      team: ['Alex K.', 'Sarah L.', 'Mike R.'],
      status: 'In Progress',
      progress: 75,
      deadline: '2025-04-15',
      tags: ['Physics', 'Quantum', 'Education'],
    },
    {
      id: 2,
      title: 'DNA Sequence Analyzer',
      description: 'Machine learning tool for analyzing DNA sequences and predicting protein structures',
      team: ['John D.', 'Emma W.'],
      status: 'Planning',
      progress: 20,
      deadline: '2025-05-01',
      tags: ['Biology', 'ML', 'Research'],
    },
    {
      id: 3,
      title: 'Smart Lab Assistant',
      description: 'AI-powered virtual assistant for laboratory experiments and data collection',
      team: ['Lisa M.', 'David C.', 'Anna P.', 'Tom S.'],
      status: 'Completed',
      progress: 100,
      deadline: '2025-03-30',
      tags: ['AI', 'Lab', 'Automation'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Research Projects</h1>
          <button className="flex items-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Plus size={20} className="mr-2" />
            New Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Folder className="w-8 h-8 text-primary-500" />
                  <div className="ml-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className={`h-full rounded-full ${
                        project.status === 'Completed'
                          ? 'bg-green-500'
                          : 'bg-primary-600'
                      }`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{project.deadline}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'Completed'
                      ? 'bg-green-900 text-green-300'
                      : project.status === 'In Progress'
                      ? 'bg-primary-900 text-primary-300'
                      : 'bg-gray-700 text-gray-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {project.team.map((member, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center"
                    >
                      <span className="text-xs text-white">{member.charAt(0)}</span>
                    </div>
                  ))}
                </div>
                <button className="text-primary-500 hover:text-primary-400">
                  <GitBranch size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
