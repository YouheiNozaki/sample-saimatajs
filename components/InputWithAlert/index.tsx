import { Alert } from '../Alert';
import { Input } from '../Input';
import styles from './inputWithAlert.module.css';

type Props = {
  inputProps: React.ComponentPropsWithoutRef<'input'>;
  errorMessage?: string;
};

export const InputWithAlert: React.FC<Props> = ({
  inputProps,
  errorMessage,
}) => {
  return (
    <div className={styles.main}>
      <Input {...inputProps} error={errorMessage} />
      <Alert message={errorMessage} />
    </div>
  );
};
