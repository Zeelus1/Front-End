import { useState } from 'react';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  star: {
    cursor: 'pointer',
    fontSize: '24px',
    transition: 'all 0.2s ease',
    userSelect: 'none',
    color: '#ddd',
    filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))'
  },
  starFilled: {
    color: '#ffc107'
  },
  starHover: {
    transform: 'scale(1.1)',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
  },
  readonly: {
    cursor: 'default'
  },
  label: {
    marginLeft: '8px',
    fontSize: '14px',
    color: '#666'
  }
};

const Stars = ({ 
  rating = 0, 
  maxStars = 5, 
  onRatingChange = null, 
  readonly = false,
  showLabel = false,
  size = 24
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(rating);

  const handleStarClick = (starIndex) => {
    if (readonly) return;
    
    const newRating = starIndex + 1;
    setCurrentRating(newRating);
    
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const handleStarHover = (starIndex) => {
    if (readonly) return;
    setHoverRating(starIndex + 1);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverRating(0);
  };

  const getStarStyle = (starIndex) => {
    const isHovered = hoverRating > 0 && starIndex < hoverRating;
    const isFilled = starIndex < (hoverRating || currentRating);
    
    return {
      ...styles.star,
      ...(isFilled && styles.starFilled),
      ...(isHovered && !readonly && styles.starHover),
      ...(readonly && styles.readonly),
      fontSize: `${size}px`
    };
  };

  const getRatingText = () => {
    const displayRating = hoverRating || currentRating;
    if (displayRating === 0) return 'Sem avaliação';
    if (displayRating === 1) return '1 estrela';
    return `${displayRating} estrelas`;
  };

  return (
    <div style={styles.container}>
      <div 
        style={{ display: 'flex', gap: '2px' }}
        onMouseLeave={handleMouseLeave}
      >
        {Array.from({ length: maxStars }, (_, index) => (
          <span
            key={index}
            style={getStarStyle(index)}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            role={readonly ? 'img' : 'button'}
            aria-label={`${index + 1} estrela${index > 0 ? 's' : ''}`}
            tabIndex={readonly ? -1 : 0}
            onKeyDown={(e) => {
              if (!readonly && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                handleStarClick(index);
              }
            }}
          >
            ★
          </span>
        ))}
      </div>
      
      {showLabel && (
        <span style={styles.label}>
          {getRatingText()}
        </span>
      )}
    </div>
  );
};

export default Stars