const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      // 注释的是antd还没用的
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // webpack
  // 配置完再去package.json修改脚本为craco启动,就会把配置和原来的合并
  webpack: {
    
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
      'utils': resolve('src/utils'),
      '@mui/styled-engine':'@mui/styled-engine-sc'
    },
  },
}
