export function ArticlesSection() {
  const articles = [
    {
      title: "Building more scalable to Pattern library with systematic approach",
      platform: "Medium",
      year: "2023"
    },
    {
      title: "Design Tokens in the design system",
      platform: "Medium", 
      year: "2023"
    },
    {
      title: "How to improve Design Tokens in Figma",
      platform: "Medium",
      year: "2023"
    },
    {
      title: "Schema: A multi-platform design system for Figma",
      platform: "Medium",
      year: "2022"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-white text-2xl mb-12">Articles</h2>
      
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div 
            key={index} 
            className="flex justify-between items-start py-4 border-b border-gray-800 hover:border-gray-700 transition-colors cursor-pointer group"
          >
            <div className="flex-1">
              <h3 className="text-white text-lg group-hover:text-blue-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {article.platform}
              </p>
            </div>
            <span className="text-gray-500 text-sm ml-4">
              {article.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}