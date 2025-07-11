'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Moon, Sun, Github, Linkedin, Globe } from 'lucide-react';

export default function LinkHub() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const links = [
    {
      title: 'Portfolio Website',
      description: 'Lihat karya dan proyek terbaru saya',
      url: '#',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'GitHub',
      description: 'Kode dan repositori open source',
      url: 'https://github.com/deliarto',
      icon: <Github className="w-5 h-5" />,
      color: 'from-gray-700 to-gray-900'
    },
    {
      title: 'LinkedIn',
      description: 'Profil profesional dan networking',
      url: 'https://www.linkedin.com/in/arfan-deliarto/',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Dark Mode Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={toggleDarkMode}
          className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
            isDarkMode
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
          }`}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-md">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="relative mb-6">
            <div className={`w-32 h-32 mx-auto rounded-full p-1 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600'
            }`}>
              <div className={`w-full h-full rounded-full overflow-hidden ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <Image
                  src="/arfan.jpeg"
                  alt="Profile Picture"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-green-400' : 'bg-green-500'
            }`}>
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>

          <h1 className={`text-3xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Arfan Developer
          </h1>
          
          <p className={`text-lg mb-4 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Full Stack Developer & UI/UX Enthusiast
          </p>
          
          <p className={`text-sm leading-relaxed ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Passionate about creating beautiful and functional web experiences. 
            Always learning, always building something new.
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`block w-full p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl group ${
                isDarkMode
                  ? 'bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700'
                  : 'bg-white/80 hover:bg-white backdrop-blur-sm border border-gray-200 shadow-md'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${link.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold text-lg ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {link.title}
                  </h3>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {link.description}
                  </p>
                </div>
                <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className={`text-sm ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            Made with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-4 w-24 h-24 rounded-full blur-xl opacity-20 ${
          isDarkMode ? 'bg-purple-500' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute bottom-1/4 -right-4 w-32 h-32 rounded-full blur-xl opacity-20 ${
          isDarkMode ? 'bg-pink-500' : 'bg-purple-400'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-10 ${
          isDarkMode ? 'bg-blue-500' : 'bg-indigo-400'
        }`}></div>
      </div>
    </div>
  );
}