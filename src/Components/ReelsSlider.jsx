// src/components/ReelsSlider.jsx
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import YoutubeReel from "./YoutubeReel";

export default function ReelsSlider({ videoIds = [] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        containScroll: "trimSnaps",
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api) => {
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", () => onSelect(emblaApi));
        onSelect(emblaApi);
    }, [emblaApi, onSelect]);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <div className="relative">
            {/* Viewport */}
            <div className="flex -mx-2 lg:-mx-1">
                {videoIds.map((id, idx) => (
                    <div
                        key={id}
                        className="
                                    shrink-0
                                    px-6 lg:px-6
                                    w-full              /* móvil: ocupa todo el ancho del viewport */
                                    sm:w-[360px]        /* tablet: tamaño cómodo */
                                    lg:w-[260px]        /* desktop: más pequeño para que quepan 3 con poco gap */
                                    xl:w-[280px]        /* opcional: en pantallas muy grandes, un pelín más */
                                  "
                    >
                        {/* el Reel ocupa el ancho del slide */}
                        <div className="w-full">
                            <YoutubeReel videoId={id} autoplay={false} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Flechas */}
            <button
                onClick={scrollPrev}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur px-3 py-2"
                aria-label="Anterior"
            >
                ‹
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur px-3 py-2"
                aria-label="Siguiente"
            >
                ›
            </button>
        </div>
    );
}