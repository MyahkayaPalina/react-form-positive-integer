export const isInteger = (value: string | number) => {
  const numericValue = Number(value);

  if (isNaN(numericValue)) return false;

  const isInteger = numericValue % 1 === 0;
  const isSameAsString = String(numericValue) === value;

  return isInteger && isSameAsString;
}
