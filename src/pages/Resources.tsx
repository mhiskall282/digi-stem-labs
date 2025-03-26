import React from 'react';
import { motion } from 'framer-motion';
import { Book, Download, ExternalLink, Video, FileText } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: 'Introduction to Quantum Computing',
      type: 'PDF',
      icon: FileText,
      size: '2.5 MB',
      downloads: 1234,
      category: 'Physics',
    },
    {
      id: 2,
      title: 'Chemical Reactions Video Series',
      type: 'Video',
      icon: Video,
      duration: '45 mins',
      views: 5678,
      category: 'Chemistry',
    },
    {
      id: 3,
      title: 'Python for Data Science',
      type: 'Course',
      icon: Book,
      modules: 12,
      students: 890,
      category: 'Computer Science',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Learning Resources
          </h1>
          <div className="flex space-x-4">
            <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2">
              <option>All Categories</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>Computer Science</option>
            </select>
            <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2">
              <option>All Types</option>
              <option>PDF</option>
              <option>Video</option>
              <option>Course</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <resource.icon className="w-8 h-8 text-blue-600" />
                  <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">
                    {resource.category}
                  </span>
                </div>
                <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  <Download size={20} />
                </button>
              </div>

              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>

              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {resource.type === 'PDF' && (
                  <>
                    <p>Size: {resource.size}</p>
                    <p>Downloads: {resource.downloads}</p>
                  </>
                )}
                {resource.type === 'Video' && (
                  <>
                    <p>Duration: {resource.duration}</p>
                    <p>Views: {resource.views}</p>
                  </>
                )}
                {resource.type === 'Course' && (
                  <>
                    <p>Modules: {resource.modules}</p>
                    <p>Enrolled Students: {resource.students}</p>
                  </>
                )}
              </div>

              <button className="mt-4 w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                Access Resource
                <ExternalLink size={16} className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;