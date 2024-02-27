/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = ({ activeTab }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTitle = () => {
    return activeTab === 'charts' ? 'Overview' : 'Sales Export';
  };

  return (
    <div className={styles.header}>
      <h1>{getTitle()}</h1>
      <div className={styles.icon}>
        <img src="/coffee1.png" alt="icon" width={30} height={30} />
      </div>
      <div className={styles.datetime}>{currentTime.toLocaleString()}</div>
    </div>
  );
};

export default Header;
