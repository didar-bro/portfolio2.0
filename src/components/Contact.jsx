import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";

const Contact = () => {
  const email = "didar131299@gmail.com";
  const whatsapp = "+8801756538544";
  const whatsappLink = "8801756538544";

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

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

  return (
    <div className="flex xl:flex-row flex-col gap-6 overflow-hidden">
      {/* LEFT — 50% */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:w-1/2 w-full bg-gradient-to-br from-black-100/80 to-black-200/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl shadow-purple-900/10"
      >
        <div className="mb-6">
          <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">
            Ready to collaborate?
          </p>
          <h3 className="text-2xl font-bold text-white">
            Let's Build <span className="text-purple-500">Together</span>
          </h3>
          <p className="text-secondary text-sm mt-2 max-w-lg leading-snug">
            Have a project in mind? Let's turn your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* EMAIL CARD */}
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 0.8)}
            className="group relative bg-gradient-to-br from-black-200/60 to-black-300/60 p-5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/10"
          >
            <div className="absolute -top-2 left-5 bg-purple-600 px-2 py-0.5 rounded-full text-[10px] font-semibold">
              Professional
            </div>

            <div className="mb-4">
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
                <h4 className="text-white text-base font-bold">Email</h4>
              </div>

              <p className="text-secondary text-xs mb-3 leading-relaxed">
                Perfect for detailed proposals and formal inquiries.
              </p>

              <div className="flex items-center justify-between bg-black-300/50 px-3 py-2 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
                <span className="text-white/90 font-mono text-xs tracking-wide truncate mr-2">
                  {email}
                </span>
                <button
                  onClick={() => copyToClipboard(email, "email")}
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

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(gmailComposeLink, "_blank")}
              className="w-full bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 py-2.5 rounded-lg text-white text-xs font-medium hover:from-purple-600/30 hover:to-purple-700/30 transition-all group-hover:shadow-md group-hover:shadow-purple-900/20"
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
            </motion.button>
          </motion.div>

          {/* WHATSAPP CARD */}
          <motion.div
            variants={fadeIn("up", "spring", 0.5, 0.8)}
            className="group relative bg-gradient-to-br from-black-200/60 to-black-300/60 p-5 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/10"
          >
            <div className="absolute -top-2 left-5 bg-emerald-600 px-2 py-0.5 rounded-full text-[10px] font-semibold">
              Instant
            </div>

            <div className="mb-4">
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
                <h4 className="text-white text-base font-bold">WhatsApp</h4>
              </div>

              <p className="text-secondary text-xs mb-3 leading-relaxed">
                Ideal for quick discussions and instant messaging.
              </p>

              <div className="flex items-center justify-between bg-black-300/50 px-3 py-2 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
                <span className="text-white/90 font-mono text-xs font-semibold tracking-wide truncate mr-2">
                  {whatsapp}
                </span>
                <button
                  onClick={() => copyToClipboard(whatsapp, "phone")}
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

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(`https://wa.me/${whatsappLink}`, "_blank")}
              className="w-full bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border border-emerald-500/30 py-2.5 rounded-lg text-white text-xs font-medium hover:from-emerald-600/30 hover:to-emerald-700/30 transition-all group-hover:shadow-md group-hover:shadow-emerald-900/20"
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
            </motion.button>
          </motion.div>
        </div>

        {/* CTA Footer */}
        <motion.div
          variants={fadeIn("up", "spring", 0.7, 0.8)}
          className="mt-6 pt-4 border-t border-white/10 text-center"
        >
          <p className="text-secondary text-[10px]">
            Dhaka, Bangladesh • Freelance & Full-time
          </p>
        </motion.div>
      </motion.div>

      {/* RIGHT — 50% */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:w-1/2 w-full xl:h-auto md:h-[400px] h-[300px] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/5 to-emerald-900/5 rounded-2xl blur-xl"></div>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");