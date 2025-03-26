import React from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon, Home, Brain, Award, Users, Menu } from 'lucide-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BeakerIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">DigiSTEMLab</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/labs" className="nav-link">
              <BeakerIcon size={20} />
              <span>Virtual Labs</span>
            </Link>
            <Link to="/ai-tools" className="nav-link">
              <Brain size={20} />
              <span>AI Tools</span>
            </Link>
            <Link to="/certificates" className="nav-link">
              <Award size={20} />
              <span>Certificates</span>
            </Link>
            <Link to="/community" className="nav-link">
              <Users size={20} />
              <span>Community</span>
            </Link>
            <DarkModeSwitch
              checked={darkMode}
              onChange={toggleDarkMode}
              size={24}
              className="text-gray-600 dark:text-gray-300"
            />
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
          <Link to="/" className="mobile-nav-link">Home</Link>
          <Link to="/labs" className="mobile-nav-link">Virtual Labs</Link>
          <Link to="/ai-tools" className="mobile-nav-link">AI Tools</Link>
          <Link to="/certificates" className="mobile-nav-link">Certificates</Link>
          <Link to="/community" className="mobile-nav-link">Community</Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;