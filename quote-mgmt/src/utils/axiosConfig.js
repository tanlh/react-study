import axios from 'axios';

const axiosConfig = () => {
  axios.defaults.baseURL =
    'https://react-study-d1641-default-rtdb.asia-southeast1.firebasedatabase.app/';
};

export default axiosConfig;
