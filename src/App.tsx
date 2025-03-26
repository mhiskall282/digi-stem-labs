import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import Labs from './pages/Labs';
import Certificates from './pages/Certificates';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources';
import LabDetails from './pages/LabDetails';
import AITools from './pages/AITools';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/labs/:id" element={<LabDetails />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/ai-tools" element={<AITools />} />
          </Routes>
          <ChatBot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;