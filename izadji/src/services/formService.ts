import axios from 'axios';
import SubmitEmailData from '../types/submitEmailData';

// TODO: Put valid endpoint url, once when backend work is finished
const sendEmailData = (data: SubmitEmailData) => axios.post('url', data);

// TODO: Put valid endpoint url, once when backend work is finished
const applyToNewsletter = (email: string) => axios.post('url', email);

const formService = {
  sendEmailData,
  applyToNewsletter,
};

export default formService;
