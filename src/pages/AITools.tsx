import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Search, Zap, Calculator, ChevronRight } from 'lucide-react';

const AITools = () => {
  const tools = [
    {
      id: 1,
      title: 'Formula Solver',
      description: 'Solve complex mathematical and scientific formulas with step-by-step explanations',
      icon: Calculator,
      category: 'Mathematics',
      difficulty: 'All Levels',
    },
    {
      id: 2,
      title: 'Code Assistant',
      description: 'Get help with programming concepts and debugging code',
      icon: Code,
      category: 'Programming',
      difficulty: 'Intermediate',
    },
    {
      id: 3,
      title: 'Research Helper',
      description: 'Find and analyze scientific papers and research materials',
      icon: Search,
      category: 'Research',
      difficulty: 'Advanced',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered Learning Tools
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Enhance your learning experience with our suite of AI tools designed specifically for STEM education
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <tool.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {tool.category} • {tool.difficulty}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {tool.description}
              </p>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                Launch Tool
                <ChevronRight size={16} className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Quick Access Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Quick Access Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
            >
              <div className="flex items-center">
                <Brain className="w-12 h-12" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">AI Study Assistant</h3>
                  <p className="text-blue-100">Get instant help with your studies</p>
                </div>
              </div>
              <button className="mt-4 bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                Start Conversation
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white"
            >
              <div className="flex items-center">
                <Zap className="w-12 h-12" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Quick Problem Solver</h3>
                  <p className="text-green-100">Solve complex problems instantly</p>
                </div>
              </div>
              <button className="mt-4 bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-50 transition-colors duration-300">
                Solve Problem
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITools;