import { useEffect, useState } from 'react';
import layoutService from '../../services/layoutService';
import Footer, { FooterProps } from '../shared/Footer/Footer';
import Header, { HeaderProps } from '../shared/Header/Header';
import { getRouteForPageLink } from '../../routes';
import { getApiUrl } from '../../utils/urlHelpers';

const Layout = ({ children }: any): JSX.Element => {
  const [headerData, setHeaderData] = useState<HeaderProps | undefined>();
  const [footerData, setFooterData] = useState<FooterProps | undefined>();

  const setupHeaderData = (dao: any) => {
    setHeaderData({
      emails: [dao.firstEmail, dao.secondEmail],
      social: dao.socialMediaLinks.map((sml: any) => ({
        altText: sml.altText,
        url: sml.url,
        iconClass: sml.iconClass,
      })),
      navBar: {
        buttons: dao.navBarItems.data.map((navBarItem: any) => ({
          title: navBarItem.attributes.title,
          href: getRouteForPageLink(navBarItem),
        })),
      },
      logoSrc: getApiUrl(dao.logo.data.attributes.url),
    });
  };

  const setupFooterData = (dao: any) => {
    setFooterData({
      iconSrc: getApiUrl(dao.logo.data.attributes.url),
      emails: [dao.firstEmail, dao.secondEmail],
      copyText: dao.designedBy,
      navItems: dao.siteMap.map((mapItem: any) => ({
        title: mapItem.title,
        items: mapItem.page_links.data.map((linkItem: any) => ({
          text: linkItem.attributes.title,
          href: getRouteForPageLink(linkItem),
        })),
      })),
    });
  };

  useEffect(() => {
    layoutService.getLayout().then((response) => {
      const daoHeader = response.data.data.attributes.header;
      const daoFooter = response.data.data.attributes.footer;
      setupHeaderData(daoHeader);
      setupFooterData(daoFooter);
    });
  }, []);
  return (
    <div
      style={{
        boxSizing: 'border-box',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {headerData && (
        <div style={{ flexGrow: '0', flexShrink: '0' }}>
          <Header {...headerData} />
        </div>
      )}
      <div style={{ flexGrow: '1' }}>{children}</div>
      {footerData && (
        <div style={{ flexGrow: '0', flexShrink: '0' }}>
          <Footer {...footerData} />
        </div>
      )}
    </div>
  );
};

export default Layout;
