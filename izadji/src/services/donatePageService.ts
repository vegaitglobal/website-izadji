import axios from 'axios';

const getDonatePage = () => axios.get('/api/donate-page?populate=deep');

const donatePageService = {
  getDonatePage,
};

export default donatePageService;
