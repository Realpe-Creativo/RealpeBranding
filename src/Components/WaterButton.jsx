import React, { useId } from "react";

export default function WaterButton({
                                      href = "#",
                                      ctaText = "Chatea por WhatsApp",
                                      ctaGradient = "from-[#25D366] to-[#128C7E]", // cambia si quieres otro degradado
                                      buttonClassName = "",
                                    }) {
  const uid = useId();                // id único por instancia
  const filterId = `wavy-${uid}`;     // e.g. wavy-r:0.123

  return (
      <div className="mt-6 pb-8 flex justify-center">
        {/* defs inline -> 100% confiable en React/Chrome/Edge/Firefox/Safari modernos */}
        <svg width="0" height="0" aria-hidden="true">
          <filter id={filterId}>
            {/* “Ruido” que se anima (olas) */}
            <feTurbulence
                type="fractalNoise"
                baseFrequency="0.008 0.02"
                numOctaves="2"
                seed="3"
                result="noise"
            >
              <animate
                  attributeName="baseFrequency"
                  dur="6s"
                  values="0.008 0.02; 0.018 0.03; 0.008 0.02"
                  repeatCount="indefinite"
              />
            </feTurbulence>

            {/* Deforma el contenido como gel */}
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10">
              <animate
                  attributeName="scale"
                  dur="6s"
                  values="8;14;8"
                  repeatCount="indefinite"
              />
            </feDisplacementMap>
          </filter>
        </svg>

        <a
            href={href}
            // El filtro se aplica al propio botón (deforma todo el pill)
            style={{
              filter: `url(#${filterId})`,
              WebkitFilter: `url(#${filterId})`, // por si acaso en Safari
            }}
            className={`
          inline-flex items-center gap-2 rounded-full px-8 py-3
          font-bold text-white shadow-lg shadow-black/20
          bg-gradient-to-r ${ctaGradient}
          hover:from-[#25D366] hover:to-[#25D366]
          focus:outline-none focus:ring-4 focus:ring-white/40
          transition-colors duration-300
          ${buttonClassName}
        `}
        >
          {/* Ícono WhatsApp */}
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
          >
            <path d="M16 0C7.16 0 0 7.16 0 16c0 2.83.74 5.56 2.13 8L0 32l8.22-2.09A15.9 15.9 0 0 0 16 32c8.84 0 16-7.16 16-16S24.84 0 16 0Zm0 29c-2.54 0-5.03-.64-7.23-1.85l-.52-.29-4.87 1.23 1.3-4.74-.31-.49A12.9 12.9 0 0 1 3 16C3 8.83 8.83 3 16 3s13 5.83 13 13-5.83 13-13 13Zm7.37-9.66c-.4-.2-2.38-1.18-2.75-1.31-.37-.14-.64-.2-.91.2s-1.04 1.31-1.28 1.58c-.23.27-.46.3-.87.1-.4-.2-1.7-.63-3.24-2-1.2-1.07-2.01-2.39-2.24-2.79-.24-.4-.03-.62.17-.82.18-.18.4-.47.6-.7.2-.23.27-.4.4-.67.13-.27.07-.5-.03-.7l-1.24-3.03c-.33-.79-.66-.68-.91-.69l-.78-.02c-.27 0-.7.1-1.08.5s-1.41 1.37-1.41 3.36 1.44 3.89 1.65 4.16c.2.27 2.83 4.32 6.87 6.05.96.41 1.71.66 2.29.85.96.3 1.84.26 2.53.16.77-.12 2.38-.97 2.72-1.91.33-.94.33-1.74.23-1.91-.1-.17-.37-.27-.77-.47Z" />
          </svg>
          {ctaText}
        </a>
      </div>
  );
}
