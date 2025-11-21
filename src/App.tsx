import {Instagram, Facebook, Globe} from "lucide-react";
import {SiTiktok} from "react-icons/si";
import {ShortsCarousel} from "./Components/ShortsCarousel";
import HeroGroup from "./Components/HeroGroup";
import React from "react";
import LiquidWhatsappButton from "./Components/LiquidWhatsappButton";

function App() {
    const COUNTRY = import.meta.env.VITE_COUNTRY;
    const isUSA = COUNTRY === "USA";

    const reels = [
        "https://www.youtube.com/embed/g6LeS-LJ7Q4",
        "https://www.youtube.com/embed/4J5_NRM-jiU",
        "https://www.youtube.com/embed/H1vUWGh5LUM",
        "https://www.youtube.com/embed/f2Vvr2a0xTQ",
    ];

    const heroes = [
        {
            imgMobile: isUSA ? "/usa/basico.jpg" : "/basico.jpg",
            imgDesktop: isUSA ? "/usa/basico_desktop.jpg" : "/basico_desktop.jpg",
            imgAlt: "Curso Instagram para negocios y marcas personales",
            ctaText: "CONTACTAR A REALPE",
            ctaHref:
                "https://wa.me/573168524218?text=Hola%20Realpe!%20Estoy%20interesad%40%20en%20el%20paquete%20de%20dise%C3%B1o%20b%C3%A1sico",
            ctaGradient: "from-[#f6f38c] to-[#f9b919]", // gradiente del botón
            heightClass: "h-[78vh] lg:h-[86vh]",
            buttonPosClass:
                "justify-center items-start pt-6 md:pt-0 md:justify-end md:items-center",
            backgroundColor: "bg-[#2e1b3b]",
            containerClassName: "",
            buttonClassName: "text-base text-[#321c43] md:text-lg",
            text_color: "text-[#321c43]",
        },
        {
            imgMobile: isUSA ? "/usa/estandar.jpg" : "/estandar.jpg",
            imgDesktop: isUSA ? "/usa/estandar_desktop.jpg" : "/estandar_desktop.jpg",
            imgAlt: "Workshop Ads 360",
            ctaText: "CONTACTAR A REALPE",
            ctaHref:
                "https://wa.me/573168524218?text=Hola%20Realpe!%20Estoy%20interesad%40%20en%20el%20paquete%20de%20dise%C3%B1o%20est%C3%A1ndar",
            ctaGradient: "from-[#c18cf6] to-[#321c43]",
            heightClass: "h-[80vh] lg:h-[80vh]",
            buttonPosClass:
                "justify-center items-start pt-8 md:pt-0 md:justify-start md:items-center",
            containerClassName: "",
            backgroundColor: "bg-[#f9b919]",
            buttonClassName: "text-base text-[#ffff] md:text-lg",
            text_color: "text-[#ffff]",
        },
        {
            // Otro hero con su propio par de imágenes y botón con otros colores
            imgMobile: isUSA ? "/usa/premium.jpg" : "/premium.jpg",
            imgDesktop: isUSA ? "/usa/premium_desktop.jpg" : "/premium_desktop.jpg",
            imgAlt: "Workshop Ads 360",
            ctaText: "CONTACTAR A REALPE",
            ctaHref:
                "https://wa.me/573168524218?text=Hola%20Realpe!%20Estoy%20interesad%40%20en%20el%20paquete%20de%20dise%C3%B1o%20premium",
            ctaGradient: "from-[#f6f38c] to-[#f9b919]",
            heightClass: "h-[78vh] lg:h-[86vh]",
            buttonPosClass:
                "justify-center items-start pt-8 md:pt-0 md:justify-start md:items-center",
            containerClassName: "",
            backgroundColor: "bg-[#2e1b3b]",
            buttonClassName: "text-base text-[#321c43] md:text-lg",
        },
    ];

    return (
        <div className="min-h-screen relative overflow-x-hidden">

            <div className="relative z-10 text-white">
                <header className="w-full bg-[#321c43]">
                    <picture>
                        <source media="(min-width: 768px)" srcSet="/portada__desktop.jpg"/>
                        <img
                            src="/portada_movil.jpg"
                            alt="Header"
                            className="w-full h-auto object-cover"
                        />
                    </picture>

                    <div className="container mx-auto text-center text-white relative">
                        <picture>
                            {/* Imagen para escritorio */}
                            <source media="(min-width: 1024px)" srcSet="/hero_desktop.jpg"/>

                            {/* Imagen por defecto (móvil) */}
                            <img
                                src="/hero_movil.jpg"
                                alt="hero"
                                className="w-full h-auto md:w-screen md:max-w-none md:relative md:left-1/2 md:right-1/2 md:-translate-x-1/2"
                                loading="eager"
                                fetchPriority="high"
                            />
                        </picture>
                    </div>
                </header>

                <HeroGroup items={heroes}/>

                <section className="w-full ">
                    <ShortsCarousel
                        shorts={reels}
                        mobileWidthClass="w-[78%]"
                        mobileMaxWidthClass="max-w-[360px]"
                    />
                </section>

                {/* Footer */}
                <footer
                    className="relative mt-12 px-4 py-8 bg-cover bg-center bg-no-repeat text-white"
                    style={{backgroundImage: "url('/fondo.jpg')"}}
                >
                    {/* Contenedor interior centrado */}
                    <div className="max-w-6xl mx-auto px-4 py-6 md:py-20 text-center">
                        <div className="w-full mx-auto">
                            <LiquidWhatsappButton
                                ctaHref="https://wa.me/573168524218?text=Hola%20Realpe!%20Estoy%20interesad%40%20en%20dise%C3%B1ar%20la%20marca%20de%20mi%20empresa"
                                ctaText="CONTACTAR A REALPE"
                                ctaGradient="from-[#f6f38c] to-[#f9b919]"
                                startColor="#25D366"
                                endColor="#128C7E"
                                buttonClassName="text-base text-[#321c43] md:text-lg mb-6"
                                textColor="text-[#321c43]"
                            />
                        </div>
                    </div>

                    {/* Íconos redes */}
                    <div className="flex justify-center mb-6 gap-8">
                        <a
                            href="https://www.instagram.com/_realpe?igsh=cXliMzAwcDU4NnVn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-pink-500 transition-colors duration-300"
                        >
                            <Instagram className="w-8 h-8"/>
                        </a>

                        <a
                            href="https://www.tiktok.com/@realpe_co?_t=ZS-90lmlpyfz9N&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-black transition-colors duration-300"
                        >
                            <SiTiktok className="w-8 h-8"/>
                        </a>

                        <a
                            href="https://www.facebook.com/share/1EEBosZB7t/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-500 transition-colors duration-300"
                        >
                            <Facebook className="w-8 h-8"/>
                        </a>

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