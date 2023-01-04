import { apiGet } from '../utils/apiHelpers';

const getSingleBlogPage = (id: string | undefined) =>
  apiGet(`/api/blog-pages/${id}?populate=deep`);

const singleBlogService = {
  getSingleBlogPage,
};

export default singleBlogService;
