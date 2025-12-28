// import React, { useState } from "react";
// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";

// // Import your images
// import carrent from "../assets/carrent.png"; // Update with your actual paths
// import jobit from "../assets/jobit.png";
// import tripguide from "../assets/tripguide.png";
// import { projects } from "../constants";

// // These styles would need to be imported or defined inline
// const styles = {
//   sectionSubText: "text-lg text-purple-400 font-semibold tracking-wider uppercase",
//   sectionHeadText: "text-4xl md:text-5xl font-bold text-white"
// };

// const SectionWrapper = (Component, idName) =>
//   function HOC() {
//     return <Component />;
//   };

// // Animation variants
// const fadeIn = (direction, type, delay, duration) => ({
//   hidden: {
//     x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//     y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//     opacity: 0,
//   },
//   show: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: type,
//       delay: delay,
//       duration: duration,
//       ease: "easeOut",
//     },
//   },
// });

// const textVariant = () => ({
//   hidden: {
//     y: 50,
//     opacity: 0,
//   },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       duration: 1.25,
//     },
//   },
// });

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   images,
//   source_code_link,
//   live_link,
//   details,
//   onDetailsClick,
// }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleLiveLinkClick = (e) => {
//     e.stopPropagation();
//     if (live_link) {
//       window.open(live_link, "_blank", "noopener noreferrer");
//     }
//   };

//   const handleDetailsClick = (e) => {
//     e.stopPropagation();
//     if (onDetailsClick) {
//       onDetailsClick({
//         name,
//         description,
//         tags,
//         images,
//         live_link,
//         source_code_link,
//         details
//       });
//     } else if (details) {
//       window.open(details, "_blank", "noopener noreferrer");
//     }
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} initial="hidden" animate="show">
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-gray-900 p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-800 hover:border-gray-700"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Image Gallery Section */}
//         <div className="relative w-full h-[230px] group overflow-hidden rounded-2xl">
//           {/* Current Image */}
//           <img
//             src={images[currentImageIndex]}
//             alt={`${name} - Image ${currentImageIndex + 1}`}
//             className="w-full h-full object-cover transition-opacity duration-500"
//           />

//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//           {/* Image Navigation Buttons (shown on hover) */}
//           {isHovered && images.length > 1 && (
//             <>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   prevImage();
//                 }}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
//                 title="Previous Image"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   nextImage();
//                 }}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
//                 title="Next Image"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </>
//           )}

//           {/* Image Indicator Dots */}
//           {images.length > 1 && (
//             <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
//               {images.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setCurrentImageIndex(idx);
//                   }}
//                   className={`w-2 h-2 rounded-full transition-all duration-200 ${
//                     idx === currentImageIndex
//                       ? "bg-white scale-125"
//                       : "bg-white/50 hover:bg-white/80"
//                   }`}
//                   title={`View image ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Project Details */}
//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[24px] mb-2">{name}</h3>
//           <p className="text-gray-400 text-[14px] leading-relaxed line-clamp-3">
//             {description}
//           </p>
//         </div>

//         {/* Tags */}
//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag, tagIndex) => (
//             <span
//               key={`${name}-${tag.name}-${tagIndex}`}
//               className={`text-[12px] font-medium px-3 py-1 rounded-full ${tag.color} bg-gray-800/50 backdrop-blur-sm border border-gray-700`}
//             >
//               {tag.name}
//             </span>
//           ))}
//         </div>

//         {/* Image Counter */}
//         {images.length > 1 && (
//           <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
//             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
//             </svg>
//             <span>{currentImageIndex + 1} / {images.length}</span>
//           </div>
//         )}

//         {/* Action Links */}
//         <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-800">
//           {/* Live Demo Link */}
//           {live_link && (
//             <button
//               onClick={handleLiveLinkClick}
//               className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium group"
//             >
//               <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
//                 <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
//               </svg>
//               Live Demo
//             </button>
//           )}

//           {/* Details Link */}
//           <button
//             onClick={handleDetailsClick}
//             className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium group"
//           >
//             <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
//               <path
//                 fillRule="evenodd"
//                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             Details
//           </button>

//           {/* Source Code Link */}
//           <button
//             onClick={() => window.open(source_code_link, "_blank", "noopener noreferrer")}
//             className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium group"
//           >
//             <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//             Code
//           </button>
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleDetailsClick = (project) => {
//     setSelectedProject(project);
//     // Show detailed modal or expand view
//     console.log("Selected project:", project);
//     alert(`Project: ${project.name}\n\n${project.description}\n\nLive Demo: ${project.live_link || "Not available"}\nSource Code: ${project.source_code_link}`);
//   };

//   return (
//     <div className="relative z-0 bg-gray-950 py-16 px-4 sm:px-6 lg:px-8" id="works">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           variants={textVariant()}
//           initial="hidden"
//           animate="show"
//           className="text-center mb-12"
//         >
//           <p className={styles.sectionSubText}>
//             My work
//           </p>
//           <h2 className={styles.sectionHeadText}>
//             Projects<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">.</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
//         </motion.div>

//         {/* Section Description */}
//         <div className="w-full flex justify-center mb-16">
//           <motion.p
//             variants={fadeIn("", "", 0.1, 1)}
//             initial="hidden"
//             animate="show"
//             className="mt-3 text-gray-400 text-center text-lg max-w-3xl leading-relaxed"
//           >
//             Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
//           </motion.p>
//         </div>

//         {/* Projects Grid */}
//         <div className="mt-12 flex flex-wrap justify-center gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard
//               key={`project-${index}`}
//               index={index}
//               {...project}
//               onDetailsClick={handleDetailsClick}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Export the wrapped component
// export default SectionWrapper(Works, "works");

import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import carrent from "../assets/carrent.png"; // Update with your actual paths
import jobit from "../assets/jobit.png";
import tripguide from "../assets/tripguide.png";
import { projects } from "../constants";

// These styles would need to be imported or defined inline
const styles = {
  sectionSubText:
    "text-lg text-purple-400 font-semibold tracking-wider uppercase",
  sectionHeadText: "text-4xl md:text-5xl font-bold text-white",
};

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return <Component />;
  };

