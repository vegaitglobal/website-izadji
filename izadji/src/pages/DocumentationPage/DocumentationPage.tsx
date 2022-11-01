import { ReactNode, useEffect, useState } from 'react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import documentationPageService from '../../services/documentationService';
import { MapComponents } from '../../utils/mappers/sharedMapper';
import Publications from '../../components/Publications/Publications';
import DownloadableProps from '../../utils/DownloadableProps';

const GetPublications = (publication: any): DownloadableProps => {
  return {      
        text:publication.attributes.text,
        title:publication.attributes.title,
        buttonText:publication.attributes.downloadButton.buttonText,
        href:publication.attributes.downloadButton.pdfFile.data.attributes.url,
        download:publication.attributes.downloadButton.pdfFile.data.attributes.hash,
    };
};

const DocumentationPage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);

  useEffect(() => {
    documentationPageService.getDocumentationPage().then((response) => {
      documentationPageService.getDocuments().then(publicationsResponse=> {
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

export default DocumentationPage;