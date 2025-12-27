// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Didar</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I develop software and webapplication
//           </p>
//         </div>
//       </div>

//       {/* <ComputersCanvas /> */}

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import { motion } from "framer-motion";
import { styles } from "../styles";
import profileImg from "../assets/didar-removebg.png";

const Hero = () => {
  // Particle animation for background
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 2,
  }));

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#915EFF]"
            style={{
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content container - CENTERED VERTICALLY AND HORIZONTALLY */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`max-w-7xl w-full ${styles.paddingX}`}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-60">            
            {/* LEFT SIDE – TEXT - CENTERED CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1"
            >
              {/* Vertical line and dot - centered on mobile, left on desktop */}
              <div className="flex flex-row items-center gap-5 mb-6">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="w-5 h-5 rounded-full bg-[#915EFF]"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 120 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="w-1 h-40 violet-gradient hidden sm:block"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <h1 className={`${styles.heroHeadText} text-white`}>
                    Hi, I'm{" "}
                    <motion.span
                      className="text-[#915EFF] inline-block"
                      animate={{ 
                        textShadow: [
                          "0 0 8px rgba(145, 94, 255, 0.5)",
                          "0 0 16px rgba(145, 94, 255, 0.8)",
                          "0 0 8px rgba(145, 94, 255, 0.5)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Didar
                    </motion.span>
                  </h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className={`${styles.heroSubText} mt-4 text-white-100 max-w-xl`}
                  >
                    I develop software and modern web applications
                  </motion.p>
                </motion.div>
              </div>

              {/* CTA button - Links to Work section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-8"
              >
                <a href="#work">  {/* Changed from #works to #work */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-[#915EFF] to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  >
                    View My Work
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE – IMAGE - Hidden on mobile, centered on desktop */}
            <div className="flex-1 hidden lg:flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: 0.4 
                }}
                className="relative"
              >
                {/* Orbital rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-[#915EFF]/30"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
                
                <motion.div
                  className="absolute inset-[-20px] rounded-full border border-[#915EFF]/20"
                  animate={{
                    rotate: -360,
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{
                    rotate: {
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />

                {/* Pulsing glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4],
                    boxShadow: [
                      "0 0 60px rgba(145, 94, 255, 0.3)",
                      "0 0 90px rgba(145, 94, 255, 0.6)",
                      "0 0 60px rgba(145, 94, 255, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915EFF]/20 to-purple-500/20 blur-xl"
                />

                {/* Floating image with 3D tilt effect */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotateX: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                  }}
                >
                  <motion.div className="relative">
                    {/* Water ripple effect - repeating */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{ 
                        opacity: [0, 0.6, 0],
                        scale: [1, 1.5, 2]
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 3.5
                      }}
                      style={{
                        border: "3px solid rgba(145, 94, 255, 0.5)",
                        boxShadow: "0 0 30px rgba(145, 94, 255, 0.3)"
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{ 
                        opacity: [0, 0.4, 0],
                        scale: [1, 1.8, 2.5]
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 3.7
                      }}
                      style={{
                        border: "2px solid rgba(145, 94, 255, 0.3)",
                        boxShadow: "0 0 20px rgba(145, 94, 255, 0.2)"
                      }}
                    />
                    
                    <motion.img
                      src={profileImg}
                      alt="Didar profile"
                      className="relative w-[320px] h-[320px] object-cover rounded-full border-4 border-[#915EFF] shadow-2xl"
                      animate={{ rotateY: [0, 360] }}
                      transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 3.8
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* SCROLL INDICATOR - positioned at bottom */}
      <div className="absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center">
        <a href="#work">  {/* Changed from #about to #work */}
          <motion.div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ 
                y: [0, 24, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </motion.div>
        </a>
      </div>

      {/* Decorative corner elements - optional, remove if too busy */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-[#915EFF]/30 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-[#915EFF]/30 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
    </section>
  );
};

export default Hero;