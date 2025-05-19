import { useState, useEffect } from "react";
import Style from "./Carrossel.module.css";

const Carrossel = ({ slides, autoSlideInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoSlideInterval]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={Style.carrossel}>
      <div
        className={Style.slidesContainer}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={Style.slide}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={Style.overlay}>
              <div className={Style.content}>
                <h2 className={Style.title}>{slide.title}</h2>
                <p className={Style.description}>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={Style.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${Style.indicator} ${
              index === currentSlide ? Style.active : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrossel;
