// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");




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
  ];

  const currentTech = categorizedTech[activeCategory] || technologies;

  // Client logos or references (you can replace with actual client logos)
  const clients = [
    { name: "SaaS Startup", projects: 3 },
    { name: "E-commerce Platform", projects: 2 },
    { name: "FinTech Company", projects: 1 },
    { name: "Healthcare Tech", projects: 2 },
  ];

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

      {/* Stats Section - Enhanced */}
      {/* <div className="relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                          rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div
              className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-8 
                        backdrop-blur-sm border border-gray-700/30 
                        group-hover:border-blue-500/30 transition-all duration-300 
                        group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                                  flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Professional Journey</h3>
                  </div>
                  
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-white to-purple-400 
                                bg-clip-text text-transparent mb-2">
                    4+
                  </div>
                  
                  <div className="text-lg font-semibold text-white mb-3">Years of Experience</div>
                  
                  <p className="text-gray-400 mb-6">
                    Specializing in full-stack development with expertise across modern web technologies, 
                    cloud infrastructure, and agile development practices
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 text-xs font-medium rounded-full 
                                   bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                   text-blue-300 border border-blue-500/30">
                      Full Stack Development
                    </span>
                    <span className="px-3 py-1.5 text-xs font-medium rounded-full 
                                   bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                   text-purple-300 border border-purple-500/30">
                      Cloud Architecture
                    </span>
                    <span className="px-3 py-1.5 text-xs font-medium rounded-full 
                                   bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                   text-blue-300 border border-blue-500/30">
                      Team Leadership
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                          rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div
              className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-8 
                        backdrop-blur-sm border border-gray-700/30 
                        group-hover:border-purple-500/30 transition-all duration-300 
                        group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 
                                  flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Client Experience</h3>
                  </div>
                  
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-white to-blue-400 
                                bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  
                  <div className="text-lg font-semibold text-white mb-3">Successful Projects</div>
                  
                  <p className="text-gray-400 mb-6">
                    Delivered solutions for diverse industries including SaaS, E-commerce, FinTech, 
                    and Healthcare, ensuring client satisfaction and business growth
                  </p>
                  
                  <div className="space-y-3">
                    {clients.map((client, index) => (
                      <div key={index} className="flex items-center justify-between p-3 
                                                bg-gray-800/30 rounded-xl border border-gray-700/30 
                                                hover:border-blue-500/30 transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                                        flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              {client.name.charAt(0)}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-white">
                            {client.name}
                          </span>
                        </div>
                        <div className="text-xs font-semibold px-2.5 py-1 rounded-full 
                                      bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                      text-blue-300">
                          {client.projects} project{client.projects > 1 ? 's' : ''}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Category Filter */}
      <div className="relative z-10 mb-12">
        {/* <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">
            Categorized Technologies
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Filter through my technical skills by category to explore specific areas of expertise
          </p>
        </div> */}
        
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