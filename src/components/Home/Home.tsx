import { ReactNode } from 'react';
import styles from './Home.module.scss';

type HomeProps = {
  children: ReactNode;
};

export const Home = ({ children }: HomeProps) => {
  return <div className={styles.home}>JSW.TF</div>;
};
