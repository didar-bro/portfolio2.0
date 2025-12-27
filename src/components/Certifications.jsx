// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// const Certifications = () => {
//   const swiperRef = useRef(null);
//   const [activeCert, setActiveCert] = useState(null);

//   const certificates = [
//     {
//       title: "Python Programming",
//       image: "certifications/python.jpeg",
//       verifyLink: "https://www.coursera.org/account/accomplishments/verify/DA8XSF5ZVYKE",
//     },
//     {
//       title: "Databases for Back-End",
//       image: "certifications/database.jpeg",
//       verifyLink: "https://www.coursera.org/account/accomplishments/verify/JW6CSMX1Y02N",
//     },
//     {
//       title: "Back-End Development",
//       image: "certifications/backend.jpeg",
//       verifyLink: "https://www.coursera.org/account/accomplishments/verify/3YF9JU2ZD5MY",
//     },
//     {
//       title: "Full Stack Development",
//       image: "certifications/fullstack.jpeg",
//       verifyLink: "https://www.coursera.org/account/accomplishments/verify/5GURB77X9891",
//     },
//     {
//       title: "Version Control",
//       image: "certifications/vertioncontrol.jpeg",
//       verifyLink: "https://www.coursera.org/account/accomplishments/verify/O871NEZ3DN42",
//     },
//     {
//       title: "Django Framework",
//       image: "certifications/django.jpeg",
//       verifyLink: "https://www.coursera.org/account/accomplishments/verify/22516YBUSNF8",
//     },
//     {
//       title: "API Development",
//       image: "certifications/api.jpeg",
//       verifyLink: "https://www.coursera.org/account/accomplishments/verify/A4I2ZCIXL8NJ",
//     },
//     {
//       title: "Meta Back-End Developer",
//       image: "certifications/metabackend.jpeg",
//       verifyLink: "https://www.coursera.org/account/accomplishments/specialization/ZLZS9JBLYHP6",
//     },
//     {
//       title: "Back-End Capstone",
//       image: "certifications/capstone.jpeg",
//       verifyLink: "https://www.coursera.org/account/accomplishments/verify/83FYGAWRA1F7",
//     },
//   ];

//   return (
//     <div className="relative flex flex-col items-center bg-gray-900 py-12 px-4">
//       <h2 className="text-3xl font-bold text-white mb-2">Certifications</h2>
//       <p className="text-gray-400 mb-6 text-center">
//         My Achievements & Credentials
//       </p>

//       {/* Navigation */}
//       <div className="flex gap-3 mb-6">
//         <button
//           onClick={() => swiperRef.current?.slidePrev()}
//           className="px-4 py-2 rounded-full bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 transition"
//         >
//           ← Previous
//         </button>
//         <button
//           onClick={() => swiperRef.current?.slideNext()}
//           className="px-4 py-2 rounded-full bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 transition"
//         >
//           Next →
//         </button>
//       </div>

//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         effect="coverflow"
//         grabCursor
//         centeredSlides
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         spaceBetween={30}
//         loop
//         autoplay={{ delay: 2500, disableOnInteraction: false }}
//         coverflowEffect={{
//           rotate: 20,
//           depth: 120,
//           modifier: 1,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         modules={[EffectCoverflow, Pagination, Autoplay]}
//         className="w-full max-w-6xl"
//       >
//         {certificates.map((cert, index) => (
//           <SwiperSlide
//             key={index}
//             onClick={() => setActiveCert(cert)}
//             className="bg-gray-800 p-4 rounded-xl cursor-pointer hover:scale-105 transition"
//           >
//             <img
//               src={cert.image}
//               alt={cert.title}
//               className="w-full h-56 object-contain rounded bg-white"
//             />
//             <h4 className="text-white text-lg text-center mt-3">
//               {cert.title}
//             </h4>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Responsive Modal - Optimized for all devices */}
//       {activeCert && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm mt-12 p-3 sm:p-4">
//           <div 
//             className="relative bg-gray-900 rounded-xl sm:rounded-2xl w-full 
//                        max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 
//                        max-h-[90vh] sm:max-h-[85vh] flex flex-col shadow-2xl"
//           >
//             {/* Header */}
//             <div className="flex items-center justify-between p-3 sm:p-4 md:p-5 border-b border-gray-700">
//               <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold truncate pr-2">
//                 {activeCert.title}
//               </h3>

//               {/* Professional Close Button */}
//               <button
//                 onClick={() => setActiveCert(null)}
//                 className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full
//                            border border-gray-600 text-gray-300
//                            hover:bg-gray-800 hover:text-white transition flex-shrink-0"
//                 aria-label="Close"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Image Container */}
//             <div className="flex-1 overflow-auto p-3 sm:p-4 md:p-5 flex items-center justify-center">
//               <img
//                 src={activeCert.image}
//                 alt={activeCert.title}
//                 className="max-h-[50vh] sm:max-h-[55vh] md:max-h-[60vh] 
//                            w-auto max-w-full object-contain bg-white rounded-lg p-2"
//               />
//             </div>

//             {/* Footer */}
//             <div className="p-3 sm:p-4 md:p-5 border-t border-gray-700 flex flex-col sm:flex-row gap-3 justify-end">
//               <a
//                 href={activeCert.verifyLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 sm:px-5 sm:py-2 rounded-full
//                            border border-gray-500 text-gray-200 text-sm sm:text-base
//                            hover:bg-gray-800 hover:text-white
//                            transition text-center whitespace-nowrap"
//               >
//                 Verify Certificate
//               </a>

