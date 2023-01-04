import { apiGet } from '../utils/apiHelpers';

const getContactUsPage = () => apiGet('/api/contact-page?populate=deep');

const contactUsPageService = {
  getContactUsPage,
};

export default contactUsPageService;
