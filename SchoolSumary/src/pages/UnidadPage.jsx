import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './UnidadPage.module.css';

const UnidadPage = () => {
  const { nivel, unidad } = useParams();
  const navigate = useNavigate();
  const [contenido, setContenido] = useState('');


// Importa todos los archivos .html de docs/**
const archivosHtml = import.meta.glob('../../docs/**/*.html', { as: 'raw' });
  useEffect(() => {
    const ruta = `../../docs/${nivel}/unidad${unidad}.html`;
    if (archivosHtml[ruta]) {
      archivosHtml[ruta]().then(setContenido);
    } else {
      setContenido('<h2>Temario no disponible</h2>');
    }
  }, [nivel, unidad]);

  return (
    <div>
      <button className={styles.backButton} onClick={() => navigate(-1)}>&larr; Volver</button>
      {/* Renderiza el HTML directamente */}
      <div dangerouslySetInnerHTML={{ __html: contenido }} />
    </div>
  );
};

export default UnidadPage;
