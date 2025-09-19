import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const navigate = useNavigate();

  const courseUnits = [
    {
      id: 1,
      title: 'Básica Elemental',
      key: 'basicaelemental',
      icon: '🤖',
      lessons: ['Unidad 1', 'Unidad 2', 'Unidad 3', 'Unidad 4']
    },
    {
      id: 2,
      title: 'Básica Media',
      key: 'basicamedia',
      icon: '🔧',
      lessons: ['Unidad 1', 'Unidad 2', 'Unidad 3', 'Unidad 4']
    },
    {
      id: 3,
      title: 'Básica Superior',
      key: 'basicasuperior',
      icon: '💻',
      lessons: ['Unidad 1', 'Unidad 2', 'Unidad 3', 'Unidad 4']
    },
    {
      id: 4,
      title: 'Bachillerato',
      key: 'bachillerato',
      icon: '⚡',
      lessons: ['Unidad 1', 'Unidad 2', 'Unidad 3', 'Unidad 4']
    }
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Solo expande/colapsa el nivel
  const selectUnit = (unitId) => {
    setSelectedUnit(selectedUnit === unitId ? null : unitId);
  };

  // Navega al syllabus específico de nivel y unidad
  const goToSyllabus = (unitKey, lessonIndex) => {
    navigate(`EduGuide/syllabus/${unitKey}/${lessonIndex + 1}`);
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className={styles.menuToggle}
        onClick={toggleNavbar}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
      
      <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.navHeader}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🤖</span>
            <h2 className={styles.logoText}>Guía Robótica</h2>
          </div>
        </div>

        <div className={styles.navContent}>
          <div className={styles.unitsContainer}>
            {courseUnits.map((unit) => (
              <div key={unit.id} className={styles.unitItem}>
                <button
                  className={`${styles.unitButton} ${selectedUnit === unit.id ? styles.active : ''}`}
                  onClick={() => selectUnit(unit.id)}
                >
                  <span className={styles.unitIcon}>{unit.icon}</span>
                  <span className={styles.unitTitle}>{unit.title}</span>
                  <span className={`${styles.arrow} ${selectedUnit === unit.id ? styles.rotated : ''}`}>
                    ▼
                  </span>
                </button>
                
                <div className={`${styles.lessonsContainer} ${selectedUnit === unit.id ? styles.expanded : ''}`}>
                  {unit.lessons.map((lesson, index) => (
                    <button
                      key={index}
                      className={styles.lessonButton}
                      onClick={() => goToSyllabus(unit.key, index)}
                    >
                      <span className={styles.lessonDot}>•</span>
                      {lesson}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {isOpen && <div className={styles.overlay} onClick={toggleNavbar}></div>}
    </>
  );
};

export default Navbar;