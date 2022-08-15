# babel 笔记

## .babelrc & babel.config.[extensions]区别
  - [理解babel.config.js和babelrc](https://zhuanlan.zhihu.com/p/367724302)
  - babel.config.js 当前项目维度 (Project Wide)的配置文件，相当于一份全局配置，如果 babel 决定应用这个配置文件，则一定会应用到所有文件的转换。
  - .babelrc 相对文件(File Relative)的配置文件， babel 决定一个 js 文件应用哪些配置文件时,会执行如下策略: 如果要转换的这个 js 文件在当前项目内，则会先递归向上搜索最近的一个 .babelrc 文件(直到遇到package.json目录)，将其与全局配置合并。如果这个 js 文件不在当前项目内，则只应用全局配置，忽略与这个文件相关的 .babelrc 。
 
## @babel/preset-env babel预设，内置一组 babel 插件的集合
- @babel/preset-env是一个智能预设，它允许你使用最新的JavaScript，而不需要微管理你的目标环境需要哪些语法转换(以及可选的浏览器polyfills)。这既使您的工作更轻松，又使JavaScript包更小!

- 语法转换，无法识别api 转换
```
// ES6:
const odds = [1,2,3,4].map(v => v + 1);
// 只设置@babel/preset-env 转化后 
var odds = [1, 2, 3, 4].map(function (v) {
  return v + 1;
});
```

## babel-loader 在webpack里应用 babel 解析ES6的桥梁

## @babel/core babel核心模块

## @babel/helpers


## @babel/plugin-transform-runtime

## @babel/runtime

## @babel/register

## rootMode: "upward"


## 相关文档
- [webpack 优化生成代码](https://juejin.cn/post/6915665292370640910)  
- [知乎babel教程](https://www.zhihu.com/column/c_1402924598862778368)
