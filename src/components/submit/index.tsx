import React from 'react';

import styles from './index.module.scss';

interface ISubmit {
  text: string,
  error: boolean,
};

const Submit = ({ text, error } : ISubmit) => (
  <button
    type="submit"
    className={`${styles.submit} ${error ? styles['submit--disabled']: ''}`}>
      {text}
  </button>
)

export default React.memo(Submit);