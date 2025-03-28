import React from 'react';
import { motion } from 'framer-motion';
import { Book, Clock, Star, Users, ChevronRight, PlayCircle } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Advanced Quantum Computing',
      instructor: 'Dr. Sarah Chen',
      duration: '8 weeks',
      level: 'Advanced',
      rating: 4.8,
      students: 1234,
      progress: 65,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Molecular Biology Fundamentals',
      instructor: 'Prof. Michael Brown',
      duration: '6 weeks',
      level: 'Intermediate',
      rating: 4.9,
      students: 987,
      progress: 30,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'AI in STEM Research',
      instructor: 'Dr. Alex Kim',
      duration: '10 weeks',
      level: 'Advanced',
      rating: 4.7,
      students: 2156,
      progress: 0,
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Online Courses</h1>
          <div className="flex space-x-4">
            <select className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2">
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <select className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2">
              <option>All Categories</option>
              <option>Physics</option>
              <option>Biology</option>
              <option>Computer Science</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
            >
              <div className="relative h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                    {course.level}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 mb-4">{course.instructor}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-400">
                    <Clock size={16} className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users size={16} className="mr-1" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} className="mr-1" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {course.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-full bg-primary-600 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <button className="w-full flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors">
                  {course.progress > 0 ? (
                    <>
                      <PlayCircle size={20} className="mr-2" />
                      Continue Learning
                    </>
                  ) : (
                    <>
                      <Book size={20} className="mr-2" />
                      Start Course
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
