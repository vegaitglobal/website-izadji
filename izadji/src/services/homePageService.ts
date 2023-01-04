import { apiGet } from '../utils/apiHelpers';

const getHomePage = () => apiGet('/api/homepage?populate=deep');

const homePageService = {
  getHomePage,
};

export default homePageService;
