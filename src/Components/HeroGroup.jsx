import React from "react";
import Hero from "./Hero";

export default function HeroGroup({ items = [], premiumRef }) {
  return (
      <div className="w-full">
        {items.map((props, i) => {
          const isPremium = (props.ctaText || "").toUpperCase().includes("PREMIUM");

          return (
              <div key={i} ref={isPremium ? premiumRef : null}>
                <Hero {...props} />
              </div>
          );
        })}
      </div>
  );
}