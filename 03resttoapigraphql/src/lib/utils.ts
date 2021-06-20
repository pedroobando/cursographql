export const getWikipediaMobileUrl = (url: string) => {
  return url !== undefined ? url.replace('wikipedia', 'm.wikipedia') : '';
};

export const checkYear = (year: string) => {
  const currentYear = new Date().getFullYear();
  return isNaN(+year) || +year < 1950 || +year > currentYear ? String(currentYear) : year;
};

export const checkRound = (round: number) => {
  return round >= 100 ? 1 : round;
};

export const paginationOptions = (pageElements: number, page: number) => {
  const offset = (page - 1) * pageElements;
  const limit = pageElements;
  return `limit=${limit}&offset=${offset}`;
};
