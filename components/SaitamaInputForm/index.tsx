import { InputWithAlert } from '../InputWithAlert';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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
      <InputWithAlert
        inputProps={{ ...register('name') }}
        errorMessage={errors.name && errors.name.message}
      />
    </form>
  );
};
