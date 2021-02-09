const { override, fixBabelImports, addLessLoader, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)
module.exports = override(
  // 实现 antd 的按需加载
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    /**
      style: true 表示 less 样式文件格式
      style: 'css' 表示 css 样式文件格式
    */
    style: true,
  }),
  //使用redux装饰器的必要配置
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@': resolve('src')
  }),
  addLessLoader({
    // true 表示支持 less 样式文件格式
    javascriptEnabled: true,
  })
);

// "babel": {
//   "plugins": [
//     [
//       "import",
//       {
//         "libraryName": "antd",
//         "style": "css"
//       }
//     ]
//   ]
// },
// "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test",
    // "eject": "react-scripts eject"