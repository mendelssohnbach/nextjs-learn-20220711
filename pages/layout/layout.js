import Head from 'next/head';
import styles from './layout.module.css';

export default function layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <header>{home ? <h1>Home Page Header</h1> : <h1>Other Page Header</h1>}</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
