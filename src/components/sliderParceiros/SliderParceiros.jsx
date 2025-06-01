import { useMemo } from 'react';
import Style from './Slider.module.css';

const SliderParceiros = ({ logos = [] }) => {
  const sliderConfig = useMemo(() => {
    const logoCount = logos.length;
    
    if (logoCount === 0) return null;
    
    const minSlides = 8;
    const repetitions = Math.ceil(minSlides / logoCount);
    
    const duplicatedLogos = [];
    for (let i = 0; i < repetitions; i++) {
      duplicatedLogos.push(...logos);
    }
    
    const animationDuration = Math.max(15, logoCount * 3);
    
    return {
      duplicatedLogos,
      totalSlides: duplicatedLogos.length,
      animationDuration,
      logoCount
    };
  }, [logos]);

  if (!sliderConfig) {
    return <div className={Style.noLogos}>Nenhum logo fornecido</div>;
  }

  const { duplicatedLogos, totalSlides, animationDuration, logoCount } = sliderConfig;

  return (
    <div className={Style.slider}>
      <div 
        className={Style.slideTrack}
        style={{
          '--total-slides': totalSlides,
          '--logo-count': logoCount,
          '--animation-duration': `${animationDuration}s`
        }}
      >
        {duplicatedLogos.map((src, index) => (
          <div key={index} className={Style.slide}>
            <img 
              src={src} 
              alt={`Logo ${(index % logoCount) + 1}`}
              height="100" 
              width="250" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderParceiros;