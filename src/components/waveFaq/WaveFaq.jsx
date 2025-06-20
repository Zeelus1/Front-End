import React from 'react';
import styles from './WaveFaq.module.css';
import waveImg from '../../img/waveFaq.png';

export default function WaveFaq() {
  return (
    <div className={styles.wrapper}>
      <img src={waveImg} alt="" aria-hidden="true" className={styles.wave} />
    </div>
  );
}
