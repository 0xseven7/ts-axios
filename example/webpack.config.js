const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.join(__dirname, dir)
    const entry = fullDir.join('app.ts')
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      entries[dir] = ['webpack-hot-middleware/client', entry]
    }
    return entries
  }, {}),
  output: {
    path: path.join(__dirname, '/__build___/'),
    filename: '[name].js',
    public: '/__build__'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre'
      }
    ]
  }
}
