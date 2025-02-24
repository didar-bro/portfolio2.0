import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Certifications = () => {
  const certificates = [
    { title: "Certificate 1", image: "certifications/python.jpeg", description: "Programming in Python" },
    { title: "Certificate 2", image: "certifications/database.jpeg", description: "Introduction to Databases for Back-End Development" },
    { title: "Certificate 3", image: "certifications/backend.jpeg", description: "Introduction to Back-End Development" },
    { title: "Certificate 4", image: "certifications/fullstack.jpeg", description: "The Full Stack" },
    { title: "Certificate 5", image: "certifications/vertioncontrol.jpeg", description: "Version Control" },
    { title: "Certificate 6", image: "certifications/django.jpeg", description: "Django Web Framework" },
    { title: "Certificate 7", image: "certifications/api.jpeg", description: "APIs" },
    { title: "Certificate 8", image: "certifications/metabackend.jpeg", description: "Meta Back-End Developer" },
    { title: "Certificate 9", image: "certifications/capstone.jpeg", description: "Back-End Developer Capstone" },
  ];

  // For the draggable slider effect
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">
      {/* Certifications slider section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>My Certifications</p>
        <h3 className={styles.sectionHeadText}>Certifications</h3>

        <div className="mt-8 overflow-hidden cursor-grab" ref={carouselRef}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-6"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="min-w-[300px] bg-tertiary p-4 rounded-lg"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-contain rounded-md"
                />
                <h4 className="text-white mt-2">{cert.title}</h4>
                <p className="text-secondary text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Background animation section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
