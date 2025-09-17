import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomeCards.module.css';
import CardButton from '../components/CardButton';

const cardsData = [
  {
    title: 'Básica Elemental',
    description: 'Recursos y temario para Básica Elemental.',
    image: '',
    path: '/basica-elemental',
  },
  {
    title: 'Básica Media',
    description: 'Recursos y temario para Básica Media.',
    image: '',
    path: '/basica-media',
  },
  {
    title: 'Básica Superior',
    description: 'Recursos y temario para Básica Superior.',
    image: '',
    path: '/basica-superior',
  },
  {
    title: 'Bachillerato',
    description: 'Recursos y temario para Bachillerato.',
    image: '',
    path: '/bachillerato',
  },
   {
    title: 'Hola Mundo',
    description: 'Recursos y temario para Hola Mundo.',
    image: 'https://m.media-amazon.com/images/I/61Aqq+GVa0L._AC_SL1500_.jpg',
    path: '/hola-mundo',
  },
];

const HomeCards = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.cardsContainer}>
      {cardsData.map((card, idx) => (
        <CardButton
          key={idx}
          title={card.title}
          description={card.description}
          image={card.image}
          onClick={() => navigate(card.path)}
        />
      ))}
    </div>
  );
};

export default HomeCards;
