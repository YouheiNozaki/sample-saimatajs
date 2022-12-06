import { InputWithAlert } from '../InputWithAlert';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './saitamaInputForm.module.css';
import { schema, type Schema } from './resolver';

type Props = {
  handle: (bool: boolean) => void;
};

export const SaitamaInputForm: React.FC<Props> = ({ handle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((d) => {
        handle(d.name ? true : false);
      })}
    >
      <label htmlFor="name" className={styles.label}>
        行ったことがある埼玉県の市町村は？
      </label>
      <InputWithAlert
        inputProps={{
          ...register('name'),
          id: 'name',
          placeholder: '例:さいたま市、杉戸町',
        }}
        errorMessage={errors.name && errors.name.message}
      />
      <div className={styles.submit}>
        <button
          type="submit"
          className={styles.primaryButton}
          disabled={errors.name !== undefined}
        >
          送信
        </button>
        <button
          type="button"
          className={styles.secondaryButton}
          onClick={() => handle(false)}
        >
          行ったことないよ
        </button>
      </div>
    </form>
  );
};
