import axios from 'axios';

export const getComments = (quoteId) => {
  return axios
    .get(`/comments/${quoteId}.json`)
    .then((response) => response.data || {})
    .then((data) =>
      Object.entries(data).map(([key, value]) => {
        return {
          id: key,
          text: value.text,
        };
      })
    );
};

export const addComment = (commentData) => {
  return axios.post(`/comments/${commentData.quoteId}.json`, commentData);
};
