import axios from 'axios';

const getProjectPages = () => axios.get('/api/projects-pages?populate=deep,10');

const strapiService = {
  getProjectPages,
};

export default strapiService;
