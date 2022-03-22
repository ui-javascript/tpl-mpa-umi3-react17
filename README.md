# README

暂时是多路由页面 @todo

# 常见问题 @bug

- 修改entry, 争取打包出来MPA @todo

```
chain-webpack

===
暂时不要在底部写
ReactDOM.render(<App />, document.getElementById('root'))
```

- 打包路径publicPath的问题

```
publicPath: process.env.NODE_ENV === 'production' ? 
    'https://ui-javascript.github.io/tpl-mpa-umi3-react17/demo-ahooks-reactuse-202203/' 
    : '/',
// mpa: {},
// exportStatic: {},
```
