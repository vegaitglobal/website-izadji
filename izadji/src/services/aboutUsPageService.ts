import axios from 'axios';

const getAboutUsPage = () => axios.get('/api/about-us-page?populate=deep');

const aboutUsPageService = {
  getAboutUsPage,
};

export default aboutUsPageService;
