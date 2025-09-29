import {MessageCircle, Instagram, Music, Facebook} from 'lucide-react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import YoutubeReel from "./components/YoutubeReel";
import {ShortsCarousel} from "./Components/ShortsCarousel.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import HeroGroup from "./Components/HeroGroup.jsx";

function App() {
    /*const portfolioItems = [
        {title: "M&O Únicos en Sabor", bg: "bg-yellow-400"},
        {title: "Bakup Digital", bg: "bg-gray-100"},
        {title: "NAOVI", bg: "bg-green-800"},
        {title: "GL Perfume", bg: "bg-amber-100"},
        {title: "Dr. Nicolás Vargas", bg: "bg-teal-800"},
        {title: "M&O Coffee", bg: "bg-yellow-400"}
    ];*/

    const reels = [
        "https://www.youtube.com/embed/g6LeS-LJ7Q4",
        "https://www.youtube.com/embed/4J5_NRM-jiU",
        "https://www.youtube.com/embed/H1vUWGh5LUM",
        "https://www.youtube.com/embed/f2Vvr2a0xTQ",
    ];

    const heroes = [
        {
            // HERO Instagram (los textos van en la imagen)
            imgMobile: "/hero01.png",
            imgDesktop: "/hero01.png",
            imgAlt: "Curso Instagram para negocios y marcas personales",
            ctaText: "VER CURSO",
            ctaHref: "#instagram",
            ctaGradient: "from-[#6b66ff] to-[#d93aff]",      // gradiente del botón
            heightClass: "h-[78vh] lg:h-[86vh]",
            // En móvil: arriba al centro. En desktop: a la derecha centrado vertical
            buttonPosClass:
                "justify-center items-start pt-6 md:pt-0 md:justify-end md:items-center",
            // Para desktop, separa un poco del borde derecho
            containerClassName: "md:pr-2",
            buttonClassName: "text-base md:text-lg",
        },
        {
            // Otro hero con su propio par de imágenes y botón con otros colores
            imgMobile: "/hero02.png",
            imgDesktop: "/hero02.png",
            imgAlt: "Workshop Ads 360",
            ctaText: "Reserva tu cupo",
            ctaHref: "#ads360",
            ctaGradient: "from-[#0017ff] to-[#00e3ff]",
            heightClass: "h-[70vh] lg:h-[82vh]",
            buttonPosClass:
                "justify-center items-start pt-8 md:pt-0 md:justify-start md:items-center",
            containerClassName: "md:pl-16",
        },
    ];

    return (
        <div className="min-h-screen relative overflow-x-hidden">

            {/* Content */}
            <div className="relative z-10 text-white">
                {/* Hero Section */}
                {/* Header con imágenes full width */}
                <header className="w-full">
                    {/* Imagen responsive */}
                    <picture>
                        {/* Imagen para escritorio */}
                        <source media="(min-width: 768px)" srcSet="/header_desktop.png"/>
                        {/* Imagen para móvil */}
                        <img
                            src="/header_mobile.png"
                            alt="Header"
                            className="w-full h-auto object-cover"
                        />
                    </picture>

                    {/* Contenido encima si lo necesitas */}
                    <div className="container mx-auto px-4 py-12 md:py-20 text-center text-white relative -mt-20 md:-mt-40">
                        {/* Logo */}
                        {/*<div className="flex items-center justify-center">
                            <img
                                src="/logo.png"
                                alt="Logo PE"
                                className="h-16 md:h-24 w-auto"
                            />
                        </div>*/}

                        {/* Subtitle
                        <p className="text-lg md:text-xl opacity-90">
                            LAS MARCAS QUE INSPIRAN COMIENZA CON UN BUEN LOGO
                        </p>*/}

                        {/* Video */}
                        <div className="mt-12 flex justify-center mb-6">
                            <div className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[480px]">
                                <YoutubeReel videoId="G_NgplpYPwY" autoplay mute/>
                            </div>
                        </div>
                    </div>
                </header>

                <HeroGroup items={heroes}/>

                {/* Portfolio Section */}
                {/*<div className="container mx-auto px-4 py-12 md:py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Mira cómo transformamos estas marcas
                        </h2>
                        <p className="text-yellow-300 text-lg">
                            Haz clic en cada imagen para ver la historia detrás del diseño.
                        </p>
                    </div>

                     Portfolio Grid
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {portfolioItems.map((item, index) => (
                            <div
                                key={index}
                                className={`${item.bg} h-48 md:h-64 rounded-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300 flex items-center justify-center text-center p-6`}
                            >
                                <div
                                    className={`${item.bg === 'bg-gray-100' || item.bg === 'bg-amber-100' ? 'text-gray-800' : 'text-white'} font-bold text-lg`}>
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>*/}

                <section className="mt-8 w-full ">
                    <ShortsCarousel
                        shorts={reels}
                        mobileWidthClass="w-[78%]"
                        mobileMaxWidthClass="max-w-[360px]"
                    />
                </section>

                {/* CTA Section */}
                <div className="container mx-auto px-4 py-12 md:py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl md:text-2xl mb-6 leading-relaxed">
                            No se trata solo de un logo. Se trata de crear una marca con<br/>
                            identidad, personalidad y propósito.
                        </p>

                        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                            Una marca que conecte, que inspire y que venda.
                        </p>

                        <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-12">
                            ¿Listo para construir una<br/>
                            marca que deje huella?
                        </h3>

                        <button
                            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-8 rounded-full flex items-center gap-3 mx-auto mb-8 transition-all duration-300 transform hover:scale-105">
                            <MessageCircle className="w-6 h-6"/>
                            CONTÁCTANOS
                        </button>

                        <div className="text-sm opacity-90">
                            <p>Respuesta en menos de 24 horas.</p>
                            <p>Cupos limitados por mes.</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="container mx-auto px-4 py-8">
                    <div className="flex justify-center gap-8">
                        <Instagram
                            className="w-8 h-8 hover:text-pink-400 cursor-pointer transition-colors duration-300"/>
                        <Music className="w-8 h-8 hover:text-pink-400 cursor-pointer transition-colors duration-300"/>
                        <Facebook
                            className="w-8 h-8 hover:text-blue-400 cursor-pointer transition-colors duration-300"/>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;