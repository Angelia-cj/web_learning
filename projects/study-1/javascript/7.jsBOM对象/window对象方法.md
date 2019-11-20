## BOM（browser object model）浏览器对象模型
## 文档对象模型（Document Object Model，简称DOM）

>## BOM对象有:
>### window
>### navigator
>### screen
>### history
>### location
>### document
>### event

>## window：window时浏览器的一个实例，在浏览器中，window对象有双重角色，它既是通过javascript访问浏览器窗口的一个接口，又是ECMAScript规定的Global对象。
>#### Global对象 ——> 全局对象
>#### 所有的全局变量和全局方法都被归在window上


>## window对象的方法

>### 语法：window.alert("content")
>### 功能：显示带有一段消息和一个确认按钮的警告框

>### 语法：window.confirm("message")
>### 功能：显示一个带有指定消息和OK及取消按钮的对话框
>### 返回值：(布尔型)
>#### 1.如果用户点击确定按钮，则confirm()返回true
>#### 2.如果用户点击取消按钮，则confirm()返回false

>### 语法：window.prompt("text.defaultText)
>### 参数说明：
>#### text：要子啊对话框中显示的纯文本（而不是HTML格式的文本）
>#### defaultText：默认的输入文本
>### 返回值：
>#### 1.如果用户单击提示框的取消按钮，则返回null
>#### 2.如果用户单价确认按钮，则返回输入字段当前显示的文本

>### 语法：window.open(pageURL,name,parameters)
>### 功能：打开一个新的浏览器串口或者找一个已命名的窗口
>### 参数说明：
>#### pageURL：子窗口路径
>#### name：子窗口句柄（name声明了新窗口的名称，方便后期通过name对子窗口进行引用）
>#### parameters：窗口参数（各参数用逗号分隔）
>### 返回值：
>#### 1.如果用户单击提示框的取消按钮，则返回null
>#### 2.如果用户单价确认按钮，则返回输入字段当前显示的文本

>### 语法：window.close()
>### 功能：关闭浏览器窗口


## JavaScript是单线程语言，单线程就是所执行的代码必须按照顺序。

>## 超时调用
>### 语法：setTimeout(code,millisec)
>### 功能：在指定的毫秒数后调用函数或计算表达式
>### 参数说明：
>#### 1.code：要调用的函数或要执行的JavaScript代码串
>#### 2.millisec：在执行代码前序等待的毫秒数
>### setTimeout方法返回一个ID值，通过它取消超时调用
 

>## 取消超时调用
>### 语法：clearTimeout(id_of_settimeout)
>### 功能：取消由setTimeout()方法设置的timeout
>### 参数说明：
>#### 1.id_of_settimeout：由setTimeout()返回的ID值，该值标识要取消的延迟执行代码块

>## 间歇调用
>### 语法：setInterval(code,millisec)
>### 功能：每隔指定的时间执行一次代码
>### 参数说明：
>#### 1.code：要调用的函数或要执行的JavaScript代码串
>#### 2.millisec：周期性执行或调用code之间的时间间隔，以毫秒计

>## 取消间歇调用
>### 语法：clearInterval(id_of_setInterval)
>### 功能：取消由setInterval()方法设置的interval
>### 参数说明：
>#### 1.id_of_setInterval：由setInterval()返回的ID值
>### 说明：
>#### setTimeout()只执行code一次，如果要多次调用，可以让code自身再次调用setTimeout()
