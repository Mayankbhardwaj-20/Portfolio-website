'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20young%20data%20analyst%20working%20with%20multiple%20computer%20screens%20showing%20data%20visualizations%20and%20analytics%20dashboards%2C%20modern%20office%20environment%20with%20charts%20and%20graphs%2C%20clean%20business%20attire%2C%20focused%20and%20confident%20expression%2C%20blue%20and%20white%20color%20scheme&width=600&height=600&seq=about-profile&orientation=squarish"
                alt="Mayank Bhardwaj"
                className="rounded-2xl shadow-xl w-full object-cover object-top"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Turning Data Into Insights</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a passionate data analytics student, I specialize in extracting meaningful insights from complex datasets. 
                My journey in data science combines technical expertise with business acumen to deliver solutions that drive real impact.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center mb-3">
                    <i className="ri-bar-chart-line text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Data Analysis</h4>
                  <p className="text-sm text-gray-600">Expert in Python, SQL, and statistical modeling</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center mb-3">
                    <i className="ri-dashboard-line text-green-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Visualization</h4>
                  <p className="text-sm text-gray-600">Power BI, Tableau, and interactive dashboards</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center mb-3">
                    <i className="ri-brain-line text-purple-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Machine Learning</h4>
                  <p className="text-sm text-gray-600">Predictive modeling and pattern recognition</p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center mb-3">
                    <i className="ri-presentation-line text-orange-600 text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Storytelling</h4>
                  <p className="text-sm text-gray-600">Communicating insights through compelling narratives</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/Mayankbhardwaj-20" 
                  target="_blank"
                  className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-github-fill"></i>
                  </div>
                  View GitHub
                </a>
                <a 
                  href="https://docs.google.com/document/d/1NN54vm6CwiGRg2VZ-2MjtWCFoF_YLN47/edit?usp=sharing&ouid=111900315595381207695&rtpof=true&sd=true" 
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-download-line"></i>
                  </div>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
