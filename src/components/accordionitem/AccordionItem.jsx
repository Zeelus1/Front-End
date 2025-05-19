import React, { useState } from 'react';
import Style from './AccordionItem.module.css';
import ImgSetaBaixo from "../../img/seta.png";

function AccordionItem({ title, icon, textoAlt, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={Style.accordionItem}>
      <div className={Style.header} onClick={() => setIsOpen(!isOpen)}>
        <ul>
          <li className={Style.icon}>
            <img src={icon} alt={textoAlt} />
          </li>
          <li 
            className={Style.title}>{title}
          </li>
          <li className={Style.arrow}>
            <img src={ImgSetaBaixo} alt="Seta" className={`${Style.arrow} ${isOpen ? Style.rotate : ''}`}/>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className={Style.content}>
          {children}
        </div>
      )}
    </div>

    
  );
}

export default AccordionItem;