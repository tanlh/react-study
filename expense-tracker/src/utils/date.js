export const getMonth = (date) =>
  date.toLocaleString('en-US', { month: 'long' });
export const getFullYear = (date) => date.getFullYear();
export const getDay = (date) =>
  date.toLocaleString('en-US', { day: '2-digit' });
