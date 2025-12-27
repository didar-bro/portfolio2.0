import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Certifications = () => {
  const swiperRef = useRef(null);
  const [activeCert, setActiveCert] = useState(null);

  const certificates = [
    {
      title: "Python Programming",
      image: "certifications/python.jpeg",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/DA8XSF5ZVYKE",
    },
    {
      title: "Databases for Back-End",
      image: "certifications/database.jpeg",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/JW6CSMX1Y02N",
    },
    {
      title: "Back-End Development",
      image: "certifications/backend.jpeg",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/3YF9JU2ZD5MY",
    },
    {
      title: "Full Stack Development",
      image: "certifications/fullstack.jpeg",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/5GURB77X9891",
    },
    {
      title: "Version Control",
      image: "certifications/vertioncontrol.jpeg",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/O871NEZ3DN42",
    },
    {
      title: "Django Framework",
      image: "certifications/django.jpeg",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/22516YBUSNF8",
    },
    {
      title: "API Development",
      image: "certifications/api.jpeg",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/A4I2ZCIXL8NJ",
    },
    {
      title: "Meta Back-End Developer",
      image: "certifications/metabackend.jpeg",
      verifyLink: "https://www.coursera.org/account/accomplishments/specialization/ZLZS9JBLYHP6",
    },
    {
      title: "Back-End Capstone",
      image: "certifications/capstone.jpeg",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/83FYGAWRA1F7",
    },
  ];

  return (
    <div className="relative flex flex-col items-center bg-gray-900 py-12 px-4">
      <h2 className="text-3xl font-bold text-white mb-2">Certifications</h2>
      <p className="text-gray-400 mb-6 text-center">
        My Achievements & Credentials
      </p>

      {/* Navigation */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="px-4 py-2 rounded-full bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 transition"
        >
          ← Previous
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="px-4 py-2 rounded-full bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 transition"
        >
          Next →
        </button>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={30}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 20,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-6xl"
      >
        {certificates.map((cert, index) => (
          <SwiperSlide
            key={index}
            onClick={() => setActiveCert(cert)}
            className="bg-gray-800 p-4 rounded-xl cursor-pointer hover:scale-105 transition"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-56 object-contain rounded bg-white"
            />
            <h4 className="text-white text-lg text-center mt-3">
              {cert.title}
            </h4>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Responsive Modal - Optimized for all devices */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm mt-12 p-3 sm:p-4">
          <div 
            className="relative bg-gray-900 rounded-xl sm:rounded-2xl w-full 
                       max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 
                       max-h-[90vh] sm:max-h-[85vh] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 md:p-5 border-b border-gray-700">
              <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold truncate pr-2">
                {activeCert.title}
              </h3>

              {/* Professional Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full
                           border border-gray-600 text-gray-300
                           hover:bg-gray-800 hover:text-white transition flex-shrink-0"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Image Container */}
            <div className="flex-1 overflow-auto p-3 sm:p-4 md:p-5 flex items-center justify-center">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="max-h-[50vh] sm:max-h-[55vh] md:max-h-[60vh] 
                           w-auto max-w-full object-contain bg-white rounded-lg p-2"
              />
            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 md:p-5 border-t border-gray-700 flex flex-col sm:flex-row gap-3 justify-end">
              <a
                href={activeCert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 sm:px-5 sm:py-2 rounded-full
                           border border-gray-500 text-gray-200 text-sm sm:text-base
                           hover:bg-gray-800 hover:text-white
                           transition text-center whitespace-nowrap"
              >
                Verify Certificate
              </a>

              <button
                onClick={() => setActiveCert(null)}
                className="px-4 py-2 sm:px-5 sm:py-2 rounded-full
                           bg-gray-800 border border-gray-600
                           text-white text-sm sm:text-base hover:bg-gray-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;