import fs from 'fs'
import path from 'path'
import webpack, {Configuration} from 'webpack'
export default class Config implements Configuration {
  mode: Configuration['mode'] = 'development'
  constructor(mode: Configuration['mode']) {
    this.mode = mode
  }
  entry =  fs.readdirSync(__dirname).reduce((entries: any, name) => {
    const fullDir = path.join(__dirname, name)
    const entry = path.join(fullDir, 'app.ts')
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      entries[name] = ['webpack-hot-middleware/client', entry]
    }
    return entries
  }, {})
  output =  {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  }
  module = {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  }
  resolve =  {
    extensions: ['.ts', '.tsx', '.js']
  }
  plugins= [
    new webpack.HotModuleReplacementPlugin()
  ]
}
