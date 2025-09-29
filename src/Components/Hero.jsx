import React from "react";

/**
 * Hero: imagen con texto incluido + botón superpuesto
 * - imgMobile / imgDesktop: rutas (una por breakpoint)
 * - ctaText / ctaHref: contenido del botón
 * - ctaGradient: clases tailwind para el gradiente del botón (from-… to-…)
 * - heightClass: alto del hero
 * - buttonPosClass: controla la posición del botón (distinta en móvil/escritorio si quieres)
 */
export default function Hero({
                                 imgMobile,
                                 imgDesktop,
                                 imgAlt = "",
                                 ctaText = "Ver curso",
                                 ctaHref = "#",
                                 ctaGradient = "from-indigo-500 to-fuchsia-500", // ej: "from-[#6b66ff] to-[#d93aff]"
                                 heightClass = "h-[72vh] lg:h-[82vh]",
                                 buttonPosClass = "justify-start pt-8 md:pt-0 md:justify-center md:items-end", // móvil arriba-centro, desktop derecha-centro
                                 buttonClassName = "",
                                 containerClassName = "",
                             }) {
    return (
        <section className={`relative isolate w-full overflow-hidden ${heightClass}`}>
            {/* Imagen responsive */}
            <picture>
                <source media="(min-width: 1024px)" srcSet={imgDesktop} />
                <img
                    src={imgMobile}
                    alt={imgAlt}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                />
            </picture>

            {/* Contenedor para ubicar el botón */}
            <div className={`container mx-auto h-full px-5 ${containerClassName}`}>
                <div className={`flex h-full ${buttonPosClass}`}>
                    <a
                        href={ctaHref}
                        className={`inline-flex items-center rounded-full px-6 py-3 font-semibold text-white
                        shadow-lg shadow-black/20 bg-gradient-to-r ${ctaGradient}
                        hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-white/40 transition
                        ${buttonClassName}`}
                    >
                        {ctaText}
                    </a>
                </div>
            </div>
        </section>
    );
}
