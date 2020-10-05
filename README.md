### vue3体验尝鲜
> 后台管理系统实战

### 项目目的
  - 熟悉vue3新特性 提前踩坑
  - 结合vite等体验新版vue全家桶
  - 从项目中进行性能对比 源码分析等


### 体验vue3的方式

  - vue-cli
  官方指定cli工具，要更新最新版本
  ```js
  npm install -g @vue/cli
  vue create vue3-project
  cd vue3-project
  vue add vue-next
  npm run serve
  ```

  - webpack
  这个是vue-cli还没开始支持时候，vue官网自己搞得一套webpack项目配置，直接clone
  ```js
  git clone https://github.com/vuejs/vue-next-webpack-preview.git 01-vue3-webpack
  cd 01-vue3-webpack
  npm install 
  npm run dev
  ```

  - vite
  尤大大最近着重开发的一个工具，意在替代webpack打包，核心是利用浏览器现在已经支持import，遇到import会使用http请求去加载文件，在vite中使用koa拦截这些请求，进行分类以及预编译，加载各个模块，在build时候使用rollup进行打包，节省了大部分时间，实现复杂项目秒开
  ```js
  npm install -g create-vite-app
  create-vite-app vue3-vite
  cd vue3-vite
  npm install
  npm run dev
  ```

  之后有时间去进行一波源码学习，试着手写一个简版vite理解原理，hhhh



### vue3初体验
  - Composition API体验 setup reactive ref computed等
  - Fragment Vue3支持多个根节点 不会再报错 虽然一些纠错工具依然会标红....