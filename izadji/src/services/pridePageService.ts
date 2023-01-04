import { apiGet } from '../utils/apiHelpers';

const getPridePage = () => apiGet('/api/pride-page?populate=deep');

const pridePageService = {
  getPridePage,
};

export default pridePageService;
