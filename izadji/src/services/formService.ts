import axios from 'axios';
import SubmitEmailData from '../types/submitEmailData';

// TODO: Put valid endpoint url, once when backend work is finished
const sendContactUsEmailData = (data: SubmitEmailData) =>
  axios.post('/api/contact-form-submission', data);
const sendVolunteerFormData = (data: SubmitEmailData) =>
  axios.post('/api/volunteer-form-submission', data);

// TODO: Put valid endpoint url, once when backend work is finished
const applyToNewsletter = (email: string) =>
  axios.post('/api/newsletter-subscriptions', { data: { email: email } });

const formService = {
  sendContactUsEmailData,
  sendVolunteerFormData,
  applyToNewsletter,
};

export default formService;
