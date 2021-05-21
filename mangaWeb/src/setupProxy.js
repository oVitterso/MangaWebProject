

const { createProxyMiddleware } = require('http-proxy-middleware');
//Following is gotten from https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
module.exports = function(app){
    app.use(
        '/img',
        createProxyMiddleware({
            target: 'proxy": "',
        })
    );
};