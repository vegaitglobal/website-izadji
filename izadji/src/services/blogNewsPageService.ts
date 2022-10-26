import axios from 'axios';

const getBlogNewsPage = () => axios.get('/api/blog-news-page?populate=deep');
const getBlogs = (workProgrammeId: number, searchString: string) =>
  axios.get(
    `/api/blog-pages?filters[work_program][id][$eq]=${workProgrammeId}&populate=deep`
  );

const blogNewsPageService = {
  getBlogNewsPage,
  getBlogs,
};

export default blogNewsPageService;
