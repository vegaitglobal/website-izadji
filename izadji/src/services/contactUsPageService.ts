import axios from 'axios';

const getContactUsPage = () => axios.get('/api/contact-page?populate=deep');

const contactUsPageService = {
  getContactUsPage,
};

export default contactUsPageService;
