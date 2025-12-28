import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Download,
  Mail,
  Phone,
  MessageSquare,
  Send,
  ExternalLink,
  ChevronDown,
  Copy,
  Check,
} from "lucide-react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const dropdownRef = useRef(null);
  const contactButtonRef = useRef(null);

  const CV_LINK =
    "https://drive.google.com/drive/folders/1h1nsgD3yLsxqFSj3VBz33joJDByk0LRX?usp=sharing";

  const contactInfo = {
    email: "didar131299@gmail.com",
    phone: "+8801756538544",
    whatsappLink: "8801756538544",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        contactButtonRef.current &&
        !contactButtonRef.current.contains(event.target)
      ) {
        setContactDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Copy functions
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const CopyIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );

  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`;

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-3 fixed top-0 z-20 ${
          scrolled ? "bg-primary/95 backdrop-blur-sm" : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="flex flex-col">
              <p className="text-white text-[16px] font-bold cursor-pointer flex items-center gap-1">
                Didar
                <span className="inline-block w-1.5 h-1.5 bg-tertiary rounded-full ml-1 animate-pulse"></span>
              </p>
              <span className="text-secondary/80 text-[12px] font-medium hidden sm:block">
                MERN Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-6">
            <ul className="list-none flex flex-row gap-8">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title
                      ? "text-white after:w-full"
                      : "text-secondary/80 after:w-0"
                  } relative hover:text-white text-[15px] font-medium cursor-pointer transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-tertiary after:transition-all after:duration-300 hover:after:w-full`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`} className="relative z-10">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="h-6 w-px bg-secondary/30"></div>

            {/* Social Icons and Contact Dropdown */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/didarbro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/80 hover:text-white transition-all duration-300 p-1.5 hover:bg-secondary/10 rounded-lg"
                aria-label="GitHub"
              >
                <Github size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/didarul-islam131299/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/80 hover:text-white transition-all duration-300 p-1.5 hover:bg-secondary/10 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>

              {/* Contact Dropdown Button with LED Animation */}
              <div className="relative">
                <button
                  ref={contactButtonRef}
                  onClick={() => setContactDropdown(!contactDropdown)}
                  className="flex items-center gap-2 text-secondary/80 hover:text-white transition-all duration-300 group relative"
                  aria-label="Contact"
                >
                  {/* LED Ring Animation */}
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-lg animate-led-rotate">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 via-white to-purple-400 opacity-70 blur-sm"></div>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 via-white to-purple-400 opacity-30"></div>
                    </div>

                    <div className="relative p-1.5 bg-gradient-to-br from-primary to-tertiary/30 rounded-lg group-hover:bg-gradient-to-br group-hover:from-tertiary/40 group-hover:to-tertiary/20 border border-secondary/20 group-hover:border-tertiary/40 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-message-square-more"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        <path d="M8 10h.01" />
                        <path d="M12 10h.01" />
                        <path d="M16 10h.01" />
                      </svg>
                    </div>
                  </div>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      contactDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Contact Dropdown Menu - Same Design as Contact Section */}
                {contactDropdown && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-3 w-80 bg-gradient-to-br from-black-100/95 to-black-200/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl shadow-purple-900/20 py-3 z-30 animate-fadeIn overflow-hidden"
                  >
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="absolute -inset-0.5 rounded-lg animate-led-rotate opacity-50">
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-emerald-500 to-purple-500 blur-xs"></div>
                          </div>
                          <div className="relative p-2 bg-black-200/80 rounded-lg border border-white/5">
                            <MessageSquare
                              size={18}
                              className="text-tertiary"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-[15px]">
                            Get In Touch
                          </p>
                          <p className="text-secondary/70 text-[12px]">
                            Let's build something amazing
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Email Card - Same as Contact Section */}
                    <div className="px-4 py-3 hover:bg-white/5 transition-all duration-200 group">
                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-2 bg-black-200/80 rounded-lg">
                            <svg
                              className="w-5 h-5 text-purple-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <h4 className="text-white text-sm font-bold">
                            Email
                          </h4>
                        </div>

                        <div className="flex items-center justify-between bg-black-300/50 px-3 py-2 rounded-lg border border-white/5 mb-3">
                          <span className="text-white/90 font-mono text-xs tracking-wide truncate">
                            {contactInfo.email}
                          </span>
                          <button
                            onClick={() =>
                              copyToClipboard(contactInfo.email, "email")
                            }
                            className="group/copy relative p-1 rounded bg-black-400/50 hover:bg-black-400 transition-all active:scale-95 flex-shrink-0"
                            title="Copy email"
                          >
                            <CopyIcon />
                            {copiedEmail && (
                              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-2 py-0.5 rounded text-[10px] whitespace-nowrap">
                                Copied!
                              </span>
                            )}
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => window.open(gmailComposeLink, "_blank")}
                        className="w-full bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 py-2 rounded-lg text-white text-xs font-medium hover:from-purple-600/30 hover:to-purple-700/30 transition-all"
                      >
                        <span className="flex items-center justify-center gap-1.5">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                          Compose Email
                        </span>
                      </button>
                    </div>

                    {/* WhatsApp Card - Same as Contact Section */}
                    <div className="px-4 py-3 border-t border-white/10 hover:bg-white/5 transition-all duration-200 group">
                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-2 bg-black-200/80 rounded-lg">
                            <svg
                              className="w-5 h-5 text-emerald-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                            </svg>
                          </div>
                          <h4 className="text-white text-sm font-bold">
                            WhatsApp
                          </h4>
                        </div>

                        <div className="flex items-center justify-between bg-black-300/50 px-3 py-2 rounded-lg border border-white/5 mb-3">
                          <span className="text-white/90 font-mono text-xs font-semibold tracking-wide truncate">
                            {contactInfo.phone}
                          </span>
                          <button
                            onClick={() =>
                              copyToClipboard(contactInfo.phone, "phone")
                            }
                            className="group/copy relative p-1 rounded bg-black-400/50 hover:bg-black-400 transition-all active:scale-95 flex-shrink-0"
                            title="Copy number"
                          >
                            <CopyIcon />
                            {copiedPhone && (
                              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px] whitespace-nowrap">
                                Copied!
                              </span>
                            )}
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          window.open(
                            `https://wa.me/${contactInfo.whatsappLink}`,
                            "_blank"
                          )
                        }
                        className="w-full bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border border-emerald-500/30 py-2 rounded-lg text-white text-xs font-medium hover:from-emerald-600/30 hover:to-emerald-700/30 transition-all"
                      >
                        <span className="flex items-center justify-center gap-1.5">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm5.26 13.2c-.25.73-1.26 1.33-2.06 1.5-.57.13-1.32.23-3.84-.86-3.13-1.34-5.13-4.61-5.28-4.82-.15-.21-1.22-1.63-1.22-3.11 0-1.48.76-2.22 1.03-2.5.25-.28.67-.35 1.01-.35.25 0 .5.03.72.1.25.08.57.23.82.46.25.23.86.86.99 1.13.13.28.28.61.11.96-.17.35-.25.61-.5.96-.25.35-.5.61-.72.79-.25.23-.5.46-.21.91s1.01 1.5 2.16 2.41c1.45 1.13 2.68 1.5 3.14 1.66.45.16.72.13.96-.08.25-.21 1.01-1.18 1.28-1.58.28-.41.56-.35.96-.21.41.13 2.57 1.21 3.01 1.43.45.23.72.35.82.53.1.18.1 1.03-.15 1.76z" />
                          </svg>
                          Start Chat
                        </span>
                      </button>
                    </div>

                    {/* Footer */}
                    <div className="px-4 pt-3 pb-2 border-t border-white/10 mt-1">
                      <p className="text-secondary/50 text-[11px] text-center">
                        Based in Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CV Button */}
            <div>
              <a
                href={CV_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-tertiary to-tertiary/80 hover:from-white hover:to-white/90 hover:text-primary text-white rounded-lg transition-all duration-300 font-medium text-[14px] shadow-lg shadow-tertiary/20 hover:shadow-tertiary/40 hover:scale-[1.02] group"
              >
                <Download size={16} className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-gradient-to-br from-black-100/95 to-black-200/95 backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[280px] z-10 rounded-2xl border border-white/10 shadow-2xl shadow-purple-900/20 animate-slideIn`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 w-full">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] w-full py-2 px-3 rounded-lg transition-all duration-200 ${
                      active === nav.title
                        ? "text-white bg-white/10"
                        : "text-secondary hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`} className="block w-full">
                      {nav.title}
                    </a>
                  </li>
                ))}

                {/* Mobile Contact Info - Same Design */}
                <div className="pt-6 border-t border-white/10 w-full">
                  <p className="text-white text-sm font-semibold mb-4 flex items-center gap-2">
                    <MessageSquare size={18} className="text-tertiary" />
                    Contact Options
                  </p>

                  {/* Mobile Email Card */}
                  <div className="bg-gradient-to-br from-black-200/60 to-black-300/60 p-4 rounded-xl border border-white/5 mb-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-black-200/80 rounded-lg">
                        <svg
                          className="w-5 h-5 text-purple-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-white text-sm font-bold">Email</h4>
                    </div>

                    <div className="flex items-center justify-between bg-black-300/50 px-3 py-2 rounded-lg border border-white/5 mb-3">
                      <span className="text-white/90 font-mono text-xs tracking-wide truncate">
                        {contactInfo.email}
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(contactInfo.email, "email")
                        }
                        className="p-1 rounded bg-black-400/50 hover:bg-black-400 transition-all active:scale-95"
                      >
                        {copiedEmail ? (
                          <Check size={14} className="text-green-400" />
                        ) : (
                          <CopyIcon />
                        )}
                      </button>
                    </div>

                    <button
                      onClick={() => window.open(gmailComposeLink, "_blank")}
                      className="w-full bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 py-2 rounded-lg text-white text-xs font-medium hover:from-purple-600/30 hover:to-purple-700/30 transition-all"
                    >
                      Compose Email
                    </button>
                  </div>

                  {/* Mobile WhatsApp Card */}
                  <div className="bg-gradient-to-br from-black-200/60 to-black-300/60 p-4 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-black-200/80 rounded-lg">
                        <svg
                          className="w-5 h-5 text-emerald-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                        </svg>
                      </div>
                      <h4 className="text-white text-sm font-bold">WhatsApp</h4>
                    </div>

                    <div className="flex items-center justify-between bg-black-300/50 px-3 py-2 rounded-lg border border-white/5 mb-3">
                      <span className="text-white/90 font-mono text-xs font-semibold tracking-wide truncate">
                        {contactInfo.phone}
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(contactInfo.phone, "phone")
                        }
                        className="p-1 rounded bg-black-400/50 hover:bg-black-400 transition-all active:scale-95"
                      >
                        {copiedPhone ? (
                          <Check size={14} className="text-green-400" />
                        ) : (
                          <CopyIcon />
                        )}
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        window.open(
                          `https://wa.me/${contactInfo.whatsappLink}`,
                          "_blank"
                        )
                      }
                      className="w-full bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border border-emerald-500/30 py-2 rounded-lg text-white text-xs font-medium hover:from-emerald-600/30 hover:to-emerald-700/30 transition-all"
                    >
                      Start Chat
                    </button>
                  </div>
                </div>

                {/* Mobile Social Icons */}
                <div className="pt-4 border-t border-white/10 w-full">
                  <p className="text-white text-sm font-semibold mb-3">
                    Connect with me
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/didarbro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200 flex items-center justify-center group"
                      aria-label="GitHub"
                    >
                      <Github
                        size={22}
                        className="text-secondary group-hover:text-white transition-colors duration-200"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/didarul-islam131299/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200 flex items-center justify-center group"
                      aria-label="LinkedIn"
                    >
                      <Linkedin
                        size={22}
                        className="text-secondary group-hover:text-white transition-colors duration-200"
                      />
                    </a>
                  </div>
                </div>

                {/* Mobile CV Button */}
                <div className="w-full pt-4">
                  <a
                    href={CV_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-tertiary to-tertiary/80 hover:from-white hover:to-white/90 hover:text-primary text-white rounded-lg transition-all duration-300 font-medium text-[15px] w-full active:scale-95"
                  >
                    <Download size={18} />
                    <span>Download CV</span>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Add LED rotation animation to global styles */}
      <style jsx global>{`
        @keyframes led-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-led-rotate {
          animation: led-rotate 2s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;
