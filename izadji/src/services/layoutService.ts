import axios from 'axios';

const getLayout = () =>
  axios.get(`${process.env.REACT_APP_STRAPI_HOST}/api/layout?populate=deep`);

const layoutService = {
  getLayout,
};

export default layoutService;
