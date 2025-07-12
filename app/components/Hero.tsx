'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20data%20analytics%20workspace%20with%20multiple%20computer%20monitors%20displaying%20colorful%20charts%20graphs%20and%20data%20visualizations%2C%20sleek%20office%20environment%20with%20blue%20and%20purple%20lighting%2C%20clean%20minimal%20background%20with%20statistical%20elements%20floating%2C%20professional%20technology%20atmosphere&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-300">Mayank Bhardwaj</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2">Data Analyst | Aspiring Data Scientist</p>
          <p className="text-lg text-blue-200">Python • SQL • Power BI • Machine Learning</p>
        </div>
        
        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
          I'm a data analytics student passionate about solving real-world problems using data. 
          With hands-on experience in Python, SQL, Power BI, and Tableau, I turn raw data into actionable business insights.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            View My Projects
          </a>
          <a 
            href="#contact" 
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-arrow-down-line text-white text-2xl"></i>
        </div>
      </div>
    </section>
  );
}