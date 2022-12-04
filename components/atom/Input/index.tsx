import React from 'react';
import styles from './input.module.css';

type Props = Omit<React.ComponentProps<'input'>, 'className'> & {
  ref?: React.RefObject<HTMLInputElement>;
};

export const Input: React.FC<Props> = ({ ...props }) => (
  <input {...props} ref={props.ref} className={styles.input} />
);
