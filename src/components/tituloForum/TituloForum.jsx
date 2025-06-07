import React from 'react';
import Style from './TituloForum.module.css';

function TituloForum({ children }) {
  return (
    <h2 className={Style.title}>
      {children}
    </h2>
  );
}

export default TituloForum;