import { ReactNode, useEffect, useState } from 'react';
import layoutService from '../../services/layoutService';
import Header, { HeaderProps } from '../shared/Header/Header';

const Layout = ({ children }: any): JSX.Element => {
  const [headerData, setHeaderData] = useState<HeaderProps | undefined>();

  // useEffect(() => {
  //   workProgramService.getWorkProgramPages().then((response) => {
  //     setWorkPrograms(response.data.data);
  //   });
  // }, []);

  useEffect(() => {
    layoutService.getLayout().then((response) => {
      console.log(response);
      const dao = response.data.data.attributes.header;
      setHeaderData({
        emails: [dao.firstEmail, dao.secondEmail],
        social: dao.socialMediaLinks.map((sml: any) => ({
          altText: sml.altText,
          url: sml.url,
          iconClass: sml.iconClass,
        })),
        navBar: {
          buttons: [],
        },
        logoSrc: `${process.env.REACT_APP_STRAPI_HOST}${dao.logo.data.attributes.url}`,
      });
    });
  }, []);
  return (
    <>
      {headerData && <Header {...headerData} />}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
