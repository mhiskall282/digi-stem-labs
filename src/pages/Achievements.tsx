import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Zap, Brain, Beaker, Code } from 'lucide-react';
import Confetti from 'react-confetti';

const Achievements = () => {
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [selectedAchievement, setSelectedAchievement] = React.useState<string | null>(null);

  const achievements = [
    {
      id: '1',
      title: 'Lab Master',
      description: 'Complete 10 advanced labs',
      icon: Beaker,
      progress: 80,
      unlocked: true,
      category: 'Labs',
      xp: 500,
    },
    {
      id: '2',
      title: 'Code Wizard',
      description: 'Write 1000 lines of code',
      icon: Code,
      progress: 65,
      unlocked: true,
      category: 'Programming',
      xp: 300,
    },
    {
      id: '3',
      title: 'Quick Learner',
      description: 'Complete 5 labs in one day',
      icon: Zap,
      progress: 100,
      unlocked: true,
      category: 'Speed',
      xp: 200,
    },
    {
      id: '4',
      title: 'AI Explorer',
      description: 'Use all AI tools',
      icon: Brain,
      progress: 40,
      unlocked: false,
      category: 'AI',
      xp: 400,
    },
  ];

  const handleAchievementClick = (id: string) => {
    setSelectedAchievement(id);
    if (achievements.find(a => a.id === id)?.unlocked) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track your progress and unlock rewards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleAchievementClick(achievement.id)}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer ${
                selectedAchievement === achievement.id
                  ? 'ring-2 ring-blue-500'
                  : ''
              }`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-lg ${
                    achievement.unlocked
                      ? 'bg-blue-100 dark:bg-blue-900'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}
                >
                  <achievement.icon
                    className={`w-8 h-8 ${
                      achievement.unlocked
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-400'
                    }`}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.category}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {achievement.description}
              </p>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Progress
                  </span>
                  <span className="font-semibold">
                    {achievement.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${achievement.progress}%` }}
                  />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    XP Reward: {achievement.xp}
                  </span>
                  {achievement.unlocked && (
                    <Star className="w-5 h-5 text-yellow-500" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
