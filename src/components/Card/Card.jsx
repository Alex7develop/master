/* eslint-disable react/prop-types */

import styles from './Card.module.css';

const Card = ({ content, number }) => {
  return (
    <div className={styles.card}>
      <h1>{number}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Card;
