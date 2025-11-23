export const formatLocalePrice = (value?: number, locale: Intl.LocalesArgument = 'ko-KR') => {
  if (value === undefined) {
    return '';
  }

  switch (locale) {
    case 'ko-KR': {
      return new Intl.NumberFormat('ko-KR', {
        maximumFractionDigits: 0,
      }).format(value);
    }
    case 'en-US': {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(value);
    }
    case 'ja-JP': {
      return new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: 'JPY',
        maximumFractionDigits: 0,
      }).format(value);
    }
    default: {
      return new Intl.NumberFormat(locale).format(value);
    }
  }
};
