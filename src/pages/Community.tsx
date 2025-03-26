import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, MessageCircle } from 'lucide-react';
import { ForumPost } from '../types';

const dummyPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Understanding Quantum Entanglement',
    content: 'Can someone explain quantum entanglement in simple terms?',
    author: 'QuantumLearner',
    date: '2025-03-15',
    likes: 42,
    replies: 15,
  },
  {
    id: '2',
    title: 'Chemical Reaction Simulation Tips',
    content: 'Looking for advice on running complex reaction simulations...',
    author: 'ChemistryPro',
    date: '2025-03-14',
    likes: 38,
    replies: 23,
  },
];

const Community = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Community Forum
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
            New Post
          </button>
        </div>

        <div className="space-y-6">
          {dummyPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.content}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <MessageSquare size={16} className="mr-1" />
                    {post.author}
                  </span>
                  <button className="flex items-center hover:text-blue-600">
                    <ThumbsUp size={16} className="mr-1" />
                    {post.likes}
                  </button>
                  <button className="flex items-center hover:text-blue-600">
                    <MessageCircle size={16} className="mr-1" />
                    {post.replies}
                  </button>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;