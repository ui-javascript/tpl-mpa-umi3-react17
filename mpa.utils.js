// 配置
const glob = require('glob');
const path = require('path');
const fs = require('fs');

// console.log(CONFIG)
const browserPages = [];

const port = process.env.PORT || 8000;
// console.log('-------端口--------')
// console.log(port)

// console.log('-------环境--------')
// console.log(process.env.NODE_ENV)

function isProd() {
  return process.env.NODE_ENV === 'production';
}

function shouldReadAsEntry(moduleName) {
  // 是否小写字母开头 并且不以use开头
  return moduleName.charAt(0).match(/^.*[a-z]+.*$/) && moduleName.indexOf('use') !== 0;
}


exports.getEntry = function getEntry(globPath) {
  const entries = [];

  glob.sync(globPath).forEach((entry) => {
    // 切割路径 --> [ '.', '_project', 'module', 'foo.js' ]
    // --> ['_project', 'module', 'foo.js' ]
    // --> ['_project', 'module' ]
    // --> ['module' ]
    const sections = entry.split('/').splice(1);
    // console.log(sections)

    // 模块名称 --> 'foo'
    const moduleName = path.basename(entry, path.extname(entry));
    // console.log(moduleName)

    // 跳过不符合入口规则的文件
    if (!shouldReadAsEntry(moduleName)) {
      return;
    }

    // 已获取模块名，sections移除最后一个
    sections.pop();

    // 已获取路径参数, 去掉section的工程名
    sections.shift();

    // 生成唯一id, 防止多个目录下路径重复
    let prefix = '';
    // 除了moduleName与当前文件名前缀是否一致, 且层级为1
    // 其他情况将section串联，作为uuid的一部分
    if (sections.length > 1 ||
      (sections.length === 1 && moduleName.indexOf(sections[0]) !== 0)) {
      prefix = `${sections.join('-')}-`;
    }

    const uuid = `${prefix}${moduleName}`;
    // console.log(uuid)
    browserPages.push(`http://localhost:${port}/${uuid}.html`);

    // entries[uuid] = entry;

    entries.push({
     path: `/${uuid}`,
     components: "../." + entry
    })
  });

  // console.log('-------页面--------');
  // console.log(browserPages);

  return {
    entry: entries,
  };
}