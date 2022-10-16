import axios from 'axios';

const getPridePage = () =>
  axios.get(
    `${process.env.REACT_APP_STRAPI_HOST}/api/pride-page?populate=deep`
  );

const pridePageService = {
  getPridePage,
};

export default pridePageService;
