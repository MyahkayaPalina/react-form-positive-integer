import React, { useState, useCallback } from 'react';

import styles from './index.module.scss';
import Field from '../field';
import Submit from '../submit';
import { isInteger } from '../../utils/isInteger';
import { useVibration } from '../../hooks/useVibration';
import { SubmitEvent } from '../../common/types';

const FormLimit = () => {
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState('');
  const { vibrate, handleVibration } = useVibration(false);

  const onLimitChange = useCallback((value: string) => {
    const incorrectValue = !isInteger(value);

    setLimit(value);
    setError(incorrectValue);

    if (incorrectValue) {
      handleVibration();
    }
  }, [handleVibration]);

  const onSubmit = useCallback((event: SubmitEvent) => {
    event.preventDefault();

    if (error) {
      return handleVibration();
    }

    alert(`Limit is: ${limit}`);
  }, [error, limit, handleVibration]);

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Field
        value={limit}
        id="limit_id"
        label="Type the limit"
        vibrate={vibrate}
        error={error}
        onChangeValue={onLimitChange}
      />
      <Submit error={error} text="Save limit"/>
    </form>
  );
};

export default FormLimit;