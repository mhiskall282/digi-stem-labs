import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Certificate } from '../types';

const dummyCertificates: Certificate[] = [
  {
    id: '1',
    title: 'Quantum Mechanics Master',
    issueDate: '2025-03-15',
    labId: '1',
    blockchain: 'Ethereum',
    tokenId: '0x123456789',
  },
  {
    id: '2',
    title: 'Advanced Chemistry Expert',
    issueDate: '2025-03-10',
    labId: '2',
    blockchain: 'Polygon',
    tokenId: '0x987654321',
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Blockchain Certificates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <Award className="w-12 h-12 text-blue-600" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(cert.issueDate).toLocaleDateString()}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>Blockchain: {cert.blockchain}</p>
                <p>Token ID: {cert.tokenId}</p>
              </div>
              <button className="mt-4 w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                View on Chain
                <ExternalLink size={16} className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;