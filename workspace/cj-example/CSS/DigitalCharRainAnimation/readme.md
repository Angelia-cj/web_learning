## 安装 Pug 模板引擎

### 1.Pug 官网

https://www.pugjs.cn/api/getting-started.html

### 2.pug 转化 html 网站

https://pughtml.com/

### 3.安装 Pug

`npm install pug`

上面的安装可能会导致内部命令的错误提示，故用下面的命令安装

`npm install -g pug-cli`

### 4.Pug 编译成 Html 文件

这个命令编译出来的是压缩版的代码，即没有空格，换行的代码显示

`pug index.pug`

这个命令编译出来的代码不是压缩版更具可读性，并且可以实时编译，实时编译就是当我们修改 index.pug 时，index.html 也会被改变

`pug -P -w index.pug`

## 安装 Sass

### 1.Sass 官网

https://www.sasscss.com/guide

### 2.scss 转化 css 网站

https://jsonformatter.org/scss-to-css

### 3.安装 Sass

`npm install -g sass`

### 4.sass 编译成 css 文件

`sass index.scss index.css` 输出文件名随便取

`sass --watch index.scss:index.css` 该命令可以将实时自动转换，写一句.scss 就自动生成一句.css

## 注意

    1. html 文件中，不可以使用 link 标签添加.scss 文件，需要转化为.css 文件再添加
    2. .pug文件需要先编译为.html文件后，再进行在浏览器中显示
    3. 安装模板时，是安装在电脑中，不是安装项目中，故安装路径在cmd下
