import axios from 'axios';

const getPublicationPage = () => axios.get('/api/publication-page?populate=deep');
const getPublications= () => axios.get('/api/publications?populate=deep');

const publicationPageService = {
  getPublicationPage,
  getPublications
};

export default publicationPageService;