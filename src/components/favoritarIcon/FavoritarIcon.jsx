import React from 'react';
import styled from 'styled-components';

const FavoriteIcon = ({ width = 24, height = 24, className = "", ...props }) => {
  return (
    <StyledWrapper>
      <div title="Favoritar" className="fav-container">
        <input className="checkbox" type="checkbox" />
        <div className="svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`save-regular ${className}`}
            viewBox="0 0 384 512"
            width={width}
            height={height}
            {...props}
          >
            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`save-solid ${className}`}
            viewBox="0 0 384 512"
            width={width}
            height={height}
            {...props}
          >
            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .fav-container {
    --fav-color: rgb(91, 173, 255);
    position: relative;
    width: 50px;
    height: 50px;
    transition: .3s;
  }

  .fav-container .checkbox {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 20;
    cursor: pointer;
  }

  .fav-container .svg-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fav-container .save-regular,
  .fav-container .save-solid {
    fill: var(--fav-color);
    position: absolute;
  }

  .fav-container .save-solid {
    animation: keyframes-fill 0.5s;
    display: none;
  }

  .fav-container .checkbox:checked ~ .svg-container .save-regular {
    display: none;
  }

  .fav-container .checkbox:checked ~ .svg-container .save-solid {
    display: block;
  }

  @keyframes keyframes-fill {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    50% {
      transform: scaleY(1.2);
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default FavoriteIcon;
