import React, {useEffect, useMemo, useState} from 'react';
import {ChevronLeft, ChevronRight, Play} from 'lucide-react';

interface ShortsCarouselProps {
    shorts: string[];
    maxWidthClass?: string;
    /** ancho máximo del reel en pantallas angostas */
    mobileMaxWidthClass?: string; // ej: "max-w-[300px]" o "max-w-[260px]"
    /** ancho relativo del reel en pantallas angostas (por si prefieres vw) */
    mobileWidthClass?: string;    // ej: "w-[82%]" o "w-[75%]"
}

type Provider = 'youtube' | 'tiktok' | 'other';

const getProvider = (url: string): Provider => {
    try {
        const u = new URL(url);
        if (/youtu\.be|youtube\.com/.test(u.hostname)) return 'youtube';
        if (/tiktok\.com/.test(u.hostname)) return 'tiktok';
    } catch {}
    return 'other';
};

const getYouTubeId = (url: string) => {
    try {
        const u = new URL(url);
        if (u.hostname === 'youtu.be') return u.pathname.slice(1);
        if (u.searchParams.get('v')) return u.searchParams.get('v');
        const m = u.pathname.match(/\/(shorts|embed)\/([^/?#]+)/);
        if (m) return m[2];
    } catch {}
    const m = url.match(/(?:v=|\/shorts\/|\/embed\/|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    return m ? m[1] : null;
};

const getYouTubeEmbed = (url: string) => {
    const id = getYouTubeId(url);
    if (!id) return null;
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const params = new URLSearchParams({
        enablejsapi: '1',
        origin,
        playsinline: '1',
        rel: '0',
        modestbranding: '1',
    });
    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
};

const getYouTubeThumb = (url: string) => {
    const id = getYouTubeId(url);
    return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null;
};

const getTikTokId = (url: string) => {
    const m = url.match(/\/video\/(\d+)/);
    return m ? m[1] : null;
};

const getTikTokEmbed = (url: string) => {
    const id = getTikTokId(url);
    return id ? `https://www.tiktok.com/embed/v2/${id}` : null;
};

export const ShortsCarousel: React.FC<ShortsCarouselProps> = ({
                                                                  shorts,
                                                                  maxWidthClass = 'max-w-screen-2xl',
                                                                  mobileMaxWidthClass = 'max-w-[300px]',
                                                                  mobileWidthClass = 'w-[82%]',
                                                              }) => {
    // 1 por vista en móvil, 3 en lg+
    const [itemsPerView, setItemsPerView] = useState<number>(() =>
        typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches ? 3 : 1
    );

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const mq = window.matchMedia('(min-width: 1024px)');
        const onChange = () => setItemsPerView(mq.matches ? 3 : 1);
        onChange();
        mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
        return () => {
            mq.removeEventListener ? mq.removeEventListener('change', onChange) : mq.removeListener(onChange);
        };
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const maxIndex = useMemo(
        () => Math.max(shorts.length - itemsPerView, 0),
        [shorts.length, itemsPerView]
    );

    const nextSlide = () => setCurrentIndex((p) => (p >= maxIndex ? 0 : p + 1));
    const prevSlide = () => setCurrentIndex((p) => (p <= 0 ? maxIndex : p - 1));

    const transform = `translateX(-${(currentIndex * 100) / itemsPerView}%)`;

    if (!shorts?.length) return null;

    return (
        <div className={`relative mt-12 mx-auto ${maxWidthClass}`}>

            <div className="relative">
                {/* track con gutter para flechas si usas botones fuera */}
                <div className="overflow-hidden rounded-2xl">
                    <div
                        className="flex transition-transform duration-500 ease-in-out px-2 sm:px-4 lg:px-6 gap-2 sm:gap-4 lg:gap-6"
                        style={{ transform }}
                    >
                        {shorts.map((url, index) => {
                            const provider = getProvider(url);
                            const isActive = index === activeIndex;
                            const embedSrc =
                                provider === 'youtube'
                                    ? getYouTubeEmbed(url)
                                    : provider === 'tiktok'
                                        ? getTikTokEmbed(url)
                                        : null;
                            const poster = provider === 'youtube' ? getYouTubeThumb(url) : null;

                            return (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 ${itemsPerView === 1 ? 'w-full' : 'w-1/3'}`}
                                >
                                    {/* 👇 Wrapper interno:
                      - En pantallas angostas: limita ancho (w-[82%] + max-w-[300px]) y centra
                      - En >= sm: ocupa 100% (se desactiva el límite) */}
                                    <div className={`mx-auto ${mobileWidthClass} ${mobileMaxWidthClass} sm:w-full sm:max-w-none`}>
                                        <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black/5 shadow-sm">
                                            {isActive && embedSrc ? (
                                                <iframe
                                                    key={`active-${index}`}
                                                    src={embedSrc}
                                                    className="w-full h-full"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                    title={`Short ${index + 1}`}
                                                />
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={() => setActiveIndex(index)}
                                                    className="group w-full h-full relative"
                                                    aria-label={`Reproducir short ${index + 1}`}
                                                >
                                                    {poster ? (
                                                        <img
                                                            src={poster}
                                                            alt=""
                                                            className="w-full h-full object-cover"
                                                            loading="lazy"
                                                            decoding="async"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                              <span className="text-sm text-gray-600">
                                {provider === 'tiktok' ? 'TikTok' : 'Short'}
                              </span>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity"/>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="rounded-full p-4 bg-[#f18500]/95 shadow group-hover:scale-110 transition-transform">
                                                            <Play className="w-6 h-6"/>
                                                        </div>
                                                    </div>
                                                </button>
                                            )}
                                            <div className="absolute top-2 right-2 text-[11px] px-2 py-1 rounded bg-black/60 text-white">
                                                {provider === 'youtube' ? 'YouTube' : provider === 'tiktok' ? 'TikTok' : 'Video'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {shorts.length > itemsPerView && (
                    <>
                        <button
                            onClick={() => {
                                const next = currentIndex <= 0 ? maxIndex : currentIndex - 1;
                                if (activeIndex !== null && (activeIndex < next || activeIndex >= next + itemsPerView)) {
                                    setActiveIndex(null);
                                }
                                prevSlide();
                            }}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
                         bg-[#f18500]/60 hover:bg-[#f18500]/80 text-white
                         p-3 sm:p-4 rounded-full transition-all duration-200
                         focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
                            aria-label="Anterior"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        <button
                            onClick={() => {
                                const next = currentIndex >= maxIndex ? 0 : currentIndex + 1;
                                if (activeIndex !== null && (activeIndex < next || activeIndex >= next + itemsPerView)) {
                                    setActiveIndex(null);
                                }
                                nextSlide();
                            }}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
                         bg-[#f18500]/60 hover:bg-[#f18500]/80 text-white
                         p-3 sm:p-4 rounded-full transition-all duration-200
                         focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
                            aria-label="Siguiente"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};
