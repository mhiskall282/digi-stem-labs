import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
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
import Auth from './pages/Auth';
import Leaderboard from './pages/Leaderboard';
import Achievements from './pages/Achievements';
import Settings from './pages/Settings';
//import Playground from './pages/Playground';
import VirtualLab from './pages/VirtualLab';
import Mentorship from './pages/Mentorship';
import Events from './pages/Events';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/labs" element={<PrivateRoute><Labs /></PrivateRoute>} />
              <Route path="/labs/:id" element={<PrivateRoute><LabDetails /></PrivateRoute>} />
              <Route path="/virtual-lab/:id" element={<PrivateRoute><VirtualLab /></PrivateRoute>} />
              <Route path="/certificates" element={<PrivateRoute><Certificates /></PrivateRoute>} />
              <Route path="/community" element={<PrivateRoute><Community /></PrivateRoute>} />
              <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/resources" element={<PrivateRoute><Resources /></PrivateRoute>} />
              <Route path="/ai-tools" element={<PrivateRoute><AITools /></PrivateRoute>} />
              <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
              <Route path="/achievements" element={<PrivateRoute><Achievements /></PrivateRoute>} />
              <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
              {/* <Route path="/playground" element={<PrivateRoute><Playground /></PrivateRoute>} /> */}
              <Route path="/mentorship" element={<PrivateRoute><Mentorship /></PrivateRoute>} />
              <Route path="/events" element={<PrivateRoute><Events /></PrivateRoute>} />
            </Routes>
            <ChatBot />
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
