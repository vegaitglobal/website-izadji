import axios from 'axios';

const getHomePage = () =>
  axios.get(`${process.env.REACT_APP_STRAPI_HOST}/api/homepage?populate=deep`);

const homePageService = {
  getHomePage,
};

export default homePageService;
