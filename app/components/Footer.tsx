'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
                Mayank Bhardwaj
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Data Analyst passionate about transforming raw data into actionable business insights. 
                Specializing in Python, SQL, Power BI, and Machine Learning.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/mayank-bhardwaj-99b252364" 
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-lg"></i>
                </a>
                <a 
                  href="https://github.com/Mayankbhardwaj-20" 
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-github-fill text-lg"></i>
                </a>
                <a 
                  href="mailto:mayankbhardwaj200105@gmail.com"
                  className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-mail-fill text-lg"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Projects</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Skills</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Experience</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Python & SQL</span></li>
                <li><span className="text-gray-400">Power BI & Tableau</span></li>
                <li><span className="text-gray-400">Machine Learning</span></li>
                <li><span className="text-gray-400">Data Visualization</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                2024 Mayank Bhardwaj. All rights reserved.
              </p>
              <p className="text-gray-400">
                Built with passion for data analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
