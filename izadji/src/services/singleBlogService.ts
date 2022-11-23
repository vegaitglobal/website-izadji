import axios from 'axios';

const getSingleBlogPage = (id: string | undefined) =>
  axios.get(`/api/blog-pages/${id}?populate=deep`);

const singleBlogService = {
    getSingleBlogPage,
};

export default singleBlogService;
