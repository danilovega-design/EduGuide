import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './syllabus.module.css';

const defaultUnits = [
	{
		title: 'basicaelemental',
		icon: '🤖',
		unidades: [
			{
				nombre: 'Unidad 1',
				temas: [
					// Corrige aquí: solo el nombre del archivo
					{ nombre: 'Conceptos básicos', file: 'uso-librerias.html' },
					{ nombre: 'Historia de la robótica', file: '' }
				]
			},
			{
				nombre: 'Unidad 2',
				temas: [
					{ nombre: 'Tipos de robots', file: '' },
					{ nombre: 'Clasificación de robots', file: '' }
				]
			},
			{
				nombre: 'Unidad 3',
				temas: [
					{ nombre: 'Sensores básicos', file: '' },
					{ nombre: 'Actuadores básicos', file: '' }
				]
			},
			{
				nombre: 'Unidad 4',
				temas: [
					{ nombre: 'Proyecto final', file: '' },
					{ nombre: 'Presentación', file: '' }
				]
			}
		]
	},
	{
		title: 'basicamedia',
		icon: '🔧',
		unidades: [
			{
				nombre: 'Unidad 1',
				temas: [
					{ nombre: 'Sensores de distancia', file: '' },
					{ nombre: 'Motores servo', file: '' }
				]
			},
			{
				nombre: 'Unidad 2',
				temas: [
					{ nombre: 'Sensores de luz', file: '' },
					{ nombre: 'Motores DC', file: '' }
				]
			},
			{
				nombre: 'Unidad 3',
				temas: [
					{ nombre: 'Control de velocidad', file: '' },
					{ nombre: 'PWM', file: '' }
				]
			},
			{
				nombre: 'Unidad 4',
				temas: [
					{ nombre: 'Proyecto final', file: '' },
					{ nombre: 'Documentación', file: '' }
				]
			}
		]
	},
	{
		title: 'basicasuperior',
		icon: '💻',
		unidades: [
			{
				nombre: 'Unidad 1',
				temas: [
					{ nombre: 'Uso de librerías', file: '' },
					{ nombre: 'Programación orientada a objetos', file: '' }
				]
			},
			{
				nombre: 'Unidad 2',
				temas: [
					{ nombre: 'Depuración de código', file: '' },
					{ nombre: 'Comunicación serial', file: '' }
				]
			},
			{
				nombre: 'Unidad 3',
				temas: [
					{ nombre: 'Ejemplo: LED parpadeante', file: '' },
					{ nombre: 'Ejemplo: Sensor de temperatura', file: '' }
				]
			},
			{
				nombre: 'Unidad 4',
				temas: [
					{ nombre: 'Proyecto final', file: '' },
					{ nombre: 'Exposición', file: '' }
				]
			}
		]
	},
	{
		title: 'bachillerato',
		icon: '⚡',
		unidades: [
			{
				nombre: 'Unidad 1',
				temas: [
					{ nombre: 'Robot seguidor de línea', file: '' },
					{ nombre: 'Brazo robótico', file: '' }
				]
			},
			{
				nombre: 'Unidad 2',
				temas: [
					{ nombre: 'Robot evasor', file: '' },
					{ nombre: 'Visión artificial', file: '' }
				]
			},
			{
				nombre: 'Unidad 3',
				temas: [
					{ nombre: 'IA en robótica', file: '' },
					{ nombre: 'Control remoto', file: '' }
				]
			},
			{
				nombre: 'Unidad 4',
				temas: [
					{ nombre: 'Proyecto final', file: '' },
					{ nombre: 'Informe', file: '' }
				]
			}
		]
	}
];

const Syllabus = ({ units }) => {
	const { nivel, unidad } = useParams();
	const data = units || defaultUnits;
	const [selectedFile, setSelectedFile] = useState(null);
	const selectedNivel = data.find(u => u.title === nivel);
	const unidadIndex = unidad ? parseInt(unidad, 10) - 1 : 0;
	const selectedUnidad = selectedNivel && selectedNivel.unidades[unidadIndex];

	if (selectedFile) {
		const filePath = `/EduGuide/docs/${nivel}/${unidad}/${selectedFile}`;
		const noFile = !selectedFile || selectedFile.trim() === '';
		return (
			<div className={styles.syllabusContainer}>
				<button
					onClick={() => setSelectedFile(null)}
					style={{
						marginBottom: '1.5rem',
						padding: '0.7rem 2rem',
						background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
						color: '#fff',
						border: 'none',
						marginTop: '2rem',
						borderRadius: '8px',
						fontWeight: '600',
						fontSize: '1.1rem',
						cursor: 'pointer',
						boxShadow: '0 2px 8px rgba(79,172,254,0.12)',
						transition: 'background 0.2s'
					}}
				>
					← Regresar al temario
				</button>
				{noFile ? (
					<div style={{
						width: '100%',
						height: '60vh',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						background: 'linear-gradient(90deg, #f7f8fa 60%, #e0e3e8 100%)',
						borderRadius: '16px',
						boxShadow: '0 4px 24px rgba(79,172,254,0.10)',
						color: '#23263a',
						fontWeight: '600',
						fontSize: '1.3rem'
					}}>
						<span style={{fontSize: '2.5rem', color: '#4facfe', marginBottom: '1rem'}}>📄</span>
						No existe documento para visualizar
					</div>
				) : (
					<iframe
						src={filePath}
						title={selectedFile}
						style={{
							width: '99%',
							height: '90vh',
							border: 'none',
							borderRadius: '12px',
							boxShadow: '0 4px 24px rgba(0,0,0,0.12)'
						}}
					/>
				)}
			</div>
		);
	}

	return (
		<div className={styles.syllabusContainer}>
			{!nivel || !unidad ? (
				<div className={styles.selectedTitle}>Selecciona una unidad para ver el temario</div>
			) : !selectedNivel ? (
				<div className={styles.selectedTitle}>No se encontró el nivel "{nivel}".</div>
			) : !selectedUnidad ? (
				<div className={styles.selectedTitle}>No se encontró la unidad "{unidad}" en el nivel "{nivel}".</div>
			) : (
				<>
					<div className={styles.selectedTitle}>
						{selectedNivel.title.charAt(0).toUpperCase() + selectedNivel.title.slice(1)} - {selectedUnidad.nombre}
					</div>
					<ul className={styles.themeList}>
						{selectedUnidad.temas.map((tema, idx) => (
							<li key={idx} className={styles.themeItem}>
								Tema {idx + 1}: {tema.nombre}
								<button
									className={styles.themeLink}
									style={{
										marginLeft: '1rem',
										color: '#4facfe',
										textDecoration: 'underline',
										fontWeight: 500,
										background: 'none',
										border: 'none',
										cursor: 'pointer'
									}}
									onClick={() => setSelectedFile(tema.file)}
								>
									Ver contenido
								</button>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default Syllabus;