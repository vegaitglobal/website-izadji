import axios from 'axios';

const getPridePage = () => axios.get('/api/pride-page?populate=deep');

const pridePageService = {
  getPridePage,
};

export default pridePageService;
