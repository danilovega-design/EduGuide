import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './HomeCards.module.css';
import UnidadCardButton from '../components/UnidadCardButton';
import Breadcrumbs from '../components/Breadcrumbs';

const unidades = [1, 2, 3, 4,5];

const NivelPage = () => {
  const navigate = useNavigate();
  const { nivel } = useParams();
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: 'Inicio', path: '/' },
          { label: nivel.replace('-', ' ') }
        ]}
      />
      <div className={styles.cardsContainer}>
        {unidades.map((unidad) => (
          <UnidadCardButton
            key={unidad}
            unidad={unidad}
            onClick={() => navigate(`/nivel/${nivel}/unidad/${unidad}`)}
          />
        ))}
      </div>
      <button style={{marginTop: '2.5rem', background: 'none', color: '#350a06', border: 'none', fontSize: '1rem', cursor: 'pointer'}} onClick={() => navigate(-1)}>&larr; Volver</button>
    </div>
  );
};

export default NivelPage;
