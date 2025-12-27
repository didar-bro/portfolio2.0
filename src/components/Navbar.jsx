// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img
//             src={logo}
//             alt="logo"
//             className="object-contain"
//             style={{ width: "80px", height: "80px" }}
//           />
//           <p className="text-white text-[18px] font-bold cursor-pointer flex ">
//             Didar &nbsp;
//             <span className="sm:block hidden"> | MERN Stack Developer</span>
//           </p>
//         </Link>

//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <img
//             src={toggle ? close : menu}
//             alt="menu"
//             className="w-[28px] h-[28px] object-contain"
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Download } from "lucide-react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Replace this with your actual Google Drive CV link
  const CV_LINK = "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-2 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="object-contain"
            style={{ width: "50px", height: "50px" }}
          />
          <p className="text-white text-[16px] font-bold cursor-pointer flex ">
            Didar &nbsp;
            <span className="sm:block hidden"> | MERN Stack Developer</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[16px] font-medium cursor-pointer transition-colors duration-200`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-3 px-6 border-x border-secondary/30">
            <a
              href="https://github.com/didarbro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/didarul-islam131299/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* CV Button */}
          <div>
            <a
              href={CV_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-tertiary hover:bg-white hover:text-primary text-white rounded-lg transition-all duration-200 font-medium text-[13px]"
            >
              <Download size={15} />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              
              {/* Mobile Social Icons */}
              <li className="flex gap-4 pt-4 border-t border-secondary/20">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </li>
              
              {/* Mobile CV Button */}
              <li className="w-full">
                <a
                  href={CV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-tertiary hover:bg-white hover:text-primary text-white rounded-lg transition-all duration-200 font-medium text-[14px] w-full"
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;