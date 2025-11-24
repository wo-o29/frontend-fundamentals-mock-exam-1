export const parseNumberFromString = (value: string) => {
  if (value === '') {
    return;
  }

  const cleanNumber = value.replace(/[^0-9]/g, '');
  const numberInteger = parseInt(cleanNumber, 10);
  if (Number.isNaN(numberInteger)) {
    return;
  }

  return numberInteger;
};
