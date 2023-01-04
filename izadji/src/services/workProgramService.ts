import { apiGet } from '../utils/apiHelpers';

const getWorkProgramPagesWithDeepPopulation = () =>
  apiGet('/api/work-program-pages?populate=deep');

const getWorkProgramPages = () =>
  apiGet(
    '/api/work-program-pages?populate[0]=featuredBlogPage&populate[1]=featuredBlogPage.blogBanner&populate[2]=featuredBlogPage.blogBanner.image'
  );

const getWorkProgramPage = (id: number) =>
  apiGet(`/api/work-program-pages/${id}?populate=deep`);

const workProgramService = {
  getWorkProgramPagesWithDeepPopulation,
  getWorkProgramPagesWithFeaturedBlogPage: getWorkProgramPages,
  getWorkProgramPage,
};

export default workProgramService;
