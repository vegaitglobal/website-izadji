import axios from 'axios';

const getDocumentationPage = () => axios.get('/api/documentation-page?populate=deep');
const getDocuments= () => axios.get('/api/documents?populate=deep');

const documentationPageService = {
  getDocumentationPage,
  getDocuments
};

export default documentationPageService;