import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Users, Target, Award, Zap } from 'lucide-react';

const Challenges = () => {
  const challenges = [
    {
      id: 1,
      title: 'Quantum Algorithm Challenge',
      description: 'Design an efficient quantum algorithm for factoring large numbers',
      participants: 156,
      timeLeft: '3 days',
      prize: '$5000',
      difficulty: 'Expert',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Green Energy Innovation',
      description: 'Develop a sustainable energy solution for urban environments',
      participants: 234,
      timeLeft: '5 days',
      prize: '$3000',
      difficulty: 'Advanced',
      status: 'Active',
    },
    {
      id: 3,
      title: 'AI in Healthcare',
      description: 'Create an AI model for early disease detection',
      participants: 189,
      timeLeft: '7 days',
      prize: '$4000',
      difficulty: 'Intermediate',
      status: 'Active',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">STEM Challenges</h1>
          <p className="text-gray-400">Compete in cutting-edge scientific challenges</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge) => (
            <motion.div
              key={challenge.id}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-900 text-primary-400 rounded-full text-sm">
                    {challenge.difficulty}
                  </span>
                  <div className="flex items-center text-green-400">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-2" />
                    {challenge.status}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{challenge.title}</h3>
                <p className="text-gray-400 mb-6">{challenge.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center text-gray-400 mb-1">
                      <Trophy size={16} className="mr-2" />
                      Prize Pool
                    </div>
                    <div className="text-xl font-semibold text-white">{challenge.prize}</div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center text-gray-400 mb-1">
                      <Users size={16} className="mr-2" />
                      Participants
                    </div>
                    <div className="text-xl font-semibold text-white">{challenge.participants}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-400">
                    <Clock size={16} className="mr-2" />
                    Time Left: {challenge.timeLeft}
                  </div>
                </div>

                <button className="w-full flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg transition-colors">
                  <Zap size={20} className="mr-2" />
                  Join Challenge
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Host a Challenge</h2>
              <p className="text-gray-400 mb-6">
                Create your own STEM challenge and engage with brilliant minds worldwide
              </p>
              <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-700 rounded-lg p-4">
                <Award className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-white mb-1">50+</h3>
                <p className="text-gray-400">Active Challenges</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <Target className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-white mb-1">10K+</h3>
                <p className="text-gray-400">Participants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
