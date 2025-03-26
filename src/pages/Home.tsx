import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Beaker, Brain, Bot, Code, Atom } from 'lucide-react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-multiply" />
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80"
            alt="STEM Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Welcome to DigiSTEMLab
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Explore virtual experiments in Physics, Chemistry, Biology, Robotics, and Computer Science
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/labs"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-300"
            >
              Start Experimenting
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Explore Our Virtual Labs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Atom className="w-8 h-8 text-blue-600" />}
              title="Physics"
              description="Explore mechanics, waves, and quantum phenomena through interactive simulations."
            />
            <FeatureCard
              icon={<Beaker className="w-8 h-8 text-purple-600" />}
              title="Chemistry"
              description="Conduct virtual experiments with molecules, reactions, and lab equipment."
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8 text-green-600" />}
              title="Biology"
              description="Study life processes, genetics, and ecosystems in a virtual environment."
            />
            <FeatureCard
              icon={<Bot className="w-8 h-8 text-red-600" />}
              title="Robotics"
              description="Program and control virtual robots in simulated environments."
            />
            <FeatureCard
              icon={<Code className="w-8 h-8 text-indigo-600" />}
              title="Computer Science"
              description="Learn programming, algorithms, and data structures hands-on."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

export default Home;