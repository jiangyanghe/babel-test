# @babel/preset-env
@babel/preset-env是一个智能预设，它允许你使用最新的JavaScript，而不需要微管理你的目标环境需要哪些语法转换(以及可选的浏览器polyfills)。这既使您的工作更轻松，又使JavaScript包更小!

## Options
- useBuiltIns 默认false
  - false 的时候会在页面引入polyfill，但是不会做公共提取
  - entry 的时候需要导入 import core-js, 文件内部导入需要的
  - usage 打包的时候会提示不要引入import core-js，会按需导入
```
 When setting `useBuiltIns: 'usage'`, polyfills are automatically imported when needed.
  Please remove the direct import of `core-js` or use `useBuiltIns: 'entry'` instead.
```  






