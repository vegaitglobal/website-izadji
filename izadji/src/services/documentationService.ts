import { apiGet } from '../utils/apiHelpers';

const getDocumentationPage = () =>
  apiGet('/api/documentation-page?populate=deep');
const getDocuments = () => apiGet('/api/documents?populate=deep');

const documentationPageService = {
  getDocumentationPage,
  getDocuments,
};

export default documentationPageService;
