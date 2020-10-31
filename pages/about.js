import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.card}>
        <Link href="/">
          <button className={styles.link} type="button">
            Go to Home Page
          </button>
        </Link>
        <div className={styles.info}>
          <ul>
            <li>
              Would you like to improve this demo? — &nbsp;
              <a
                href="https://github.com/apal21/demo-nextjs-progressbar"
                target="_blank"
                rel="noopener"
              >
                Click here!
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
