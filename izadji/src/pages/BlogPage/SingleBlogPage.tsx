import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import singleBlogService from '../../services/singleBlogService';
import { MapComponents } from '../../utils/mappers/sharedMapper';
import SingleNewsBanner from '../../components/SingleNewsBanner/SingleNewsBanner';
import Breadcrumbs from '../../components/Breadcrumbs/Beadcrumbs';
import { routes } from '../../routes';
import SingleBlogPageMapper from '../../utils/mappers/singleBlogPageMapper';

const SingleBlogPage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    singleBlogService.getSingleBlogPage(id).then((response: any) => {
      const bannerData = response.data.data.attributes.blogBanner;
      MapComponents(
        response.data.data.attributes.components,
        [SingleBlogPageMapper],
        setComponents,
        {
          appendBefore: [
            <Breadcrumbs
              key="breadcrumbs"
              crumbs={[
                { text: 'Blog', url: routes.blog },
                {
                  text: bannerData.title,
                  url: routes.blogPage.replace(
                    ':id',
                    response.data.data.attributes.id
                  ),
                },
              ]}
            />,
            <SingleNewsBanner
              key="blog_page_banner"
              title={bannerData.title}
              imageSrc={bannerData.image.data.attributes.url}
              author={bannerData.author}
              category={
                response.data.data.attributes.work_program.data.attributes.title
              }
              date={new Date(bannerData.date).toLocaleDateString('sr-Latn-RS', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
              tags={response.data.data.attributes.blog_page_tags.data.map(
                (tag: any) => tag.attributes.title
              )}
            />,
          ],
        }
      );
    });
  }, [id]);
  return <>{components}</>;
};

export default SingleBlogPage;
