# @umajs/plugin-cors

## Install
```
npm i @umajs/plugin-cors
```

## Usage
```js
// config/plugin.config.ts
export default {
    'cors': true
};
```

`options`均为可选项
- origin: ctx.request.headers.origin || '*', // 指定了该响应的资源是否被允许与给定的origin共享
- method: 'OPTIONS, GET, PUT, POST, DELETE', // 客户端所要访问的资源允许使用的方法或方法列表
- maxAge: 300, // 预检请求的返回结果可以被缓存多久
- headers: ['x-requested-with', 'accept', 'origin', 'content-type'], // 列出了将会在正式请求的 Access-Control-Request-Headers 字段中出现的首部信息
- expose: ['X-My-Custom-Header', 'X-Another-Custom-Header'], // 哪些首部可以作为响应的一部分暴露给外部
- Credentials: true, // 是否可以将对请求的响应暴露给页面
```
