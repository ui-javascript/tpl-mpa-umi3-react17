import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: './__demo/index' },
  // ],
  outputPath: 'docs',
  // mpa: {},
  // mfsu: { production: { output: '.mfsu-production' } },
  fastRefresh: {},
  exportStatic: {},
  chainWebpack(config, { env, webpack, createCSSRule }) {
    // 设置 alias
    // config.resolve.alias.set('@', 'src');


    // 入口配置
    config
    .entry('index')
      .add('./__demo/index')
    
    config.entry('page2')
        .add('./__demo/page2')
        .end();

    // 删除 umi 内置插件
    // config.plugins.delete('progress');
    // config.plugins.delete('friendly-error');
    // config.plugins.delete('copy');
  },
});
