module.exports = {
  entry: {
    app: './src/entry.js',
    vendor: ['angular']
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
    { 
      test: /\.css$/, 
      loader: "style!css" 
    },
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-runtime']
      }
    }
    ]
  }
};