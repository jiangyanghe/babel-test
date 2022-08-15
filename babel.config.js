module.exports = (env) => {
  console.log(111111, env.env());

  return {
    presets: [
      [
        '@babel/preset-env', {
          "useBuiltIns": "usage",
          "corejs": 3.24,
          "debug": true,
          // "targets": env.env() === 'development' ? "last 1 chrome version" : "> 1%, last 2 versions, Firefox ESR, ie >= 11, not dead",
          // "bugfixes": true, // @babel/preset-env会根据targets设定的兼容范围，选择将不同的分组编译到目标浏览器支持的最接近的最新现代语法，
        }
      ]
    ],
    plugins: ['@babel/plugin-transform-runtime']
  }
};