import React from 'react';
import styles from './CardButton.module.css';

const CardButton = ({ title, description, image, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    {image && (
      <img src={image} alt={title} style={{ width: '60px', height: '60px', objectFit: 'contain', marginBottom: '1rem' }} />
    )}
    <h3>{title}</h3>
    {description && <p>{description}</p>}
  </div>
);

export default CardButton;
