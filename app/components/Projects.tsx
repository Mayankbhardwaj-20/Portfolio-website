
'use client';

export default function Projects() {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Achieved 87% accuracy using logistic regression & decision trees; reduced false positives by 18%.",
      image: "https://readdy.ai/api/search-image?query=Customer%20analytics%20dashboard%20showing%20churn%20prediction%20models%20with%20colorful%20charts%2C%20machine%20learning%20visualization%2C%20logistic%20regression%20graphs%2C%20professional%20business%20intelligence%20interface%2C%20blue%20and%20green%20color%20scheme&width=500&height=300&seq=project1&orientation=landscape",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      metrics: ["87% Accuracy", "18% Reduction in False Positives"],
      link: "https://github.com/Mayankbhardwaj-20/Customer-Churn-Predictor"
    },
    {
      title: "Walmart Sales Analysis",
      description: "Analyzed 20,000+ rows; uncovered 12% uplift in weekday sales through comprehensive Python analysis.",
      image: "https://readdy.ai/api/search-image?query=Retail%20sales%20analytics%20dashboard%20with%20bar%20charts%20and%20line%20graphs%20showing%20sales%20trends%2C%20Python%20data%20analysis%20visualization%2C%20colorful%20statistical%20charts%2C%20modern%20business%20intelligence%20interface&width=500&height=300&seq=project2&orientation=landscape",
      tech: ["Python", "Pandas", "NumPy", "Seaborn"],
      metrics: ["20,000+ Rows Analyzed", "12% Sales Uplift Identified"],
      link: "https://github.com/Mayankbhardwaj-20/Walmart-Sales-Analysis"
    },
    {
      title: "Adidas Webstore Dashboard",
      description: "Built comprehensive 3-page Power BI dashboard with 8+ KPIs; helped boost Q3 urban sales by 22%.",
      image: "https://readdy.ai/api/search-image?query=E-commerce%20analytics%20dashboard%20with%20multiple%20KPI%20charts%2C%20Power%20BI%20interface%20showing%20sales%20performance%2C%20colorful%20data%20visualizations%20for%20retail%20analytics%2C%20professional%20business%20dashboard%20design&width=500&height=300&seq=project3&orientation=landscape",
      tech: ["Power BI", "DAX", "Excel", "SQL"],
      metrics: ["3-Page Dashboard", "8+ KPIs", "22% Sales Boost"],
      link: "https://github.com/Mayankbhardwaj-20/Adidas-Webstore-analysis"
    }
  ];
  {
      title: "Mutual Fund Planning and Analysis Using Historical Stock Data",
      description: "Built a Python-based mutual fund planner; optimized stock picks using ROI and volatility, projecting ₹860K growth over 10 years.",
      image: "https://www.freepik.com/pikaso/explore/156493",
      tech: ["Python","Numpy","Pandas","Matplotlib"],
      metrics: ["Return on Investment (ROI)", "Volatility", "Future Value", "Compounding Growth"],
      link: "https://github.com/Mayankbhardwaj-20/Mutual-Fund"
    }
  ];
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore my data analytics projects that demonstrate real-world problem-solving and business impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Data Analytics
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Metrics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-external-link-line"></i>
                    </div>
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/Mayankbhardwaj-20" 
              target="_blank"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-github-fill"></i>
              </div>
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
