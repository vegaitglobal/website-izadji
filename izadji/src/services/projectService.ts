import { apiGet } from '../utils/apiHelpers';

const getProjectPages = () => apiGet('/api/projects-pages?populate=deep');

const getProjectPage = (id: string | undefined) =>
  apiGet(`/api/projects-pages/${id}?populate=deep`);

const projectPagesService = {
  getProjectPages,
  getProjectPage,
};

export default projectPagesService;
