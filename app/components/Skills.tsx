'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Tools",
      icon: "ri-code-line",
      color: "blue",
      skills: ["Python", "SQL", "Power BI", "Tableau", "Excel", "Git"]
    },
    {
      title: "Python Libraries",
      icon: "ri-brain-line",
      color: "green",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Seaborn", "Matplotlib"]
    },
    {
      title: "Data Techniques",
      icon: "ri-bar-chart-line",
      color: "purple",
      skills: ["EDA", "ML Modeling", "DAX", "ETL", "Statistical Analysis"]
    },
    {
      title: "Soft Skills",
      icon: "ri-team-line",
      color: "orange",
      skills: ["Data Storytelling", "Reporting", "Teamwork", "Problem Solving"]
    }
  ];

  const dashboards = [
    {
      title: "Power BI Dashboards",
      description: "Sales analysis, customer segmentation, KPI tracking",
      image: "https://readdy.ai/api/search-image?query=Power%20BI%20dashboard%20interface%20showing%20multiple%20charts%20and%20KPI%20metrics%2C%20sales%20analytics%20visualization%2C%20colorful%20business%20intelligence%20dashboard%20with%20graphs%20and%20data%20tables&width=400&height=250&seq=powerbi&orientation=landscape",
      tool: "Power BI"
    },
    {
      title: "Tableau Visualizations",
      description: "Regional trends, product performance analysis",
      image: "https://readdy.ai/api/search-image?query=Tableau%20dashboard%20showing%20regional%20sales%20trends%20with%20interactive%20maps%20and%20performance%20charts%2C%20colorful%20data%20visualization%20interface%2C%20business%20analytics%20dashboard&width=400&height=250&seq=tableau&orientation=landscape",
      tool: "Tableau"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800",
      orange: "bg-orange-50 border-orange-200 text-orange-800"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technical skills and tools I use to transform data into actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${category.color === 'blue' ? 'bg-blue-100' : category.color === 'green' ? 'bg-green-100' : category.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'}`}>
                  <i className={`${category.icon} text-xl ${getIconColor(category.color)}`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
