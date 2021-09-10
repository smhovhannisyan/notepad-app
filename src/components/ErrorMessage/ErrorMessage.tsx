import styles from './errorMessage.module.css';

type ErrorMessagePropsType = {
  message: string | null;
}

function ErrorMessage({ message }: ErrorMessagePropsType) {
  if (!message) {
    return null;
  }
  return <span className={styles.message}>{message}</span>;
}

export default ErrorMessage;
