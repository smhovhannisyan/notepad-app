import Head from 'next/head';

import styles from './layout.module.css';

type LayoutPropsType = {
  children: any;
  title?: string;
}

function Layout({ children, title = 'Notepad Application' }: LayoutPropsType) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Notepad application</title>
        <meta name="description" content={title} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.mainTitle}>{title}</h1>
        <div className={styles.mainContent}>
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
