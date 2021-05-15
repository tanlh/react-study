import axios from 'axios';

const axiosSetupGlobalConfig = () => {
  axios.defaults.baseURL =
    'https://react-study-d1641-default-rtdb.asia-southeast1.firebasedatabase.app/';

  axios.interceptors.request.use(
    (request) => request,
    (error) => {
      console.log('[Axios] request', error);
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log('[Axios] response', error);
      return Promise.reject(error);
    }
  );
};

export default axiosSetupGlobalConfig;
