import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award } from 'lucide-react';
import { Lab } from '../types';

interface LabCardProps {
  lab: Lab;
}

const LabCard: React.FC<LabCardProps> = ({ lab }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={lab.image}
        alt={lab.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {lab.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {lab.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <Clock size={16} />
            <span>{lab.duration} mins</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <Award size={16} />
            <span>{lab.difficulty}</span>
          </div>
        </div>
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
          Start Experiment
        </button>
      </div>
    </motion.div>
  );
};

export default LabCard;