'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'var(--font-pacifico)' }}>
            Mayank
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Experience</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Contact</a>
          </div>

          <button className="md:hidden p-2 cursor-pointer">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-menu-line text-xl"></i>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
