import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Crown } from 'lucide-react';

const Leaderboard = () => {
  const leaderboardData = [
    { id: 1, name: 'Sarah Chen', points: 2500, institution: 'MIT', badges: 15 },
    { id: 2, name: 'James Wilson', points: 2350, institution: 'Stanford', badges: 12 },
    { id: 3, name: 'Maria Garcia', points: 2200, institution: 'Berkeley', badges: 11 },
    { id: 4, name: 'Alex Kim', points: 2100, institution: 'Harvard', badges: 10 },
    { id: 5, name: 'David Lee', points: 2000, institution: 'Caltech', badges: 9 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Global Leaderboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Top performers in DigiSTEMLab</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[2, 1, 3].map((position) => {
            const user = leaderboardData[position - 1];
            return (
              <motion.div
                key={position}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: position * 0.2 }}
                className={`${
                  position === 1
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                    : position === 2
                    ? 'bg-gradient-to-br from-gray-300 to-gray-500'
                    : 'bg-gradient-to-br from-amber-600 to-amber-800'
                } rounded-xl p-6 text-white text-center transform ${
                  position === 1 ? 'md:-translate-y-4' : ''
                }`}
              >
                <div className="flex justify-center mb-4">
                  {position === 1 ? (
                    <Crown size={48} />
                  ) : position === 2 ? (
                    <Medal size={48} />
                  ) : (
                    <Trophy size={48} />
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2">{user.name}</h3>
                <p className="text-lg mb-2">{user.points} points</p>
                <p className="text-sm opacity-90">{user.institution}</p>
                <div className="mt-4 flex items-center justify-center">
                  <Star size={16} className="mr-1" />
                  <span>{user.badges} badges</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Top Performers</h2>
            <div className="space-y-4">
              {leaderboardData.slice(3).map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-400 mr-4">
                      {index + 4}
                    </span>
                    <div>
                      <h3 className="font-semibold">{user.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {user.institution}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{user.points} points</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {user.badges} badges
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
