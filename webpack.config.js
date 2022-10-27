const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)

  config.module.rules.push({
    test: /\.js$/, // Check for all js files
    loader: 'babel-loader', // use this (babel-core) loader
    include: [
      path.join(__dirname, 'node_modules/react-router-native') // include these files
    ]
  })
  return config
}
