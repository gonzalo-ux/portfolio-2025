import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TalksSection() {
  const talks = [
    {
      title: "Config 2024, San Francisco U.S.A",
      subtitle: "Designing a multi-app brand system for a microfinance ecosystem",
      description: "How we built a design system that works across different products, markets, and user needs while maintaining a cohesive brand experience. I shared our approach to creating scalable design tokens, component libraries, and governance processes that enabled our teams to ship faster while maintaining quality.",
      image: "https://images.unsplash.com/photo-1560523159-94c9d18bcf27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtpbmclMjBzdGFnZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTk0Mjg2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Schema 2022, London U.K",
      subtitle: "Designing a multi-app brand system for a microfinance ecosystem",
      description: "A deep dive into the challenges of building design systems for financial products across different markets. I explored how we handled localization, accessibility requirements, and regulatory constraints while maintaining design consistency.",
      image: "https://images.unsplash.com/photo-1582192493926-93f4847e1323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBjb25mZXJlbmNlJTIwdGVjaCUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTk0Mjg2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-white text-2xl mb-12">Talks</h2>
      
      <div className="space-y-16">
        {talks.map((talk, index) => (
          <div key={index} className="space-y-6">
            <div>
              <h3 className="text-blue-400 text-lg mb-2">{talk.title}</h3>
              <h4 className="text-white text-xl mb-4">{talk.subtitle}</h4>
              <p className="text-gray-400 max-w-3xl leading-relaxed">
                {talk.description}
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <ImageWithFallback
                src={talk.image}
                alt={`${talk.title} conference presentation`}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}