import React from 'react';
import { motion } from 'framer-motion';
import LabCard from '../components/LabCard';
import { Lab } from '../types';

const dummyLabs: Lab[] = [
  {
    id: '1',
    title: 'Quantum Mechanics Simulator',
    description: 'Explore quantum phenomena through interactive simulations',
    category: 'physics',
    difficulty: 'advanced',
    duration: 45,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'Virtual Chemistry Lab',
    description: 'Conduct chemical reactions in a safe virtual environment',
    category: 'chemistry',
    difficulty: 'intermediate',
    duration: 30,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80',
  },
  // Add more dummy labs...
];

const Labs = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const filteredLabs = selectedCategory === 'all'
    ? dummyLabs
    : dummyLabs.filter(lab => lab.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Virtual Labs
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          {['all', 'physics', 'chemistry', 'biology', 'robotics', 'computer-science'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full capitalize ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Labs Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredLabs.map(lab => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Labs;