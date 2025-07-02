// import React from 'react';
import { Github, Linkedin, Mail, Heart, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Neha Kumari
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Frontend Developer & UI/UX Designer passionate about creating 
              beautiful, user-friendly web applications and innovative digital experiences.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <GraduationCap size={16} />
              <span className="text-sm">B.Tech CSE Graduate (2025)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/nehatkr"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/neha-tkr/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="nehath8340@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Open to frontend development roles, UI/UX design opportunities, and exciting collaborations
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>by Neha Kumari © 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;