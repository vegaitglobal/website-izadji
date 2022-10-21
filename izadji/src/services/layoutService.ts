import axios from 'axios';

const getLayout = () => axios.get('/api/layout?populate=deep');

const layoutService = {
  getLayout,
};

export default layoutService;
