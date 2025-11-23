export const parsePriceFromString = (value: string) => {
  if (value === '') {
    return;
  }

  const cleanPrice = value.replaceAll(',', '');
  const priceNumber = parseInt(cleanPrice, 10);
  if (Number.isNaN(priceNumber)) {
    return;
  }

  return priceNumber;
};
