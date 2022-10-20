import axios from 'axios';

const getProjectPages = () => axios.get('/api/projects-pages?populate=deep');

const getProjectPage = (id: string | undefined) =>
  axios.get(`/api/projects-pages/${id}?populate=deep`);

const projectPagesService = {
  getProjectPages,
  getProjectPage,
};

export default projectPagesService;
