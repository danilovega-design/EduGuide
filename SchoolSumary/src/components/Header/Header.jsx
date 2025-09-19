import React, { useState, useEffect } from 'react';
import styles from './header.module.css';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <span className={styles.courseIcon}>🚀</span>
          <h1 className={styles.mainTitle}>Guía Completa de Robótica</h1>
        </div>
        <div className={styles.right}>
          <span className={styles.timeIcon}>🕐</span>
          <span className={styles.time}>{formatTime(currentTime)}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;