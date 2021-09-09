import Head from 'next/head'

import styles from './layout.module.css'

export default function Layout({ children }: {children: any}) {
  return (
    <div className={styles.container}>
      <Head>
          <title>Notepad application</title>
          <meta name="description" content="Notepad application" />
        </Head>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