//               <button
//                 onClick={() => setActiveCert(null)}
//                 className="px-4 py-2 sm:px-5 sm:py-2 rounded-full
//                            bg-gray-800 border border-gray-600
//                            text-white text-sm sm:text-base hover:bg-gray-700 transition"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Certifications;



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
    <div className="relative flex flex-col items-center bg-gradient-to-b from-gray-900 to-black py-16 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      {/* Enhanced Header Section */}
      <div className="relative z-10 text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
          Verified credentials and professional certifications that showcase my technical expertise 
          and commitment to continuous learning
        </p>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm 
                       rounded-full border border-gray-700/30">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">
            {certificates.length} Professional Certificates
          </span>
        </div>
      </div>

      {/* Professional Navigation Buttons */}
      <div className="relative z-10 flex justify-center items-center gap-6 mb-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center 
                     rounded-full bg-gray-800/80 border border-gray-700/50 
                     hover:bg-gray-700/90 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                     active:scale-95 transition-all duration-300 
                     shadow-lg backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white 
                       group-hover:scale-110 transition-all" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="text-sm text-gray-300 font-medium px-4 py-2 
                       bg-gray-800/70 backdrop-blur-sm rounded-full border border-gray-700/30 
                       shadow-inner">
          <span className="text-blue-300 font-semibold">Swipe</span> or use{" "}
          <span className="text-purple-300 font-semibold">Navigation</span>
        </div>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center 
                     rounded-full bg-gray-800/80 border border-gray-700/50 
                     hover:bg-gray-700/90 hover:border-gray-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                     active:scale-95 transition-all duration-300 
                     shadow-lg backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white 
                       group-hover:scale-110 transition-all" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Swiper Container with Lower Pagination */}
      <div className="relative w-full max-w-6xl">
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
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
            bulletClass: "swiper-pagination-bullet !bg-gray-600 !opacity-50 !mx-1.5",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-gradient-to-r !from-blue-500 !to-purple-500 !opacity-100 !scale-125",
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            }
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full pb-16" // Added padding bottom for pagination
        >
          {certificates.map((cert, index) => (
            <SwiperSlide
              key={index}
              onClick={() => setActiveCert(cert)}
              className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-5 
                        rounded-2xl cursor-pointer backdrop-blur-sm
                        hover:scale-105 transition-all duration-300 
                        border border-gray-700/30 hover:border-blue-500/30
                        hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-60 object-contain rounded-xl bg-white 
                            group-hover:opacity-90 transition-opacity duration-300
                            p-2"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 
                              bg-gradient-to-t from-black/80 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover overlay with view button */}
                <div className="absolute inset-0 flex items-center justify-center 
                              bg-black/80 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 rounded-xl">
                  <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 
                                 text-white font-medium rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Details
                  </span>
                </div>
              </div>
              <h4 className="text-white text-lg font-semibold text-center mt-5 mb-2">
                {cert.title}
              </h4>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-400">Verified Credential</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom positioned pagination dots */}
        <div className="swiper-pagination !bottom-4 !left-1/2 !-translate-x-1/2 
                       !w-auto !space-x-2" 
             style={{ position: 'absolute' }}></div>
      </div>

      {/* Responsive Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-3 sm:p-4">
          <div 
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full 
                       max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 
                       max-h-[90vh] sm:max-h-[85vh] flex flex-col shadow-2xl 
                       border border-gray-800/50"
          >
            {/* Enhanced Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 md:p-6 
                          border-b border-gray-800 bg-gradient-to-r from-gray-900/50 to-black/50 
                          rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 
                              flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                    {activeCert.title}
                  </h3>
              
                </div>
              </div>

              {/* Professional Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="group w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl
                           border border-gray-700 bg-gray-800/50 text-gray-400 hover:text-white
                           hover:bg-gray-800 hover:border-gray-600 transition-all duration-300
                           hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                aria-label="Close modal"
              >
                <svg 
                  className="w-5 h-5 group-hover:rotate-90 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Image Container */}
            <div className="flex-1 overflow-auto p-4 sm:p-5 md:p-6 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                              rounded-2xl blur-xl opacity-50"></div>
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="relative max-h-[50vh] sm:max-h-[55vh] md:max-h-[60vh] 
                             w-auto max-w-full object-contain bg-white rounded-xl 
                             shadow-2xl p-3 border border-gray-700"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 md:p-6 border-t border-gray-800 
                          bg-gradient-to-r from-gray-900/50 to-black/50 
                          rounded-b-2xl flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <p className="text-sm text-gray-400">
                  <span className="text-blue-300 font-medium">Issued by:</span> Coursera
                </p>
                <p className="text-sm text-gray-400">
                  <span className="text-purple-300 font-medium">Status:</span>{" "}
                  <span className="text-green-400 font-medium">✓ Verified</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={activeCert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl
                             bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                             text-sm sm:text-base font-semibold hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
                             transition-all duration-300 whitespace-nowrap hover:scale-[1.02]"
                >
                  Verify Certificate
                </a>

                <button
                  onClick={() => setActiveCert(null)}
                  className="px-5 py-2.5 rounded-xl border border-gray-700 
                             bg-gray-800/50 text-white text-sm sm:text-base 
                             font-medium hover:bg-gray-800 hover:border-gray-600 
                             transition-all hover:shadow-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;