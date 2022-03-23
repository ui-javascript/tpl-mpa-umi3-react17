# README

React多页面模板

# 常见问题 @bug

- 修改entry, 争取打包出来MPA @todo

```
@ps 但感觉不好搞
暂时还是多路由页面, 但启用MPA, 打包出来是多页面

===
chain-webpack

===
暂时不要在底部写
ReactDOM.render(<App />, document.getElementById('root'))
```

- @umijs/runtime“ does not exist in container @fix 
    - https://blog.csdn.net/qq_40593656/article/details/120083448

```
删除src 下 .umi 文件
```

- 打包路径publicPath的问题 @fix
    - https://blog.csdn.net/qq_34273888/article/details/110621995

```
publicPath: './',
// publicPath: process.env.NODE_ENV === 'production' ? 
//    'https://ui-javascript.github.io/tpl-mpa-umi3-react17/' 
//    : '/',
mpa: {},
// exportStatic: {},
```
