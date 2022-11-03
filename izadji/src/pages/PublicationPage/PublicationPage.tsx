import { ReactNode, useEffect, useState } from 'react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import publicationPageService from '../../services/publicationService';
import { MapComponents } from '../../utils/mappers/sharedMapper';
import DownloadableProps from '../../utils/DownloadableProps';
import Downloadables from '../../components/Downloadables/Downloadables';

const GetPublications = (publication: any): DownloadableProps => {
  return {      
        imageSrc:publication.attributes.image.data.attributes.url,
        text:publication.attributes.text,
        title:publication.attributes.title,
        buttonText:publication.attributes.downloadButton.buttonText,
        href:publication.attributes.downloadButton.pdfFile.data.attributes.url,
        download:publication.attributes.downloadButton.pdfFile.data.attributes.hash,
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
              <Downloadables
                key="publications"
                title={response.data.data.attributes.title}
                downloadables={publicationsResponse.data.data.map(GetPublications)}
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