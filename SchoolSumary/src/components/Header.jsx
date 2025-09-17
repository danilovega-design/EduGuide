import React from 'react';
import logo from '../assets/logo.png';
import styles from './Header.module.css';

const Header = () => (
	<header className={styles.header}>
		<div className={styles.logoTitle}>
			<img src={logo} alt="Robotica Logo" className={styles.logo} />
			<span className={styles.title}>Robotica</span>
		</div>
		<div className={styles.chip}>
			Fichas de Computación
		</div>
	</header>
);

export default Header;
