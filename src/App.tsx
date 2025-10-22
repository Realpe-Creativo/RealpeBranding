import {Instagram, Facebook, Globe} from "lucide-react";
import {SiTiktok} from "react-icons/si";
import {ShortsCarousel} from "./Components/ShortsCarousel";
import HeroGroup from "./Components/HeroGroup";
import React from "react";
import LiquidWhatsappButton from "./Components/LiquidWhatsappButton";

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
            imgMobile: "/basico.jpg",
            imgDesktop: "/hero01.png",
            imgAlt: "Curso Instagram para negocios y marcas personales",
            ctaText: "CONTACTAR A REALPE",
            ctaHref: "https://wa.me/573168524218?text=Hola%20Realpe!%20Estoy%20interesad%40%20en%20el%20paquete%20de%20dise%C3%B1o%20b%C3%A1sico",
            ctaGradient: "from-[#f6f38c] to-[#f9b919]",      // gradiente del botón
            heightClass: "h-[78vh] lg:h-[86vh]",
            // En móvil: arriba al centro. En desktop: a la derecha centrado vertical
            buttonPosClass:
                "justify-center items-start pt-6 md:pt-0 md:justify-end md:items-center",
            // Para desktop, separa un poco del borde derecho
            backgroundColor: "bg-[#321c43]",
            containerClassName: "md:pr-2",
            buttonClassName: "text-base text-[#321c43] md:text-lg",
            text_color: "text-[#321c43]",
        },
        {
            // Otro hero con su propio par de imágenes y botón con otros colores
            imgMobile: "/estandar.jpg",
            imgDesktop: "/hero02.png",
            imgAlt: "Workshop Ads 360",
            ctaText: "CONTACTAR A REALPE",
            ctaHref: "https://wa.me/573168524218?text=Hola%20Realpe!%20Estoy%20interesad%40%20en%20el%20paquete%20de%20dise%C3%B1o%20est%C3%A1ndar",
            ctaGradient: "from-[#c18cf6] to-[#321c43]",
            heightClass: "h-[78vh] lg:h-[86vh]",
            buttonPosClass:
                "justify-center items-start pt-8 md:pt-0 md:justify-start md:items-center",
            containerClassName: "md:pl-16",
            backgroundColor: "bg-[#f9b919]",
            buttonClassName: "text-base text-[#ffff] md:text-lg",
            text_color: "text-[#ffff]",
        },
        {
            // Otro hero con su propio par de imágenes y botón con otros colores
            imgMobile: "/premium.jpg",
            imgDesktop: "/hero02.png",
            imgAlt: "Workshop Ads 360",
            ctaText: "CONTACTAR A REALPE",
            ctaHref: "https://wa.me/573168524218?text=Hola%20Realpe!%20Estoy%20interesad%40%20en%20el%20paquete%20de%20dise%C3%B1o%20premium",
            ctaGradient: "from-[#f6f38c] to-[#f9b919]",
            heightClass: "h-[78vh] lg:h-[86vh]",
            buttonPosClass:
                "justify-center items-start pt-8 md:pt-0 md:justify-start md:items-center",
            containerClassName: "md:pl-16",
            backgroundColor: "bg-[#321c43]",
            buttonClassName: "text-base text-[#321c43] md:text-lg",
        },
    ];

    return (
        <div className="min-h-screen relative overflow-x-hidden">

            {/* Content */}
            <div className="relative z-10 text-white">
                {/* Header con imágenes full width */}
                <header className="w-full bg-[#321c43]">
                    <picture>
                        <source media="(min-width: 768px)" srcSet="/header_desktop.png"/>
                        <img
                            src="/portada_movil.jpg"
                            alt="Header"
                            className="w-full h-auto object-cover"
                        />
                    </picture>

                    <div className="container mx-auto md:py-24 text-center text-white relative">
                        {/*<div className="flex items-center justify-center">
                            <img
                                src="/logo.png"
                                alt="Logo PE"
                                className="h-16 md:h-24 w-auto"
                            />
                        </div>*/}


                        <img
                            src="/hero_movil.jpg"
                            alt="hero"
                            className="w-full h-full"
                        />

                        {/*<div className="mt-36 flex justify-center mb-6">
                            <div className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[480px]">
                                <YoutubeReel videoId="G_NgplpYPwY" autoplay mute/>
                            </div>
                        </div>*/}
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

                <section className="w-full ">
                    <ShortsCarousel
                        shorts={reels}
                        mobileWidthClass="w-[78%]"
                        mobileMaxWidthClass="max-w-[360px]"
                    />
                </section>

                {/* Footer */}
                <footer className="container mx-auto mt-12 px-4 py-8 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/fondo.jpg')" }}>
                    <div className="container mx-auto px-4 py-6 md:py-20 text-center">
                        <div className="w-full mx-auto">

                            <LiquidWhatsappButton
                                ctaHref="https://wa.me/573168524218?text=Hola%20Realpe!%20Estoy%20interesad%40%20en%20dise%C3%B1ar%20la%20marca%20de%20mi%20empresa"
                                ctaText="CONTACTAR A REALPE"
                                ctaGradient="from-[#f6f38c] to-[#f9b919]" // gradiente del botón (igual que antes)
                                startColor="#25D366"                       // color inicial blobs
                                endColor="#128C7E"                         // color final blobs
                                buttonClassName="text-base text-[#321c43] md:text-lg mb-6"
                                textColor="text-[#321c43]"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mb-6 gap-8">
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/_realpe?igsh=cXliMzAwcDU4NnVn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-pink-500 transition-colors duration-300"
                        >
                            <Instagram className="w-8 h-8"/>
                        </a>

                        {/* TikTok */}
                        <a
                            href="https://www.tiktok.com/@realpe_co?_t=ZS-90lmlpyfz9N&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-black transition-colors duration-300"
                        >
                            <SiTiktok className="w-8 h-8"/>
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/share/1EEBosZB7t/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-500 transition-colors duration-300"
                        >
                            <Facebook className="w-8 h-8"/>
                        </a>

                        {/* Página web */}
                        <a
                            href="https://realpeco.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-500 transition-colors duration-300"
                        >
                            <Globe className="w-8 h-8"/>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;