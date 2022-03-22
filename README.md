# README

暂时是多路由页面 @todo

# 常见问题 @bug

- 修改entry, 争取打包出来MPA @todo

```
@ps 但感觉不好搞

===
chain-webpack

===
暂时不要在底部写
ReactDOM.render(<App />, document.getElementById('root'))
```

- 打包路径publicPath的问题 @fix
    - https://blog.csdn.net/qq_34273888/article/details/110621995

```
publicPath: process.env.NODE_ENV === 'production' ? 
    'https://ui-javascript.github.io/tpl-mpa-umi3-react17/' 
    : '/',
mpa: {},
// exportStatic: {},
```
