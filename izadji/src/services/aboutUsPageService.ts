import { apiGet } from '../utils/apiHelpers';

const getAboutUsPage = () => apiGet('/api/about-us-page?populate=deep');

const aboutUsPageService = {
  getAboutUsPage,
};

export default aboutUsPageService;
