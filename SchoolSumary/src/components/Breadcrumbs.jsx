import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ items }) => {
  const navigate = useNavigate();
  return (
    <nav className={styles.breadcrumbs}>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.path ? (
            <span
              className={styles['breadcrumb-link']}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </span>
          ) : (
            <span className={styles['breadcrumb-current']}>{item.label}</span>
          )}
          {idx < items.length - 1 && (
            <span className={styles['breadcrumb-sep']}>&#8250;</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
