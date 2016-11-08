module.exports = {  
  entry: './Greeter.ts',
  output: {
    filename: 'indexEntryPoint.js'
  },
  resolve: {
    extensions: [ '', '.webpack.js', '.web.js', '.ts', '.js']
  },
//   plugins: [
//     new webpack.optimize.UglifyJsPlugin()
//     // new webpack.optimize.UglifyJsPlugin(
//     //     {
//     //         compress: {
//     //             warnings : true
//     //         }
//     //     })
//   ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test : /\.map$|\.html$|\.json$/, loader : 'ignore-loader'},
      { test : /\.js$/, loader : 'uglify-loader'}
    ]
  },
  'uglify-loader': {
    mangle: false
    }
}