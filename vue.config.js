module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // Remove the /api prefix when forwarding the request
        },
      },
    },
  },
};
