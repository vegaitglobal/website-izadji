import axios from 'axios';

const getWorkProgramPages = () =>
  axios.get('/api/work-program-pages?populate=deep');

const workProgramService = {
  getWorkProgramPages,
};

export default workProgramService;
