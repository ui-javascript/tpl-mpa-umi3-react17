import { defineConfig } from 'umi';

const { getEntry } = require('./mpa.utils');
const { CONFIG } = require('./mpa.config');

const mpaEntries = getEntry(CONFIG.entry);

const routes = getEntry.hasIndex
  ? mpaEntries.entry
  : [
      {
        path: '/',
        component: mpaEntries.entry[0].component,
      },
      ...mpaEntries.entry,
    ];
console.log(routes);

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   {
  //     path: '/',
  //     component: '../../__demo/page1.tsx'
  //   },
  //   {
  //     path: '/page2',
  //     component: '../../__demo/page2.jsx'
  //   },
  // ],
  routes,
  // publicPath: '/demo-ahooks-reactuse-202203/',
  publicPath: './',
  // publicPath: process.env.NODE_ENV === 'production' ? '/demo-ahooks-reactuse-202203/' : '/',
  outputPath: 'docs',
  mfsu: {
    //   // production: { output: '.mfsu-production' }
  },
  // fastRefresh: {},

  // @todo 多页面配置总有问题
  // mpa: {},
  // exportStatic: {},

  // chainWebpack(config, { env, webpack, createCSSRule }) {
  //   // 设置 alias
  //   // config.resolve.alias.set('@', 'src');
  //   // 入口配置 @todo
  //   // config
  //   // .entry('index')
  //   //   .add('./__demo/page1');
  //   // config.entry('page2')
  //   //     .add('./__demo/page2.jsx')
  //   //     .end();
  //   // 删除 umi 内置插件
  //   // config.plugins.delete('progress');
  //   // config.plugins.delete('friendly-error');
  //   // config.plugins.delete('copy');
  // },
});
