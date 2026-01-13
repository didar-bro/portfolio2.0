import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Categorize technologies
  const categorizedTech = {
    all: technologies,
    frontend: technologies.filter((tech) =>
      [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "Three.js",
        "HTML5",
        "CSS3",
        "Sass",
      ].includes(tech.name)
    ),
    backend: technologies.filter((tech) =>
      [
        "Node.js",
        "Python",
        "Django",
        "Express.js",
        "GraphQL",
        "REST API",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Firebase",
      ].includes(tech.name)
    ),
    devops: technologies.filter((tech) =>
      ["Docker", "Git", "GitHub", "AWS", "Linux", "Nginx", "CI/CD"].includes(
        tech.name
      )
    ),
    tools: technologies.filter((tech) =>
      [
        "Figma",
        "VS Code",
        "Postman",
        "Jest",
        "Webpack",
        "Babel",
        "npm",
        "Yarn",
      ].includes(tech.name)
    ),
    // New AI/ML category
    aiMl: technologies.filter((tech) =>
      [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenAI / LLM APIs",
        "LangChain",
      ].includes(tech.name)
    ),
  };

  const categories = [
    { id: "all", name: "All Technologies", count: technologies.length },
    {
      id: "frontend",
      name: "Frontend",
      count: categorizedTech.frontend.length,
    },
    { id: "backend", name: "Backend", count: categorizedTech.backend.length },
    {
      id: "devops",
      name: "DevOps & Cloud",
      count: categorizedTech.devops.length,
    },
    {
      id: "tools",
      name: "Tools & Others",
      count: categorizedTech.tools.length,
    },
    // New AI/ML category entry
    {
      id: "aiMl",
      name: "AI/ML",
      count: categorizedTech.aiMl.length,
    },
  ];

  const currentTech = categorizedTech[activeCategory] || technologies;


  return (
    <div className="relative w-full">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-12 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
            Technical Expertise
          </span>
          <div className="w-10 h-px bg-gradient-to-r from-purple-500 to-blue-500"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
            {/* Tech Stack & Experience */}
            Tech Stack
          </span>
        </h2>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Leveraging {technologies.length}+ cutting-edge technologies with 2+
          years of hands-on experience building scalable, production-ready
          applications
        </p>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm 
                       rounded-full border border-gray-700/30"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">
            Mid-Level Full Stack Developer
          </span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="relative z-10 mb-12">
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group px-5 py-2.5 rounded-xl backdrop-blur-sm border transition-all duration-300 
                        flex items-center gap-2 hover:scale-105 active:scale-95
                        ${
                          activeCategory === category.id
                            ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                            : "bg-gray-800/30 border-gray-700/30 hover:border-gray-600/50 hover:shadow-lg"
                        }`}
            >
              <span
                className={`text-sm font-semibold ${
                  activeCategory === category.id
                    ? "text-white"
                    : "text-gray-300 group-hover:text-white"
                }`}
              >
                {category.name}
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-gray-700/50 text-gray-400"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Technology Grid */}
      <div className="relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-6xl mx-auto px-4">
          {currentTech.map((technology) => (
            <div key={technology.name} className="group relative">
              {/* Card background with gradient effect */}
              <div
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                            rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              {/* Technology card */}
              <div
                className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 
                            rounded-xl p-4 backdrop-blur-sm border border-gray-700/30 
                            group-hover:border-blue-500/30 transition-all duration-300 
                            group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] 
                            flex flex-col items-center justify-center h-36"
              >
                {/* 3D Ball Canvas */}
                <div className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BallCanvas icon={technology.icon} />
                </div>

                {/* Technology name */}
                <h3 className="text-white text-center font-medium text-sm">
                  {technology.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");