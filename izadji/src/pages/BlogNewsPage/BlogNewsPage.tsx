import { ReactNode, useCallback, useEffect, useState } from 'react';
import { MapComponents } from '../../utils/mappers/sharedMapper';
import blogNewsPageService from '../../services/blogNewsPageService';
import BlogNewsNav, {
  WorkProgrammeInfo,
} from '../../components/BlogNewsNav/BlogNewsNav';
import TrendingArticles from '../../components/TrendingArticles/TrendingArticles';
import { TrendingArticleProps } from '../../components/TrendingArticle/TrendingArticle';
import { routes } from '../../routes';
import BlogNewsBanner, {
  BlogNewsBannerProps,
} from '../../components/BlogNewsBanner/BlogNewsBanner';

const BlogNewsPage = () => {
  const [articlesPerPage, setArticlesPerPage] = useState<number>(4);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [programmeId, setProgrammeId] = useState<number>(-1);
  const [searchString, setSearchString] = useState<string>('');
  const [featuredBlogPage, setFeaturedBlogPage] =
    useState<BlogNewsBannerProps>();
  const [components, setComponents] = useState<ReactNode[]>([]);
  const [articles, setArticles] = useState<TrendingArticleProps[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const onFilterChange = useCallback(
    async (workProgramme: WorkProgrammeInfo, searchString: string) => {
      setProgrammeId(workProgramme.id);
      setSearchString(searchString);
      setCurrentPage(1);
      console.log(workProgramme.featuredBlogPage);
      setFeaturedBlogPage(workProgramme.featuredBlogPage);
    },
    []
  );

  useEffect(() => {
    blogNewsPageService
      .getBlogs(programmeId, searchString, articlesPerPage, currentPage)
      .then((blogsResponse) => {
        const newArticles = blogsResponse.data.data.map((b: any) => ({
          title: b.attributes.title,
          date: b.attributes.blogBanner.date,
          imageSrc: b.attributes.blogBanner.image.data.attributes.url,
          category: b.attributes.work_program.data.attributes.title,
          link: routes.blogPage.replace(':id', b.id),
        }));
        setHasMore(blogsResponse.data.meta.pagination.pageCount != currentPage);
        setArticles(
          currentPage == 1 ? newArticles : [...articles, ...newArticles]
        );
      });
  }, [currentPage, searchString, programmeId, articlesPerPage]);

  useEffect(() => {
    blogNewsPageService.getBlogNewsPage().then((response) => {
      setArticlesPerPage(response.data.data.attributes.blogsPerPage);
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
      {featuredBlogPage && (
        <BlogNewsBanner {...featuredBlogPage}></BlogNewsBanner>
      )}
      <TrendingArticles
        slides={articles}
        loadMoreCallback={() => setCurrentPage(currentPage + 1)}
        hasMore={hasMore}
      ></TrendingArticles>
      {components}
    </>
  );
};

export default BlogNewsPage;
