import axios from 'axios';

const getDonatePage = () =>
    axios.get(`${process.env.REACT_APP_STRAPI_HOST}/api/donate-page?populate=deep`);

const donatePageService = {
    getDonatePage,
};

export default donatePageService;
