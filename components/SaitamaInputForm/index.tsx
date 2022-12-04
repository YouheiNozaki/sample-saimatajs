import { InputWithAlert } from '../InputWithAlert';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import styles from './saitamaInputForm.module.css';

const schema = z.object({
  name: z.string(),
});

type Schema = z.infer<typeof schema>;

export const SaitamaInputForm = () => {
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
        console.log(d);
      })}
    >
      <label htmlFor="name" className={styles.label}>
        行ったことがある埼玉県の市町村は？
      </label>
      <InputWithAlert
        // aria-invalid={errors.name ? 'true' : 'false'}
        inputProps={{ ...register('name'), id: 'name' }}
        errorMessage={errors.name && errors.name.message}
      />
    </form>
  );
};
