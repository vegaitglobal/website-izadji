import { MappingFunction } from './sharedMapper';
import BlogNewsComponents from '../enums/blogNewsComponents';
import SimilarPosts from '../../components/SimilarPosts/SimilarPosts';
import { routes } from '../../routes';
import { getApiUrl } from '../urlHelpers';

const SingleBlogPageMapper: MappingFunction = (component) => {
  switch (component['__component']) {
    case BlogNewsComponents.SIMILAR_POSTS: {
      return (
        <SimilarPosts
          key={`similar_posts_${component.id}`}
          title={
            <>
              Slične
              <br />
              objave
            </>
          }
          cards={component.similar_posts.data.map((sp: any) => ({
            title: sp.attributes.title,
            imageSrc: getApiUrl(
              sp.attributes.blogBanner.image.data.attributes.formats?.small
                ?.url ?? sp.attributes.blogBanner.image.data.attributes.url
            ),
            date: sp.attributes.blogBanner.date,
            category: sp.attributes.work_program.data.attributes.title,
            link: routes.blogPage.replace(':id', sp.id),
          }))}
        />
      );
    }
  }
};

export default SingleBlogPageMapper;
