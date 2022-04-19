/* eslint import/no-anonymous-default-export: 0 */
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context';

import styles from './header.module.css';

const Header = () => {
  const {
    todosCount,
    actions: { clearAll }
  } = useContext(AppContext);
  const [confirmClear, setConfirmClear] = useState(false);

  const handleClearAll = () => {
    setConfirmClear(true);
  };

  useEffect(() => {
    if (confirmClear && window.confirm('Are you sure to clear ALL todos?')) {
      clearAll();
    }

    return () => {
      setConfirmClear(false);
    };
  }, [clearAll, confirmClear]);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>To do App</h1>
      <span>Total Items {todosCount}</span>
      <button onClick={handleClearAll}>Clear All</button>
    </header>
  );
};

export default Header;
