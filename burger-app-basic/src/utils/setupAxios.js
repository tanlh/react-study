import axios from "axios";

const setupAxios = () => {
  axios.defaults.baseURL =
    "https://react-my-burger-33476-default-rtdb.firebaseio.com/";
};

export default setupAxios;
