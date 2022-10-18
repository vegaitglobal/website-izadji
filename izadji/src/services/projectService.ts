import axios from 'axios';

const getProjectPages = () =>
  axios.get(
    `${process.env.REACT_APP_STRAPI_HOST}/api/projects-pages?populate=deep`
  );

const projectPagesService = {
  getProjectPages,
};

export default projectPagesService;
