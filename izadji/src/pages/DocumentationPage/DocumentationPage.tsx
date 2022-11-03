import { ReactNode, useEffect, useState } from 'react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import documentationPageService from '../../services/documentationService';
import { MapComponents } from '../../utils/mappers/sharedMapper';
import Publications from '../../components/Downloadables/Downloadables';
import DownloadableProps from '../../utils/DownloadableProps';
import Downloadables from '../../components/Downloadables/Downloadables';

const GetDocumentation = (publication: any): DownloadableProps => {
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
      documentationPageService.getDocuments().then(documentationsResponse=> {
        MapComponents(
          response.data.data.attributes.components,
          [],setComponents,
          {
            appendBefore: [
              <Downloadables
                key="publications"
                title={response.data.data.attributes.title}
                downloadables={documentationsResponse.data.data.map(GetDocumentation)}
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