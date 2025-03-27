import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, MessageSquare, Calendar, Star, Clock, Award } from 'lucide-react';

const Mentorship = () => {
  const mentors = [
    {
      id: 1,
      name: 'Dr. Emily Chen',
      title: 'Quantum Physics Professor',
      institution: 'MIT',
      rating: 4.9,
      reviews: 124,
      expertise: ['Quantum Mechanics', 'Particle Physics'],
      availability: 'Mon, Wed, Fri',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      name: 'Prof. Michael Brown',
      title: 'AI Research Scientist',
      institution: 'Stanford',
      rating: 4.8,
      reviews: 98,
      expertise: ['Machine Learning', 'Neural Networks'],
      availability: 'Tue, Thu',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Your STEM Mentor
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with expert mentors in your field of interest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-xl font-semibold text-white">{mentor.name}</h3>
                  <p className="text-gray-200">{mentor.title}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600 dark:text-gray-400">{mentor.institution}</span>
                </div>

                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-semibold mr-2">{mentor.rating}</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    ({mentor.reviews} reviews)
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Available: {mentor.availability}
                  </span>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                    <UserPlus size={20} className="mr-2" />
                    Request Mentorship
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                    <MessageSquare size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Become a Mentor</h2>
              <p className="mb-6">
                Share your expertise and help shape the next generation of STEM professionals.
              </p>
              <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-50">
                Apply Now
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-3xl font-bold mb-2">500+</h3>
                <p>Active Mentors</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-3xl font-bold mb-2">2000+</h3>
                <p>Students Mentored</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-3xl font-bold mb-2">50+</h3>
                <p>Countries</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-3xl font-bold mb-2">4.8</h3>
                <p>Avg. Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
