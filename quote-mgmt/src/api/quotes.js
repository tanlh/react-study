import axios from 'axios';

export const getAllQuotes = async () => {
  const response = await axios.get('/quotes.json');
  const data = response.data || {};
  return Object.entries(data).map(([key, value]) => {
    return {
      id: key,
      ...value,
    };
  });
};

export const getQuoteById = async (quoteId) => {
  const response = await axios.get(`/quotes/${quoteId}.json`);
  return response.data;
};

export const addQuote = async (quoteData) => {
  const response = await axios.post('/quotes.json', quoteData);
  return response;
};
