import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './input.module.css';

type Props = React.ComponentPropsWithoutRef<'input'> & {
  error?: string;
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={clsx(styles.input, error && styles.error)}
      />
    );
  },
);
