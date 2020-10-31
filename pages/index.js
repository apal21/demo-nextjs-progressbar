import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.card}>
        <Link href="/about">
          <button className={styles.link} type="button">
            Go to About Page
          </button>
        </Link>
        <div className={styles.info}>
          <ul>
            <li>
              Checkout the NPM package! — &nbsp;
              <a
                href="https://npmjs.com/package/nextjs-progressbar"
                target="_blank"
                rel="noopener"
              >
                Click here!
              </a>
            </li>
            <li>
              Checkout the NextJS Progressbar Github repository and contribute!
              — &nbsp;
              <a
                href="https://github.com/apal21/nextjs-progressbar"
                target="_blank"
                rel="noopener"
              >
                Click here!
              </a>
            </li>
            <li>
              Read the Blog to implement this on your own! — &nbsp;
              <a
                href="https://gosink.in/next-js-make-your-own-progress-bar-indicator-component-easily"
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
