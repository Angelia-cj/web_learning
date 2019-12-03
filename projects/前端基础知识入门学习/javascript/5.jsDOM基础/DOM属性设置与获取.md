## DOM属性的获取

>### 语法：
>#### ele.getAttribude("attribute")
>### 功能：
>#### 返回ele元素的attribute属性
>### 说明：
>#### 1.ele是要操作的dom对象
>#### 2.标签自带的属性可以直接获取
>#### 2.自定义的属性，需要attribute获取。是要获取的html属性（如：id、type）

## DOM属性的设置

>### 语法：
>#### ele.setAttribude("attribute",value)
>### 功能：
>#### 在ele元素上设置属性
>### 说明：
>#### 1.ele是要操作的dom对象
>#### 2.attribute为要设置的属性名称
>#### 3.value为设置的attribute属性的值
>### 注意：
>#### 1.setAttribude方法必须要有两个参数
>#### 2.如果value是字符串，需加引导
>#### 3.setAttribude()有兼容问题

## DOM属性的删除

>### 语法：
>#### ele.removeAttribude("attribute")
>### 功能：
>#### 删除ele上的attribute属性
>### 说明：
>#### 1.ele是要操作的dom对象
>#### 2.attribute是要删除的属性名称