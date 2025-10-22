import React from "react";
import WhatsAppCTA from "./WhatsAppCTA";
import WaterButton from "./WaterButton";
import LiquidWhatsappButton from "./LiquidWhatsappButton.jsx";

export default function Hero({
                               imgMobile,
                               imgDesktop,
                               imgAlt = "",
                               ctaText = "Ver curso",
                               ctaHref = "#",
                               ctaGradient = "from-indigo-500 to-fuchsia-500",
                               heightClass = "h-[72vh] lg:h-[82vh]",
                               buttonClassName = "",
                               containerClassName = "",
                               backgroundColor = "",
                               text_color = "",
                             }) {
  return (
      <section className={`w-full ${backgroundColor} ${containerClassName}`}>
        {/* Imagen hero */}
        <div className={`w-full overflow-hidden ${heightClass}`}>
          <picture>
            <source media="(min-width: 1024px)" srcSet={imgDesktop}/>
            <img
                src={imgMobile}
                alt={imgAlt}
                className="w-full h-full object-cover block"
                loading="eager"
                fetchPriority="high"
            />
          </picture>
        </div>

        {/* Botón debajo de la imagen */}
        <div className="mt-6 pb-8 flex justify-center">
          {/*<a
              href={ctaHref}
              className={`
                            inline-flex items-center gap-2 rounded-full px-8 py-3 font-bold
                            shadow-lg shadow-black/20
                            bg-gradient-to-r ${ctaGradient}
                            hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-white/40
                            transition animate-pulseScale
                            ${buttonClassName}
                         `}
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5"
                fill="currentColor"
            >
              <path
                  d="M16 0C7.164 0 0 7.163 0 16c0 2.821.734 5.561 2.125 8L0 32l8.22-2.086A15.89 15.89 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29c-2.544 0-5.029-.64-7.233-1.853l-.519-.292-4.868 1.236 1.301-4.744-.308-.489A12.92 12.92 0 0 1 3 16C3 8.83 8.831 3 16 3s13 5.83 13 13-5.831 13-13 13zm7.367-9.662c-.403-.202-2.381-1.178-2.75-1.312-.37-.134-.64-.202-.91.202s-1.04 1.312-1.276 1.583c-.234.269-.468.303-.87.101-.403-.202-1.703-.628-3.244-1.999-1.2-1.07-2.007-2.389-2.241-2.792-.235-.403-.025-.62.177-.823.182-.182.403-.47.604-.705.202-.235.269-.403.403-.672.134-.27.067-.505-.034-.706-.101-.202-.91-2.21-1.244-3.03-.327-.785-.662-.678-.91-.691l-.778-.013c-.269 0-.706.101-1.076.505s-1.41 1.377-1.41 3.36 1.443 3.893 1.644 4.164c.202.269 2.833 4.317 6.865 6.05.96.414 1.71.662 2.294.847.963.307 1.839.264 2.531.161.773-.116 2.381-.974 2.719-1.913.337-.94.337-1.744.235-1.912-.101-.169-.37-.27-.773-.471z"/>
            </svg>
            {ctaText}
          </a>*/}
          <LiquidWhatsappButton
              ctaHref={ctaHref}
              ctaText={ctaText}
              ctaGradient={ctaGradient}  // gradiente del botón (igual que antes)
              startColor="#25D366"                       // color inicial blobs
              endColor="#128C7E"                         // color final blobs
              buttonClassName={buttonClassName}
              textColor={text_color}
          />
{/*
          <WaterBlobButton
              startColor="#7c3aed"   // morado (inicio)
              endColor="#a21caf"     // fucsia (fin)
          >
            Liquid Button v2
          </WaterBlobButton>*/}
          {/*<WhatsAppCTA
              href={ctaHref}
              text={ctaText}
              ctaGradient={ctaGradient}
              buttonClassName={buttonClassName}
          />*/}
          {/*<WaterButton
              href={ctaHref}
              text={ctaText}
              ctaGradient={ctaGradient}
              buttonClassName={buttonClassName}
          />*/}
        </div>

      </section>
  );
}
