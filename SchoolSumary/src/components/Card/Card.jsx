import React from 'react';
import styles from './card.module.css';

const Card = ({ title, icon, lessons }) => (
  <div className={styles.card}>
    <div className={styles.header}>
      <span className={styles.icon}>{icon}</span>
      <h2 className={styles.title}>{title}</h2>
    </div>
    <ul className={styles.lessonList}>
      {lessons.map((lesson, idx) => (
        <li key={idx} className={styles.lessonItem}>
          <span className={styles.dot}>•</span>
          {lesson}
        </li>
      ))}
    </ul>
  </div>
);

export default Card;
