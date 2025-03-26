import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, Book, ChevronRight, Play, Download } from 'lucide-react';
import { useParams } from 'react-router-dom';

const LabDetails = () => {
  const { id } = useParams();

  // Dummy data for the lab
  const labData = {
    id,
    title: 'Quantum Mechanics Simulator',
    description: 'Explore the fascinating world of quantum mechanics through interactive simulations and experiments.',
    duration: 45,
    difficulty: 'Advanced',
    prerequisites: ['Basic Physics', 'Calculus'],
    objectives: [
      'Understand quantum superposition',
      'Explore wave-particle duality',
      'Learn about quantum entanglement',
    ],
    modules: [
      {
        id: 1,
        title: 'Introduction to Quantum States',
        duration: 15,
        status: 'completed',
      },
      {
        id: 2,
        title: 'Wave Functions and Probability',
        duration: 15,
        status: 'in-progress',
      },
      {
        id: 3,
        title: 'Quantum Measurements',
        duration: 15,
        status: 'locked',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              {/* Lab Header */}
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
                  alt={labData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h1 className="text-3xl font-bold text-white mb-2">{labData.title}</h1>
                  <div className="flex items-center space-x-4 text-white">
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {labData.duration} mins
                    </span>
                    <span className="flex items-center">
                      <Award size={16} className="mr-1" />
                      {labData.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Lab Content */}
              <div className="p-6">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">About this Lab</h2>
                  <p className="text-gray-600 dark:text-gray-300">{labData.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Prerequisites</h2>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {labData.prerequisites.map((prereq, index) => (
                      <li key={index}>{prereq}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Learning Objectives</h2>
                  <ul className="space-y-2">
                    {labData.objectives.map((objective, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                        <ChevronRight size={16} className="mr-2 text-blue-600" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Start Lab Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                <Play size={20} className="mr-2" />
                Start Lab
              </button>
              <button className="w-full mt-4 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                <Download size={20} className="mr-2" />
                Download Resources
              </button>
            </motion.div>

            {/* Modules */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">Lab Modules</h2>
              <div className="space-y-4">
                {labData.modules.map((module) => (
                  <div
                    key={module.id}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold">{module.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {module.duration} mins
                      </p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      module.status === 'completed'
                        ? 'bg-green-500'
                        : module.status === 'in-progress'
                        ? 'bg-yellow-500'
                        : 'bg-gray-300'
                    }`} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Additional Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <Book size={16} className="mr-2" />
                    Lab Manual PDF
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <Play size={16} className="mr-2" />
                    Video Tutorial
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDetails;