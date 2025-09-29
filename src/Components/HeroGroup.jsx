import React from "react";
import Hero from "./Hero";

export default function HeroGroup({ items = [] }) {
    return (
        <div className="w-full">
            {items.map((props, i) => (
                <Hero key={i} {...props} />
            ))}
        </div>
    );
}
