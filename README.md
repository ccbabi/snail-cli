# snail-cli
一个简单的，方便开发的小工具

## 使用

**安装**
```
$ npm i -g snail-cline
```

**查看帮助**
```
$ snail [command] --help
```

## 初始化项目
```
$ snail init <template> [<project-name>]
```
> `template` 内置的模板有begin-vue，也可以是github上的项目

## Mock服务
```
$ snail mock [<option>]

// 查看帮助
$ snail mock -h
```
> 注意：对目录结构有要求，参考下面例子

例子：

假如有两个请求
- get /api/xxx
- post /api/:id
> :id表示id是动态变动的

则
1. 假定mock目录名为mock
1. 新建get、post子目录
1. 改url为文件名，/替换为_，改id为@i

如下所示：

`mock/get/api_xxx.js`

`mock/post/api_@id.js`

mock文件为一个JS模块，如下所示：
```
module.exports = function (back) {
  // back里有个对象，分别是params, query, body
  // params，路径参数
  // query，查询参数
  // body，post提交参数

  return {
    code: 1,
    data: back,
    msg: ''
  }
}
```