// Animation variants
const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: type,
      delay: delay,
      duration: duration,
      ease: "easeOut",
    },
  },
});

const textVariant = () => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
    },
  },
});

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,
  source_code_link,
  live_link,
  details,
  isExpanded,
  onToggleExpand,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleLiveLinkClick = (e) => {
    e.stopPropagation();
    if (live_link) {
      window.open(live_link, "_blank", "noopener noreferrer");
    }
  };

  const handleDetailsClick = (e) => {
    e.stopPropagation();
    onToggleExpand(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
    >
      <div
        className={`bg-gray-900 p-5 rounded-2xl w-full hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-800 hover:border-gray-700 ${
          isExpanded ? "sm:col-span-2 lg:col-span-3" : "sm:w-[360px]"
        }`}
        onMouseEnter={() => !isExpanded && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Gallery Section */}
        <div
          className={`relative w-full overflow-hidden rounded-2xl group ${
            isExpanded ? "h-[500px] md:h-[600px]" : "h-[230px]"
          }`}
        >
          {/* Current Image */}
          <img
            src={images[currentImageIndex]}
            alt={`${name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Image Navigation Buttons - Collapsed View */}
          {!isExpanded && isHovered && images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-10"
                title="Previous Image"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-10"
                title="Next Image"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image Navigation Icons - Expanded View */}
          {isExpanded && images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 z-10 shadow-xl hover:scale-110 border-2 border-white/20 group/btn backdrop-blur-sm"
                title="Previous Image"
              >
                <svg
                  className="w-7 h-7 group-hover/btn:-translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 z-10 shadow-xl hover:scale-110 border-2 border-white/20 group/btn backdrop-blur-sm"
                title="Next Image"
              >
                <svg
                  className="w-7 h-7 group-hover/btn:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image Indicator Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    idx === currentImageIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  title={`View image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="mt-5">
          {/* Tags - Show before title when expanded */}
          {isExpanded && (
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((tag, tagIndex) => (
                <span
                  key={`${name}-${tag.name}-${tagIndex}-top`}
                  className={`text-[12px] font-medium px-3 py-1 rounded-full ${tag.color} bg-gray-800/50 backdrop-blur-sm border border-gray-700`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          <h3 className="text-white font-bold text-[24px] mb-2">{name}</h3>
          <p
            className={`text-gray-400 text-[14px] leading-relaxed ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Expanded Details Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Image Counter */}
              {images.length > 1 && (
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <svg
                      className="w-5 h-5 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      Image {currentImageIndex + 1} of {images.length}
                    </span>
                  </div>
                </div>
              )}

              {/* Links in Expanded View */}
              <div className="mt-4 pt-4 border-t border-gray-800 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
                {live_link && (
                  <a
                    href={live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    View Live Demo
                  </a>
                )}
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium border border-gray-700 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Source Code
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tags */}
        {!isExpanded && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <span
                key={`${name}-${tag.name}-${tagIndex}`}
                className={`text-[12px] font-medium px-3 py-1 rounded-full ${tag.color} bg-gray-800/50 backdrop-blur-sm border border-gray-700`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && !isExpanded && (
          <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              {currentImageIndex + 1} / {images.length}
            </span>
          </div>
        )}

        {/* Action Links - Collapsed View */}
        {!isExpanded && (
          <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-800">
            {/* Live Demo Link */}
            {live_link && (
              <button
                onClick={handleLiveLinkClick}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium group"
              >
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live Demo
              </button>
            )}

            {/* Details Link */}
            <button
              onClick={handleDetailsClick}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium group"
            >
              <svg
                className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Details
            </button>

            {/* Source Code Link */}
            <button
              onClick={() =>
                window.open(source_code_link, "_blank", "noopener noreferrer")
              }
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium group"
            >
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Code
            </button>
          </div>
        )}

        {/* Collapse Button - Expanded View */}
        {isExpanded && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleDetailsClick}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Show Less
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="relative z-0 bg-gray-950 py-16 px-4 sm:px-6 lg:px-8"
      id="works"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
              Projects{" "}
            </span>
          </h2>
        </motion.div>

        {/* Section Description */}
        <div className="w-full flex justify-center mb-16">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            animate="show"
            className="mt-3 text-gray-400 text-center text-lg max-w-3xl leading-relaxed"
          >
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              isExpanded={expandedIndex === index}
              onToggleExpand={handleToggleExpand}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Export the wrapped component
export default SectionWrapper(Works, "works");
