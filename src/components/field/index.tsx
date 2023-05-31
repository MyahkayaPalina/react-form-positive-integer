import React, { useCallback } from 'react';

import styles from './index.module.scss';
import { ChangeEvent } from '../../common/types';

interface IField {
  value: string,
  id: string,
  label: string,
  vibrate: boolean,
  error: boolean,
  onChangeValue: (value: string) => void
};

const Field = ({ value, id, label, vibrate, error, onChangeValue } : IField) => {
  const onChange = useCallback((event: ChangeEvent) => {
    onChangeValue(event.target.value);
  }, [onChangeValue]);

  return (
    <>
      <label htmlFor={id} className={styles.label}>{label}</label>

      <div className={`
        ${styles.field}
        ${error ? styles.field__error : ''}
        ${vibrate ? styles.field__vibrate : ''}`
      }>
        <input
          id={id}
          type="text"
          value={value}
          className={styles.element}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Field;