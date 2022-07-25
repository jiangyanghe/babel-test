# webpack 笔记

## webpack-cli
  - webpack-cli 是一个用来在命令行中运行 webpack 的工具，webpack 4.0开始必须安装
  - 但，webpack-cli对于打包文件不是必要的

## 资源模块类型（asset module type)
  - 在webpack5之前，加载这些资源我们需要使用一些loader,比如raw-loader、u rl-loader、file-loader。
  - asset/resource  发送一个单独的文件并导出URL,之前通过使用file-loader实现；
  - asset/inline   导出一个资源的data URL。之前通过使用url-loader 实现；
  - asset/source 导出资源的源代码。之前通过使用raw-loader 实现；
  - asset 在导出一个data URL和发送一个单独的文件之间自动选择，之前通过使用url-loader,并且配置资源体积限制实现

## plugins
  - HtmlWebpackPlugin  
    简化了 HTML 文件的创建，并且哈希值会随着每次编译而改变的 webpack 包特别有用[github 配置](https://github.com/jantimon/html-webpack-plugin)

  - webpack-manifest-plugin
    生成一个manifest.json 默认文件名。也是一个文件清单， 内容是打包前文件对应打包后的文件名。[webpack-manifest-plugin源码解读](https://itpcb.com/a/424637)

  - webpack-dev-server  为你提供了一个基本的 web server，并且具有 live reloading(实时重新加载) 功能。从 webpack-dev-server v4.0.0 开始，热模块替换是默认开启的

  - webpack-dev-middleware 是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server。webpack-dev-server 在内部使用了它，然而它也可以作为一个单独的 package 来使用，以便根据需求进行更多自定义设置。使用 webpack-hot-middleware 依赖包，以在你的自定义服务器或应用程序上启用 HMR。

  - [SplitChunksPlugin](https://webpack.docschina.org/plugins/split-chunks-plugin) 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。

  - [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin): 用于将 CSS 从主应用程序中分离。

## devtool
  - inline-source-map 


## entry 
  - dependOn 将共享的js 抽出单独的share.bundle.js  