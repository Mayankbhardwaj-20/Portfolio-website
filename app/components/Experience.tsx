'use client';

export default function Experience() {
  const experiences = [
    {
      company: "TCS",
      role: "Virtual Intern",
      period: "2024",
      description: "Created 5+ dashboards, automated reports, delivered finance/sales insights.",
      achievements: [
        "Created 5+ interactive dashboards",
        "Automated reporting processes", 
        "Delivered actionable finance insights",
        "Contributed to sales analytics projects"
      ],
      logo: "https://readdy.ai/api/search-image?query=TCS%20company%20logo%20on%20clean%20white%20background%2C%20professional%20corporate%20branding%2C%20simple%20and%20clean%20design&width=100&height=100&seq=tcs-logo&orientation=squarish"
    },
    {
      company: "Deloitte",
      role: "Virtual Intern",
      period: "2024",
      description: "Processed large datasets, built dashboards, contributed to cost-saving projects.",
      achievements: [
        "Processed complex large datasets",
        "Built comprehensive dashboards",
        "Contributed to cost-saving initiatives",
        "Collaborated on data-driven projects"
      ],
      logo: "https://readdy.ai/api/search-image?query=Deloitte%20company%20logo%20on%20clean%20white%20background%2C%20professional%20consulting%20firm%20branding%2C%20simple%20and%20clean%20design&width=100&height=100&seq=deloitte-logo&orientation=squarish"
    }
  ];

  const certifications = [
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco",
      icon: "ri-bar-chart-line",
      color: "blue"
    },
    {
      title: "Financial Analytics with Python",
      issuer: "Infosys",
      icon: "ri-line-chart-line",
      color: "green"
    },
    {
      title: "Intro to Machine Learning",
      issuer: "Kaggle",
      icon: "ri-brain-line",
      color: "purple"
    },
    {
      title: "SQL Fundamentals",
      issuer: "Simplilearn",
      icon: "ri-database-line",
      color: "orange"
    },
    {
      title: "Career Essentials in Analytics",
      issuer: "LinkedIn",
      icon: "ri-linkedin-fill",
      color: "blue"
    }
  ];

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBgColor = (color: string) => {
    const colors = {
      blue: "bg-blue-50",
      green: "bg-green-50",
      purple: "bg-purple-50",
      orange: "bg-orange-50"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience & Certifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional experience and industry certifications that validate my expertise
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-16 h-16 rounded-lg object-cover object-top"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{exp.role}</h4>
                          <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 flex items-center justify-center">
                              <i className="ri-check-line text-green-600"></i>
                            </div>
                            <span className="text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${getBgColor(cert.color)}`}>
                    <i className={`${cert.icon} text-xl ${getIconColor(cert.color)}`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h4>
                  <p className="text-gray-600 font-medium">{cert.issuer}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm text-green-600 font-medium flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-verified-badge-line"></i>
                      </div>
                      Certified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}