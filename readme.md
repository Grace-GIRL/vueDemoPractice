1.package.json 包的更新
波浪符号（~） ~1.15.2 :=  >=1.15.2 <1.16.0    
插入符号（^） ^3.3.4 := >=3.3.4 <4.0.0

报错：throw new WebpackOptionsValidationError(webpackOptionsValidationErrors);
直接将原来的loaders改为rules就可以了！
原因是webpack不同的版本有不同的写法…


2.vue.beforeEach()
定义：路由钩子主要是给使用者在路由发生变化时进行一些特殊的处理而定义的函数。
总体来讲vue里面提供了三大类钩子，两种函数
1、全局钩子
2、某个路由的钩子
3、组件内钩子 (路由组件)

两种函数：
1、Vue.beforeEach(function(to,form,next){}) /*在跳转之前执行*/
2.Vue.afterEach(function(to,form))/*在跳转之后判断*/

3.slot标签
slot标签（具名slot，匿名slot，作用于插槽（列表组件允许组件自定义如何渲染每一项），）
这种情况是如果要父组件在子组件中插入内容 ，必须要在子组件中声明slot 标签  ，如果子组件模板不包含<slot>插口，父组件的内容<p>{{msg}}</p>将会被丢弃。
 当slot存在默认值<slot><p>默认值</p></slot>，且父元素在<slotshow></slotshow>中没有要插入的内容时，会显示<p>默认值</p>（p标签会去掉），当slot存在默认值，且父元素在<child>中存在要插入的内容时，则显示父组件中设置的值，


4.感觉有重复的代码

5.webpack 和 glup 可以同时使用？
 
6.git提交
 Xcode项目Git提交代码发生LF will be replaced by CRLF in 问题？
原因是需要提交的文件是在windows下生成的，windows中的换行符为 CRLF，而在linux下的换行符为LF，所以在执行add . 时出现提示，
解决办法：
git config --global core.autocrlf false
再执行git 提交


7.github 提示安全隐患 还是package.json 里面包的版本的问题

8.页面某些功能未实现

9.rimraf node_modules
