"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "5511985522341";
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a Emergência SIMM.")}`;

export function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => !p), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="bg-white text-[#111B22] font-['Inter'] text-[13px] font-medium px-4 py-2.5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.25)] max-w-[200px] relative"
          >
            <span>Fale conosco pelo WhatsApp!</span>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45" />
          </motion.div>

          {/* Button */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            {/* Pulse ring */}
            <span
              className={`absolute inset-0 rounded-full bg-[#25D366] transition-all duration-1000 ${
                pulse ? "scale-125 opacity-0" : "scale-100 opacity-30"
              }`}
            />

            <div className="relative w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.5)] hover:shadow-[0_4px_32px_rgba(37,211,102,0.7)] hover:scale-110 transition-all duration-300 cursor-pointer">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="w-[32px] h-[32px]"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
