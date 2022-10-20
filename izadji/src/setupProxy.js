const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {
    app.use(
        createProxyMiddleware(
            '/api', {
            target: process.env.REACT_APP_STRAPI_HOST,
        })
    );
    app.use(
        createProxyMiddleware('/uploads', {
            target: process.env.REACT_APP_STRAPI_HOST,
        })
    );
};