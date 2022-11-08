import axios from 'axios';

const getWorkProgramPagesWithDeepPopulation = () =>
  axios.get('/api/work-program-pages?populate=deep');

const getWorkProgramPages = () =>
  axios.get(
    '/api/work-program-pages?populate[0]=featuredBlogPage&populate[1]=featuredBlogPage.blogBanner&populate[2]=featuredBlogPage.blogBanner.image'
  );

const getWorkProgramPage = (id: number) =>
  axios.get(`/api/work-program-pages/${id}?populate=deep`);

const workProgramService = {
  getWorkProgramPagesWithDeepPopulation,
  getWorkProgramPagesWithFeaturedBlogPage: getWorkProgramPages,
  getWorkProgramPage,
};

export default workProgramService;
