import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Award, Book, Clock, Star } from 'lucide-react';

const Profile = () => {
  const userData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    role: 'Student',
    institution: 'Tech University',
    completedLabs: 15,
    certificates: 8,
    joinDate: '2024-01-15',
    expertise: ['Physics', 'Computer Science'],
    achievements: [
      { id: 1, title: 'Lab Master', description: 'Completed 10 advanced labs' },
      { id: 2, title: 'Quick Learner', description: 'Finished 5 labs in one week' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <User size={64} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{userData.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 flex items-center mt-2">
                <Mail size={16} className="mr-2" />
                {userData.email}
              </p>
              <div className="mt-4 w-full">
                <div className="flex items-center justify-between py-2 border-b dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Role</span>
                  <span className="font-semibold">{userData.role}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Institution</span>
                  <span className="font-semibold">{userData.institution}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats and Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Progress Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <Book className="w-8 h-8 text-blue-600" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Completed Labs</p>
                    <p className="text-2xl font-bold">{userData.completedLabs}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-purple-600" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Certificates</p>
                    <p className="text-2xl font-bold">{userData.certificates}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-green-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <Clock className="w-8 h-8 text-green-600" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Member Since</p>
                    <p className="text-lg font-bold">{new Date(userData.joinDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Achievements</h3>
              <div className="space-y-4">
                {userData.achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <Star className="w-6 h-6 text-yellow-500" />
                    <div className="ml-3">
                      <p className="font-semibold">{achievement.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;