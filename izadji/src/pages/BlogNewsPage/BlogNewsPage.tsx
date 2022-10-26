import { ReactNode, useCallback, useEffect, useState } from 'react';
import { MapComponents } from '../../utils/mappers/sharedMapper';
import blogNewsPageService from '../../services/blogNewsPageService';
import BlogNewsNav from '../../components/BlogNewsNav/BlogNewsNav';

type Article = {
  title: string;
};

const BlogNewsPage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  //TODO: pull work programmes for strapi

  const onFilterChange = useCallback(
    async (programmeId: number, searchString: string) => {
      const blogsResponse = await blogNewsPageService.getBlogs(
        programmeId,
        searchString
      );
      setArticles(
        //TODO: Mark rest of the article fields
        blogsResponse.data.data.map((b: any) => ({ title: b.attributes.title }))
      );
    },
    []
  );

  useEffect(() => {
    blogNewsPageService.getBlogNewsPage().then((response) => {
      MapComponents(
        response.data.data.attributes.components,
        [],
        setComponents
      );
    });
  }, []);

  return (
    <>
      <BlogNewsNav onFilterChange={onFilterChange}></BlogNewsNav>
      {articles.map((a: any) => (
        <div key={a.title}>{a.title}</div>
      ))}
      {components}
    </>
  );
};

export default BlogNewsPage;
