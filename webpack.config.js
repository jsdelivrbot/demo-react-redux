var config = {
   entry: './src/index.js',

   output: {
     path: __dirname + '/src/',
     filename: 'bundle.js',
     publicPath: '/src'
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2016', 'react']
            }
         }
      ]
   }
}

module.exports = config;
