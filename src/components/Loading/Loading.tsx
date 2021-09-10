import styles from './loading.module.css';

import LoaderImg from './LoaderSvg';

function Loading() {
  return (
    <div className={styles.loading}>
      <LoaderImg />
    </div>
  );
}

export default Loading;
