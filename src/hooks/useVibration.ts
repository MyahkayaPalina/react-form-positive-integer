import { useState, useCallback } from 'react';

let addVibration: number;

export const useVibration = (initialValue: boolean) => {
  const [vibrate, setVibration] = useState(initialValue);

  const handleVibration = useCallback(() => {
    clearTimeout(addVibration);

    addVibration = window.setTimeout(() => {
      if (vibrate) { setVibration(false); }

      window.setTimeout(() => {
        setVibration(true);
      }, 100);

      window.setTimeout(() => {
        setVibration(false);
      }, 1100);
    }, 100);
  }, [vibrate]);

  return { vibrate, handleVibration };
};