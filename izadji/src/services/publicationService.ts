import { apiGet } from '../utils/apiHelpers';

const getPublicationPage = () => apiGet('/api/publication-page?populate=deep');
const getPublications = () => apiGet('/api/publications?populate=deep');

const publicationPageService = {
  getPublicationPage,
  getPublications,
};

export default publicationPageService;
