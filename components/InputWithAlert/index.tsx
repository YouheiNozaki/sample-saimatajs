import { Alert } from '../atom/Alert';
import { Input } from '../atom/Input';
import styles from './inputWithAlert.module.css';

type Props = {
  inputProps: React.ComponentPropsWithoutRef<'input'>;
  errorMessage?: string;
};

export const InputWithAlert: React.FC<Props> = ({
  inputProps,
  errorMessage,
}) => {
  console.log(inputProps);
  return (
    <div className={styles.main}>
      <Input {...inputProps} />
      <Alert message={errorMessage} />
    </div>
  );
};
