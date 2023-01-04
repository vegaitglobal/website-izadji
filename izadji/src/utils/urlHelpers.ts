export const getApiUrl = (localUrl: string): string =>
  process.env.REACT_APP_STRAPI_HOST + localUrl;
