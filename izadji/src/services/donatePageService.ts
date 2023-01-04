import { apiGet } from '../utils/apiHelpers';

const getDonatePage = () => apiGet('/api/donate-page?populate=deep');

const donatePageService = {
  getDonatePage,
};

export default donatePageService;
