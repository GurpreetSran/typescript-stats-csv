export const dateStringTodate = (dateString: string): Date => {
  // 28/10/2018
  const dates = dateString.split('/').map(
    (value: string): number => {
      return parseInt(value, 10);
    }
  );

  return new Date(dates[2], dates[1] - 1, dates[0]);
};
