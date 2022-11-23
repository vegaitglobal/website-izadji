import { useEffect, useState } from 'react';
import ContactInfo, {
  ContactInfoProps,
} from '../../components/ContactInfo/ContactInfo';
import ContactUsForm, {
  ContactUsFormProps,
} from '../../components/ContactUsForm/ContactUsForm';
import contactUsPageService from '../../services/contactUsPageService';
import styles from './ContactUsPage.module.scss';

const ContactUsPage = () => {
  const [contactUsFormData, setContactUsFormData] =
    useState<ContactUsFormProps>();

  const [contactInfoData, setContactInfoData] = useState<ContactInfoProps>();

  useEffect(() => {
    contactUsPageService.getContactUsPage().then((response) => {
      console.log(response);
      const responseData = response.data.data.attributes;
      setContactUsFormData({
        buttonLabel: responseData.buttonText,
        title: responseData.title,
        text: responseData.subtitle,
        namePlaceholder: responseData.namePlaceholder,
        phonePlaceholder: responseData.phonePlaceholder,
        emailPlaceholder: responseData.emailPlaceholder,
        checkboxPlaceholder: responseData.checkboxPlaceholder,
        messagePlaceholder: responseData.messagePlaceholder,
        messageSentTitle: responseData.messageSentTitle,
        messageSentSubtitle: responseData.messageSentSubtitle,
        backToHomePageText: responseData.backToHomePageText,
      });
      setContactInfoData({
        email: responseData.email,
        address: responseData.address,
        phoneNumber: responseData.phoneNumber,
      });
    });
  }, []);

  return (
    <>
      <div className={styles.contact}>
        <div className={styles.wrap}>
          <div className={styles.contact__inner}>
            <div className={styles.contact__form}>
              {contactUsFormData && <ContactUsForm {...contactUsFormData} />}
            </div>

            {contactInfoData && <ContactInfo {...contactInfoData} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
