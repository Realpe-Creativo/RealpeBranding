import React from "react";
import LiquidWhatsappButton from "./LiquidWhatsappButton.jsx";

export default function Hero({
                               imgMobile,
                               imgDesktop,
                               imgAlt = "",
                               ctaText = "Ver curso",
                               ctaHref = "#",
                               ctaGradient = "from-indigo-500 to-fuchsia-500",
                               aspectClasses = "aspect-[9/16] md:aspect-[16/9]",
                               heightClass = "h-[72vh] lg:h-[82vh]",
                               buttonClassName = "",
                               containerClassName = "",
                               backgroundColor = "",
                               text_color = "",
                             }) {
  return (
      <section className={`w-full ${backgroundColor} ${containerClassName}`}>
        {/* Imagen hero */}
        <div className="w-full overflow-hidden aspect-[9/16] md:aspect-auto">
          <picture>
            <source media="(min-width: 1024px)" srcSet={imgDesktop}/>
            <img
                src={imgMobile}
                alt={imgAlt}
                // Móvil: llena el alto del aspect (cover). Desktop: ancho completo, alto auto (sin barras).
                className="block w-full h-full object-cover md:h-auto md:object-contain"
                loading="eager"
                fetchPriority="high"
            />
          </picture>
        </div>

        {/* Botón debajo de la imagen */}
        <div className="mt-6 pb-8 flex justify-center">
          <LiquidWhatsappButton
              ctaHref={ctaHref}
              ctaText={ctaText}
              ctaGradient={ctaGradient}
              startColor="#25D366"
              endColor="#128C7E"
              buttonClassName={buttonClassName}
              textColor={text_color}
          />
        </div>
      </section>
  );
}
