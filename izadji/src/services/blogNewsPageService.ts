import { apiGet } from '../utils/apiHelpers';

const getBlogNewsPage = () => apiGet('/api/blog-news-page?populate=deep');
const getBlogs = (
  workProgrammeId: number,
  searchString: string,
  blogsPerPage: number,
  page: number
) =>
  apiGet(
    `/api/blog-pages?filters[work_program][id][$eq]=${workProgrammeId}&populate=deep&pagination[page]=${page}&pagination[pageSize]=${blogsPerPage}&filters[blog_page_tags][title][$containsi]=${searchString}`
  );

const blogNewsPageService = {
  getBlogNewsPage,
  getBlogs,
};

export default blogNewsPageService;
