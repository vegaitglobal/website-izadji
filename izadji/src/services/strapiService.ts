import axios from 'axios';

const getProjectPages = () =>
  axios.get(
    `${process.env.REACT_APP_STRAPI_HOST}/api/projects-pages?populate=deep,10`
  );

const strapiService = {
  getProjectPages,
};

export default strapiService;
