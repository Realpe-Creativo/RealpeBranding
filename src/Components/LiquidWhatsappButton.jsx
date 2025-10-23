import React, {useId} from "react";

export default function LiquidWhatsappButton({
                                               ctaHref = "#",
                                               ctaText = "Escríbenos por WhatsApp",
                                               ctaGradient = "from-[#25D366] to-[#128C7E]",
                                               hoverGradient = "from-[#128C7E] to-[#0DA574]", // gradiente en hover
                                               textColor = "#FFFFFF", // color del texto
                                               startColor = "#25D366",
                                               endColor = "#128C7E",
                                               buttonClassName = "",
                                             }) {
  const uid = useId();
  const gooId = `goo-${uid}`;

  return (
      <>
        <style>{`
        /* Pulso base controlado por variable */
        .pulseScale {
          animation: pulseScale var(--pulse-dur, 1.6s) ease-in-out infinite;
        }

        /* Al pasar el cursor, acelera el pulso */
        .blob-btn:hover {
          --pulse-dur: 0.9s;
        }

        /* Keyframes del pulso */
        @keyframes pulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        /* Estructura del botón blob */
        .blob-btn {
          z-index: 1;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 2rem;
          font-weight: bold;
          border-radius: 9999px;
          transition: all 0.5s ease;
          cursor: pointer;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2);
        }

        .blob-btn:hover {
          opacity: 0.9;
          background-image: var(--hover-gradient) !important;
          color: #FFFFFF !important;
        }

        .blob-btn:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgb(255 255 255 / 0.4);
        }

        /* Capa interna de blobs */
        .blob-btn__inner {
          z-index: -1;
          overflow: hidden;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          pointer-events: none;
        }
        
        /* 🔹 Aumentamos tamaño solo en escritorio */
        @media (min-width: 768px) {
          .blob-btn {
            padding: 1rem 2.75rem; /* un poco más alto y ancho */
            font-size: 1.4rem;   /* 18px aprox */
          }
      
          .blob-btn__content svg {
            width: 1.5rem; /* agrandar el ícono también */
            height: 1.5rem;
          }
        }

        .blob-btn__blobs {
          position: relative;
          display: block;
          height: 100%;
          width: 100%;
        }

        /* Los blobs individuales */
        .blob-btn__blob {
          position: absolute;
          top: 0;
          width: 25%;
          height: 100%;
          border-radius: 100%;
          transform: translate3d(0, 150%, 0) scale(1.7);
          transition: transform 0.45s;
          will-change: transform;
        }

        @supports(filter: url('#goo')) {
          .blob-btn__blob {
            transform: translate3d(0, 150%, 0) scale(1.4);
          }
        }

        .blob-btn__blob:nth-child(1) {
          left: 0%;
          transition-delay: 0s;
          background: var(--blob-color, #25D366);
        }

        .blob-btn__blob:nth-child(2) {
          left: 30%;
          transition-delay: 0.08s;
          background: var(--blob-color, #25D366);
        }

        .blob-btn__blob:nth-child(3) {
          left: 60%;
          transition-delay: 0.16s;
          background: var(--blob-color, #128C7E);
        }

        .blob-btn__blob:nth-child(4) {
          left: 90%;
          transition-delay: 0.24s;
          background: var(--blob-color, #128C7E);
        }

        .blob-btn:hover .blob-btn__blob {
          transform: translateZ(0) scale(1.7);
        }

        @supports(filter: url('#goo')) {
          .blob-btn:hover .blob-btn__blob {
            transform: translateZ(0) scale(1.4);
          }
        }

        /* Animación extra de ondulación en hover */
        .blob-btn:hover .blob-btn__blob:nth-child(1) {
          animation: blobFloat 1.6s ease-in-out infinite 0s;
        }
        .blob-btn:hover .blob-btn__blob:nth-child(2) {
          animation: blobFloat 1.6s ease-in-out infinite 0.05s;
        }
        .blob-btn:hover .blob-btn__blob:nth-child(3) {
          animation: blobFloat 1.6s ease-in-out infinite 0.10s;
        }
        .blob-btn:hover .blob-btn__blob:nth-child(4) {
          animation: blobFloat 1.6s ease-in-out infinite 0.15s;
        }

        @keyframes blobFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1.4); }
          50% { transform: translate3d(0, -6%, 0) scale(1.45); }
        }

        /* Contenido por encima */
        .blob-btn__content {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Accesibilidad */
        @media (prefers-reduced-motion: reduce) {
          .pulseScale,
          .blob-btn__blob {
            animation: none !important;
          }
        }
      `}</style>

        <a
            href={ctaHref}
            className={`blob-btn pulseScale bg-gradient-to-r ${ctaGradient} ${buttonClassName}`}
            style={{
              color: textColor,
              textDecoration: 'none',
              ['--blob-color']: startColor,
              ['--hover-gradient']: `linear-gradient(to right, ${hoverGradient.includes('from-') ?
                  `var(--tw-gradient-stops)` :
                  hoverGradient
              })`
            }}
        >
          {/* Capa de blobs */}
          <span className="blob-btn__inner">
          <span
              className="blob-btn__blobs"
              style={{filter: `url(#${gooId})`}}
          >
            <span className="blob-btn__blob"/>
            <span className="blob-btn__blob"/>
            <span className="blob-btn__blob"/>
            <span className="blob-btn__blob"/>
          </span>
        </span>

          {/* Contenido visible */}
          <span className="blob-btn__content">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
          >
            <path
                d="M16 0C7.164 0 0 7.163 0 16c0 2.821.734 5.561 2.125 8L0 32l8.22-2.086A15.89 15.89 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29c-2.544 0-5.029-.64-7.233-1.853l-.519-.292-4.868 1.236 1.301-4.744-.308-.489A12.92 12.92 0 0 1 3 16C3 8.83 8.831 3 16 3s13 5.83 13 13-5.831 13-13 13zm7.367-9.662c-.403-.202-2.381-1.178-2.75-1.312-.37-.134-.64-.202-.91.202s-1.04 1.312-1.276 1.583c-.234.269-.468.303-.87.101-.403-.202-1.703-.628-3.244-1.999-1.2-1.07-2.007-2.389-2.241-2.792-.235-.403-.025-.62.177-.823.182-.182.403-.47.604-.705.202-.235.269-.403.403-.672.134-.27.067-.505-.034-.706-.101-.202-.91-2.21-1.244-3.03-.327-.785-.662-.678-.91-.691l-.778-.013c-.269 0-.706.101-1.076.505s-1.41 1.377-1.41 3.36 1.443 3.893 1.644 4.164c.202.269 2.833 4.317 6.865 6.05.96.414 1.71.662 2.294.847.963.307 1.839.264 2.531.161.773-.116 2.381-.974 2.719-1.913.337-.94.337-1.744.235-1.912-.101-.169-.37-.27-.773-.471z"/>
          </svg>
            {ctaText}
        </span>

          {/* Filtro SVG gooey */}
          <svg width="0" height="0" style={{position: 'absolute'}} aria-hidden="true">
            <defs>
              <filter id={gooId}>
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
              </filter>
            </defs>
          </svg>
        </a>
      </>
  );
}