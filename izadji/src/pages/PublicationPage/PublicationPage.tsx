import { ReactNode, useEffect, useState } from 'react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import publicationPageService from '../../services/publicationService';
import { MapComponents } from '../../utils/mappers/sharedMapper';
import Banner from '../../components/Banner/Banner';
import Publications from '../../components/Publications/Publications';
import { PublicationProps } from '../../components/Publication/Publication';

const GetPublications = (publication: any): PublicationProps => {
  return {      
        imageSrc:publication.attributes.image.ulr,
        text:publication.attributes.text,
        title:publication.attributes.title,
        buttonText:publication.attributes.downloadButton.buttonText,
    };
};

const PublicationPage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);

  useEffect(() => {
    publicationPageService.getPublicationPage().then((response) => {
      publicationPageService.getPublications().then(publicationsResponse=> {
        MapComponents(
          response.data.data.attributes.components,
          [],setComponents,
          {
            appendBefore: [
              <Publications
                key="publications"
                title={response.data.data.attributes.title}
                publications={publicationsResponse.data.data.map(GetPublications)}
              />,
            ],
          }
        )
      })
    });
  }, []);

  return <>{components}</>;
};

export default PublicationPage;