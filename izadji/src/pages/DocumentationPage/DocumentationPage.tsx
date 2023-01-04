import { ReactNode, useEffect, useState } from 'react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import documentationPageService from '../../services/documentationService';
import { MapComponents } from '../../utils/mappers/sharedMapper';
import DownloadableProps from '../../utils/DownloadableProps';
import Downloadables from '../../components/Downloadables/Downloadables';
import { getApiUrl } from '../../utils/urlHelpers';

const GetDocumentation = (documentation: any): DownloadableProps => {
  return {
    text: documentation.attributes.text,
    title: documentation.attributes.title,
    buttonText: documentation.attributes.downloadButton.buttonText,
    href: getApiUrl(
      documentation.attributes.downloadButton.pdfFile.data.attributes.url
    ),
    download:
      documentation.attributes.downloadButton.pdfFile.data.attributes.hash,
  };
};

const DocumentationPage = () => {
  const [components, setComponents] = useState<ReactNode[]>([]);

  useEffect(() => {
    documentationPageService.getDocumentationPage().then((response) => {
      documentationPageService.getDocuments().then((documentationsResponse) => {
        MapComponents(
          response.data.data.attributes.components,
          [],
          setComponents,
          {
            appendBefore: [
              <Downloadables
                key="publications"
                title={response.data.data.attributes.title}
                downloadables={documentationsResponse.data.data.map(
                  GetDocumentation
                )}
              />,
            ],
          }
        );
      });
    });
  }, []);

  return <>{components}</>;
};

export default DocumentationPage;
