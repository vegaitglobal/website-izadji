import PageLinkComponents from './utils/enums/pageLinkComponents';

export const routes = {
  main: '/',
  pride: '/pride',
  workProgram: '/work-programs/:id',
  blogPage: '/blogs/:id',
  blog: '/blog',
  project: '/project/:id',
  aboutUs: '/about-us',
  donate: '/donate',
  publication: '/publications',
  documentatio: '/documentation'
};

export const getRouteForPageLink = function (pageLink: any) {
  switch (pageLink.attributes.page[0].__component) {
    case PageLinkComponents.ABOUT_US:
      return routes.aboutUs;
    case PageLinkComponents.BLOG:
    case PageLinkComponents.BLOG_NEWS_PAGE:
      return routes.blog;
    case PageLinkComponents.DONATE_PAGE:
      return routes.donate;
    case PageLinkComponents.HOMEPAGE:
      return routes.main;
    case PageLinkComponents.PRIDE_PAGE:
      return routes.pride;
    case PageLinkComponents.PUBLICATION_PAGE:
      return routes.main;
    default:
      return routes.main;
  }
};
