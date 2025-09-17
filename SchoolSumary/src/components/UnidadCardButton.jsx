import React from 'react';
import styles from './CardButton.module.css';

const UnidadCardButton = ({ unidad, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    <h3>Unidad {unidad}</h3>
    <p>Ver temario y recursos</p>
  </div>
);

export default UnidadCardButton;
