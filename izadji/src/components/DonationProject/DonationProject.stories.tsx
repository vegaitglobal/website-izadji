import {ComponentMeta, ComponentStory} from "@storybook/react";
import DonationProject from "./DonationProject";

export default {
    title: 'Donation Project',
    component: DonationProject,
} as ComponentMeta<typeof DonationProject>;

const Default: ComponentStory<typeof DonationProject> = (args) => (
    <DonationProject {...args} />
);

export const DefaultDonationProject = Default.bind({});
DefaultDonationProject.args = {
    projectName: "Projekat 1",
    paymentReferenceNumber: "8232-8232",
    paymentAccountNumber: "123-24254251-22",
    title: "Dodatne Informacije o projektu",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
    paymentModel: "27",
    paymentReceiver: "Ogranizacija projekta #1 'Ime Organizacije'"
}
