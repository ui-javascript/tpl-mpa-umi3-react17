import { defineConfig } from 'umi';

const { getEntry } = require('./mpa.utils')
const { CONFIG } = require('./mpa.config')

const mpaEntries = getEntry(CONFIG.entry);
console.log(mpaEntries.entry)


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
  routes: mpaEntries.entry,
  publicPath: './',
  outputPath: 'docs',
  mpa: {},
  mfsu: { production: { output: '.mfsu-production' } },
  fastRefresh: {},
  // exportStatic: {},
  chainWebpack(config, { env, webpack, createCSSRule }) {
    // 设置 alias
    // config.resolve.alias.set('@', 'src');


    // 入口配置 @todo
    // config
    // .entry('index')
    //   .add('./__demo/page1');
    
    // config.entry('page2')
    //     .add('./__demo/page2.jsx')
    //     .end();

    // 删除 umi 内置插件
    // config.plugins.delete('progress');
    // config.plugins.delete('friendly-error');
    // config.plugins.delete('copy');
  },
});
