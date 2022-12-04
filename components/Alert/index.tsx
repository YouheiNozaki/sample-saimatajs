import styles from './alert.module.css';

type Props = {
  message?: string;
};

export const Alert: React.FC<Props> = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <span role="alert" className={styles.alert}>
      {message}
    </span>
  );
};
