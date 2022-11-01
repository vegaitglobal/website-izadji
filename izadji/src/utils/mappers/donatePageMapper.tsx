import { MappingFunction } from './sharedMapper';
import DonationComponents from '../enums/donationComponents';
import Donate from '../../components/Donate/Donate';

const DonatePageMapper: MappingFunction = (component) => {
  switch (component['__component']) {
    case DonationComponents.DONATION: {
      return (
        <Donate
          key={`donate_${component.id}`}
          text={component.description}
          title={component.title}
          donationProjects={component.donation_projects.data.map((p: any) => ({
            title: p.attributes.title,
            description: p.attributes.description,
            projectName: p.attributes.projectName,
            paymentModel: p.attributes.paymentModel,
            paymentReferenceNumber: p.attributes.paymentReferenceNumber,
            paymentReceiver: p.attributes.paymentReceiver,
            paymentAccountNumber: p.attributes.paymentAccountNumber,
            projectPageId: p.attributes.project_page.data.id,
          }))}
        />
      );
    }
  }
};

export default DonatePageMapper;
