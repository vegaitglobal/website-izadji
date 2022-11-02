import axios from 'axios';

const getHomePage = () => axios.get('/api/homepage?populate=deep');

const homePageService = {
  getHomePage,
};

export default homePageService;
