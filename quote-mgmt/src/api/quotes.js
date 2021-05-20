import axios from 'axios';

export const getAllQuotes = () => {
  return axios
    .get('/quotes.json')
    .then((response) => response.data || {})
    .then((data) =>
      Object.entries(data).map(([key, value]) => {
        return {
          id: key,
          ...value,
        };
      })
    );
};

export const getQuoteById = (quoteId) => {
  return axios.get(`/quotes/${quoteId}.json`).then((response) => response.data);
};

export const addQuote = (quoteData) => {
  return axios.post('/quotes.json', quoteData);
};
