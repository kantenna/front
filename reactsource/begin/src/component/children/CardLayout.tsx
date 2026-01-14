import type { ReactNode } from 'react';
import styles from '../props/Card.module.css';

function Cardlayout({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className={styles.card}>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Cardlayout;
