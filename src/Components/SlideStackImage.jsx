import { useState } from "react";
import "./animations.css";

function SlideStackImage({ images = [], alt = "" }) {
  const [stack, setStack] = useState(images);

  const rotateStack = (clickedIndex) => {
    setStack((prev) => {
      const clicked = prev[clickedIndex];
      const rest = prev.filter((_, i) => i !== clickedIndex);
      return [...rest, clicked];
    });
  };

  // se toman máximo 5 imágenes para el efecto
  const visualStack = [...stack].slice(0, 5).reverse();

  return (
      <div className="slide-stack">
        {visualStack.map((src, visualIndex) => {
          const realIndex = stack.indexOf(src);
          const isFront = visualIndex === visualStack.length - 1;

          return (
              <img
                  key={`${src}-${stack.length}`}
                  src={src}
                  alt={isFront ? alt : ""}
                  aria-hidden={!isFront}
                  className={`slide-stack__img slide-stack__img--${visualIndex}`}
                  onClick={() => rotateStack(realIndex)}
              />
          );
        })}
      </div>
  );
}

export default SlideStackImage;