import { apiGet } from '../utils/apiHelpers';

const getLayout = () => apiGet('/api/layout?populate=deep');

const layoutService = {
  getLayout,
};

export default layoutService;
