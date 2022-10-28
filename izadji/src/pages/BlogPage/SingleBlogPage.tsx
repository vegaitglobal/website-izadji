import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import singleBlogService from '../../services/singleBlogService';
import { MapComponents } from '../../utils/mappers/sharedMapper';
import Banner from '../../components/Banner/Banner';
import ProjectPageMapper from '../../utils/mappers/projectPageMapper';

const SingleBlogPage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    singleBlogService.getSingleBlogPage(id).then((response: any) => {
      const bannerData = response.data.data.attributes.blogBanner;
      MapComponents(
        response.data.data.attributes.components,
        [],
        setComponents,
        {
          appendBefore: [
            <Banner
              key="blog_page_banner"
              title={bannerData.title}
              text={bannerData.text}
              imageSrc={bannerData.image.data.attributes.url}
            />,
          ],
        }
      );
    });
  }, [id]);
  return <>{components}</>;
};

export default SingleBlogPage;