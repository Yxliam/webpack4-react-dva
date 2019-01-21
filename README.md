#### 一个基础的webpack4.x react 脚手架
##### 克隆下来 然后 npm install 相关的模块


    开发环境 npm start 
    构建  npm run build 

目录结构

 

    config    //webpack配置目录
            webpack.config.base.js //webpack 的基础配置
            webpack.config.dev.js  //开发环境的配置
            webpack.config.pro.js //生产环境的配置
        dist  //构建目录，不用手动建立
        public //静态文件目录，
            index.html
        scripts
            start.js   //开发环境运行的配置
            build.js  //打包运行的配置
        src   //主要的开发环境
            assets   //静态资源文件
            App.js   //app
            index.js //入口文件
            index.module.scss  //scss 模块 css-module
            index.css   //普通的css
            index.scss  //scss
        .babelrc  //webpack会自动调用.babelrc里的babel配置选项
        package.json //依赖包
