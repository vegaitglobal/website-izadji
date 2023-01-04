import { apiGet } from '../utils/apiHelpers';

const getProjectPages = () => apiGet('/api/projects-pages?populate=deep,10');

const strapiService = {
  getProjectPages,
};

export default strapiService;
