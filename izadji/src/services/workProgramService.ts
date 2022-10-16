import axios from 'axios';

const getWorkProgramPages = () =>
  axios.get(
    `${process.env.REACT_APP_STRAPI_HOST}/api/work-program-pages?populate=deep`
  );

const workProgramService = {
  getWorkProgramPages,
};

export default workProgramService;
