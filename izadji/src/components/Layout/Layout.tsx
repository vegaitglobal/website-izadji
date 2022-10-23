import { useEffect, useState } from 'react';
import layoutService from '../../services/layoutService';
import Footer, { FooterProps } from '../shared/Footer/Footer';
import Header, { HeaderProps } from '../shared/Header/Header';

const Layout = ({ children }: any): JSX.Element => {
  const [headerData, setHeaderData] = useState<HeaderProps | undefined>();
  const [footerData, setFooterData] = useState<FooterProps | undefined>();

  const setupHeadeData = (dao: any) => {
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
      logoSrc: dao.logo.data.attributes.url,
    });
  };

  const setupFooterData = (dao: any) => {
    setFooterData({
      iconSrc: dao.logo.data.attributes.url,
      emails: [dao.firstEmail, dao.secondEmail],
      copyText: dao.designedBy,
      navItems: dao.siteMap.map((mapItem: any) => ({
        title: mapItem.title,
        items: mapItem.page_links.data.map((linkItem: any) => ({
          text: linkItem.attributes.title,
          href: linkItem.attributes.title,
        })),
      })),
    });
  };

  useEffect(() => {
    layoutService.getLayout().then((response) => {
      const daoHeader = response.data.data.attributes.header;
      const daoFooter = response.data.data.attributes.footer;
      setupHeadeData(daoHeader);
      setupFooterData(daoFooter);
    });
  }, []);
  return (
    <>
      {headerData && <Header {...headerData} />}
      {children}
      {footerData && <Footer {...footerData} />}
    </>
  );
};

export default Layout;
