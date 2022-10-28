import axios from 'axios';

const getWorkProgramPagesWithDeepPopulation = () =>
  axios.get('/api/work-program-pages?populate=deep');

const getWorkProgramPages = () =>
  axios.get(
    '/api/work-program-pages?populate[0]=featuredBlogPage&populate[1]=featuredBlogPage.blogBanner&populate[2]=featuredBlogPage.blogBanner.image'
  );

const workProgramService = {
  getWorkProgramPagesWithDeepPopulation,
  getWorkProgramPagesWithFeaturedBlogPage: getWorkProgramPages,
};

export default workProgramService;
