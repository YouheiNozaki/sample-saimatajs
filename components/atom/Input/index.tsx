import { forwardRef } from 'react';
import styles from './input.module.css';

type Props = React.ComponentPropsWithoutRef<'input'>;

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, Props>(
  ({ ...props }, ref) => {
    return <input {...props} ref={ref} className={styles.input} />;
  },
);
