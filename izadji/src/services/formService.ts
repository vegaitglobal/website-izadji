import SubmitEmailData from '../types/submitEmailData';
import { apiPost } from '../utils/apiHelpers';

// TODO: Put valid endpoint url, once when backend work is finished
const sendContactUsEmailData = (data: SubmitEmailData) =>
  apiPost('/api/contact-form-submission', data);
const sendVolunteerFormData = (data: SubmitEmailData) =>
  apiPost('/api/volunteer-form-submission', data);

// TODO: Put valid endpoint url, once when backend work is finished
const applyToNewsletter = (email: string) =>
  apiPost('/api/newsletter-subscriptions', { data: { email: email } });

const formService = {
  sendContactUsEmailData,
  sendVolunteerFormData,
  applyToNewsletter,
};

export default formService;
