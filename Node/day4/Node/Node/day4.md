# 第三方模块

我们前几天所用的模块都叫内置模块(fs,http,os,cluster,querystring,path)

Node在牺牲DOM和BOM能力后，在系统曾拓张给你的额外功能

交给第三方的开发者去完善更多的功能，称这些功能为第三功能(模块)，开发者它基于Node的平台，用它内置的功能，封装一些第三方的功能

微信(第三方)用了(相机，通讯录，wifi模块内置)

# NPM(模块&&应用商店)

比如下面这一句就是从npm(模块商店)下载gulp的模块到本地，让你本地拥有gulp这个第三方功能，node的大部分生态都是npm提供

```bash
npm install gulp -g
```

只要安装Node成功了，它内部是自带NPM命令

```bash
# 查看你的版本
npm -v
# 根据package.json的描述全部安装模块
npm install
# 安装 局部安装 把模块记录到dependencies
npm install 模块名字 --save
npm install 模块名字 --S
# 安装 局部安装 把模块记录到devDependencies
npm install 模块名字 --save-dev
npm install 模块名字 --D
# 安装 局部安装
npm install 模块名字
# 安装 全局安装
npm install 模块名字 -g
# 卸载 可以全局也可以是局部
npm uninstall 模块名字 -g
# 国内镜像 淘宝镜像
cnpm install xxx
# 初始化配置文件 初始化一个package.json的包模块文件
npm init
# 长执行的简写
npm run xxx
```
你可以在[npm官方网站](https://www.npmjs.com)搜索你需要用到的模块，我们使用过最多的模块是(jquery)，还有一个模块gulp

- jquery 前端模块，用在浏览器端
- gulp 后端模块 用在服务器端

只要你是JS写的模块，都可以发布上去，这个模块可以用在Node端，也可以用在浏览器端

由于有些前端模块在浏览器运行完美的，但是后端缺少一些DOM和BOM，那如果此时你想把它用在Node端，那就需要配合其他第三方模块去模拟DOM和BOM
```js
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
    var $ = require("jquery")(window);
});
```

局部安装会在命令指定那个位置生成node_modules的文件夹，里面就会有你需要安装的本地模块

而如果你选择全局安装，它会安装到一个node指定的全局位置，它会在这个位置安装一个`xxx.cmd`的命令，让你全局环境可以拥有这个命令
```bash
C:\Users\eno\AppData\Roaming\npm
```
如果这个模块是拥有全局命令的话，可以选择安装在全局，如果没有的话，一般安装在本地，全局安装完成后，在任何地方都可以执行该命令
```bash
# gulpfile.js
gulp
gulp xxx
```
如果需要寻找局部模块的命令，需要在本地的`node_modules/.bin`文件下去寻找



# 安装cnpm

中国镜像，网络某些条件下，npm下载会很慢或者失败
```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

Facebook脸书，脸书提供的一个npm安装包
```bash
# 安装这个yarn
npm install yarn -g
yarn add xxx
```

# package.json

生产一份项目的描述文件
```js
{
  "name": "gulp-project",
  "version": "5.2.0",
  "description": "这是一个GULP的项目",
  "main": "index.js",
  "dependencies": {
    "gulp": "^4.0.2"
  },
  "devDependencies": {},
  "scripts": {
    "test": "node index"
  },
  "keywords": [
    "gulp",
    "打包"
  ],
  "author": "eno",
  "license": "ISC"
}
```
注意里面有两个关键的选项`dependencies`和`devDependencies`，如果你那一天把代码通过git托管之后，由于你本地可能安装大量的模块(第三模块)，`node_modules`里面包含了你本地的所有第三方模块，那它是不能传到服务器上的(这些模块很多，也很大)，你的队友从GIT把代码拉下来之后，是没有这些模块的，需要重新手动安装`npm install`

- dependencies 一般放前端模块 如果你直接`npm install xxx`它直接放到这里
- devDependencies  一般放后端模块

```
# .gitignore
node_modules
```

这里还可以把长命令，简写在里面，你就可以用`npm run test`代替`node index`
```js
"scripts": {
  "test": "node index",
  "start": "dir"
},
```

