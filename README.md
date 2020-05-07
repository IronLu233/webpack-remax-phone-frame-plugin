# webpack-remax-phone-frame-plugin

为 Remax 的 web 端加一个手机壳的样式
![image](https://user-images.githubusercontent.com/20639676/81252838-8a991a00-9059-11ea-8775-1ff8257b802f.png)

## 如何使用

### 安装相关依赖

```sh
yarn add -D webpack-remax-phone-frame-plugin
```

### 修改项目的`remax.config.js`配置，在`configWebpack`加入插件

```js
const WebpackRemaxPhoneFramePlugin = require("webpack-remax-phone-frame-plugin");

module.exports = {
  /*
    其它项目配置
  */

  configWebpack({ config }) {
    // config
    //   .plugin("webpack-remax-phone-frame-plugin")
    //   .use(WebpackRemaxPhoneFramePlugin, [{ entryName: "entry.html" }]);
    // 如果需要在build时，也使用这个插件，请使用上面的三行代码。对于Remax组件库的开发者这也许更适合

    // 仅在`yarn dev web`时插件生效
    config.when(
      () => process.env.NODE_ENV !== "production",
      () =>
        config
          .plugin("webpack-remax-phone-frame-plugin")
          .use(WebpackRemaxPhoneFramePlugin, [
            { entryName: "entry.html", url: "https://btv233.233" },
          ])
    );
  },
};
```

### 配置项

| 属性      | 类型     | 默认值                    | 描述                                                                             |
| --------- | -------- | ------------------------- | -------------------------------------------------------------------------------- |
| entryName | `string` | `'entry.html'`            | 编译结果中的入口名，在不使用插件的情况下构建出的`index.html`会被重命名为这个文件 |
| url       | `string` | `https://www.remaxjs.org` | 手机壳的地址栏内容                                                               |
