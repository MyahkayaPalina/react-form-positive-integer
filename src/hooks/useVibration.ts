import { useState, useCallback } from 'react';

let addVibration: number;
let removeVibration: number;

export const useVibration = (initialValue: boolean) => {
  const [vibrate, setVibration] = useState(initialValue);

  const addTimeout = useCallback((time: number, value: boolean) => (
    window.setTimeout(() => {
      setVibration(value);
    }, time)
  ), []);

  const handleVibration = useCallback(() => {
    setVibration(() => false);

    clearTimeout(addVibration);
    clearTimeout(removeVibration);

    addVibration = addTimeout(0, true);
    removeVibration = addTimeout(1000, false);
  }, [addTimeout]);

  return { vibrate, handleVibration };
};