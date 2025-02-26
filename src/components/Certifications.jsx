import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Certifications = () => {
  const certificates = [
    { title: "Python Programming", image: "certifications/python.jpeg" },
    { title: "Databases for Back-End", image: "certifications/database.jpeg" },
    { title: "Back-End Development", image: "certifications/backend.jpeg" },
    { title: "Full Stack Development", image: "certifications/fullstack.jpeg" },
    { title: "Version Control", image: "certifications/vertioncontrol.jpeg" },
    { title: "Django Framework", image: "certifications/django.jpeg" },
    { title: "API Development", image: "certifications/api.jpeg" },
    {
      title: "Meta Back-End Developer",
      image: "certifications/metabackend.jpeg",
    },
    { title: "Back-End Capstone", image: "certifications/capstone.jpeg" },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-900 py-10">
      <h2 className="text-3xl text-white font-bold mb-4">Certifications</h2>
      <p className="text-gray-400 mb-6">My Achievements & Credentials</p>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Shows 3 images in a row
        spaceBetween={30} // Adds space between slides
        loop={true} // Enables infinite looping
        autoplay={{
          delay: 2500, // Auto-slide every 2.5 seconds
          disableOnInteraction: false, // Keeps autoplay even after user interaction
        }}
        coverflowEffect={{
          rotate: 20, // Less rotation for better view
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false, // Removes shadows for a cleaner look
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-5xl"
      >
        {certificates.map((cert, index) => (
          <SwiperSlide key={index} className="bg-gray-800 p-4 rounded-xl">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-60 object-contain rounded-md"
            />
            <h4 className="text-white text-lg text-center mt-2">
              {cert.title}
            </h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Certifications;
