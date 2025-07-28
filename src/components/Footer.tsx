import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700/50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Développé avec</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>et</span>
            <Code className="w-4 h-4 text-blue-500" />
            <span>par Ibrahim Berisha</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2024 Ibrahim Berisha. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;