export function WorkSection() {
  const projects = [
    {
      title: "Monzo Design System",
      description: "Designing a multi-app brand system for a microfinance ecosystem",
      category: "Design System"
    },
    {
      title: "Kiva Microfunds", 
      description: "Building a lending platform for emerging markets",
      category: "Product Design"
    },
    {
      title: "Monzo Business Banking",
      description: "Designing banking tools for small businesses",
      category: "Product Design"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-white text-2xl mb-2">Work</h2>
      <p className="text-gray-400 mb-12">
        Here are some of the projects I've worked on over the last couple of years.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors cursor-pointer group"
          >
            <div className="aspect-video bg-gray-700 rounded mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Project Preview</span>
            </div>
            <h3 className="text-white text-lg mb-2 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              {project.description}
            </p>
            <span className="text-blue-400 text-xs uppercase tracking-wide">
              {project.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}