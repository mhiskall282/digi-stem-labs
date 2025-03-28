import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF, Environment, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Download, Share2, Settings, ChevronRight } from 'lucide-react';

function Atom({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4);
    meshRef.current.rotation.y = Math.sin(t / 4);
    meshRef.current.position.y = Math.sin(t / 1.5) * 0.1;
  });

  return (
    <group position={position} scale={scale}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#2aa3ff" metalness={0.6} roughness={0.2} />
        <group>
          {[0, 1, 2].map((i) => (
            <mesh key={i} rotation={[0, (Math.PI * 2 / 3) * i, 0]}>
              <torusGeometry args={[2, 0.1, 16, 100]} />
              <meshStandardMaterial color="#f43f5e" metalness={0.6} roughness={0.2} />
            </mesh>
          ))}
        </group>
      </mesh>
    </group>
  );
}

function Electrons({ count = 30 }) {
  const particles = useRef([]);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    particles.current.forEach((particle, i) => {
      const x = Math.cos(t + i * 0.1) * 3;
      const y = Math.sin(t + i * 0.1) * 3;
      const z = Math.cos(t + i * 0.1) * 3;
      particle.position.set(x, y, z);
    });
  });

  return (
    <group>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} ref={(el) => (particles.current[i] = el)}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
}

const VirtualLab = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [showSettings, setShowSettings] = React.useState(false);
  const [parameters, setParameters] = React.useState({
    energy: 50,
    velocity: 50,
    temperature: 50,
  });

  const steps = [
    { title: 'Initial State', description: 'Observe the atomic structure' },
    { title: 'Energy Input', description: 'Increase energy levels' },
    { title: 'Electron Excitation', description: 'Watch electron behavior' },
    { title: 'Analysis', description: 'Study the results' },
  ];

  const handleParameterChange = (param, value) => {
    setParameters(prev => ({ ...prev, [param]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
            <div className="h-[600px] relative">
              <Canvas>
                <Suspense fallback={null}>
                  <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                  <Environment preset="sunset" />
                  <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                  
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1.5} />
                  <pointLight position={[-10, -10, -10]} intensity={0.5} />
                  
                  <group>
                    <Atom />
                    <Electrons />
                  </group>
                  
                  <OrbitControls enablePan={false} enableZoom={true} maxDistance={20} minDistance={4} />
                </Suspense>
              </Canvas>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                <div className="flex items-center justify-center space-x-6">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                  >
                    <RotateCcw size={20} className="text-white" />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-4 rounded-full bg-primary-600 hover:bg-primary-700 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause size={24} className="text-white" />
                    ) : (
                      <Play size={24} className="text-white" />
                    )}
                  </button>
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                  >
                    <Settings size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Simulation Progress</h2>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg transition-colors ${
                      currentStep === index
                        ? 'bg-primary-900/50 border-l-4 border-primary-500'
                        : 'bg-gray-700'
                    }`}
                  >
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="text-sm text-gray-300">{step.description}</p>
                    {currentStep === index && (
                      <div className="mt-2 h-1 w-full bg-gray-600 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary-500 rounded-full transition-all duration-1000"
                          style={{ width: `${isPlaying ? '100%' : '0%'}` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Parameters</h2>
                <div className="flex space-x-2">
                  <button className="text-xs px-3 py-1 rounded-full bg-primary-600 text-white">
                    Reset
                  </button>
                  <button className="text-xs px-3 py-1 rounded-full bg-success-600 text-white">
                    Save
                  </button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Energy Level</span>
                    <span>{parameters.energy}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={parameters.energy}
                    onChange={(e) => handleParameterChange('energy', e.target.value)}
                    className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Particle Velocity</span>
                    <span>{parameters.velocity}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={parameters.velocity}
                    onChange={(e) => handleParameterChange('velocity', e.target.value)}
                    className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Temperature</span>
                    <span>{parameters.temperature}K</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={parameters.temperature}
                    onChange={(e) => handleParameterChange('temperature', e.target.value)}
                    className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Data Export</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors">
                  <Download size={20} />
                  <span>Export Results</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 bg-accent-600 hover:bg-accent-700 text-white py-2 px-4 rounded-lg transition-colors">
                  <Share2 size={20} />
                  <span>Share Simulation</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualLab;
