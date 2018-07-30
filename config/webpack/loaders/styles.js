module.exports = {
  test: /\.(scss|sass)$/i,
  use: [
    {
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
      options: {
        modules: true,
        camelCase: true,
      }
    }, {
      loader: 'sass-loader',
      options: { sourceMap: true }
    }, {
      loader: 'postcss-loader',
    },
  ]
};
