import axios from 'axios';

const getProjectPages = () =>
  axios.get(
    `${process.env.REACT_APP_STRAPI_HOST}/api/projects-pages?populate=deep`
  );

const getProjectPage = (id: string | undefined) =>
  axios.get(
    `${process.env.REACT_APP_STRAPI_HOST}/api/projects-pages/${id}?populate=deep`
  );

const projectPagesService = {
  getProjectPages,
  getProjectPage,
};

export default projectPagesService;
