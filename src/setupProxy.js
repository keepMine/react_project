const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://disease.sh/v3/covid-19',
      changeOrigin: true,
      pathRewrite: {'^/api':''}
    })
  )
}