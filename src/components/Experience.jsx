import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Typewriter } from "react-simple-typewriter";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2
          className="text-center text-4xl font-bold bg-clip-text text-transparent relative"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(145, 94, 255), rgb(200, 120, 255), rgb(255, 94, 150))",
            textShadow: `
      0 0 20px rgba(145, 94, 255, 0.9),
      0 0 40px rgba(200, 120, 255, 0.8),
      0 0 60px rgba(255, 94, 150, 0.7)
    `,
            animation: "flicker 1.5s infinite alternate",
          }}
        >
          <Typewriter
            words={[
              "Education and Work Experience",
              "My Journey",
              "Skills & Achievements",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <style>
          {`
  @keyframes flicker {
    0% { opacity: 1; text-shadow: 0 0 20px rgba(145, 94, 255, 1), 0 0 40px rgba(200, 120, 255, 0.9); }
    50% { opacity: 0.8; text-shadow: 0 0 30px rgba(200, 120, 255, 0.7), 0 0 50px rgba(255, 94, 150, 0.6); }
    100% { opacity: 1; text-shadow: 0 0 25px rgba(145, 94, 255, 1), 0 0 45px rgba(255, 94, 150, 0.8); }
  }
`}
        </style>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
