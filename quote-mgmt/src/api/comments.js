import axios from 'axios';

export const getComments = async (quoteId) => {
  const response = await axios.get(`/comments/${quoteId}.json`);
  const data = response.data || {};
  return Object.entries(data).map(([key, value]) => {
    return {
      id: key,
      text: value.text,
    };
  });
};

export const addComment = async (commentData) => {
  const response = await axios.post(
    `/comments/${commentData.quoteId}.json`,
    commentData
  );
  return response;
};
