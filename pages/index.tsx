import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import { Home } from '../src/components/Home';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JSW.TF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/jswtf.svg" alt="JSWTF logo" />
      </main>
    </div>
  );
}
