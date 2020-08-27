* jquery 事件模型：
  > 提供了同意的事件处理方法
  > 允许添加多个事件处理函数
  > 使用标准的事件名称（不带on）
  > 事件实例座位事件处理函数的第一个参数
  > 标准化事件实例最常用的属性
  > 提供了统一的事件取消和阻止默认行为的方法

>## 添加事件处理
>### on(eventType[,selector][,data],handler)

>## 统一方法和属性
>### 阻止冒泡：stopPropagation()
>### 阻止默认行为：preventDefault()
>### 阻止冒泡和默认行为：return false

>## 所有支持的事件
>### blur、change、click、dblclick、error、focus、focusin、focusout、keydown、keypress、keyup、load、unload、mousedown、mouseenter、mouseleave、mousemove、mouseout、mouseover、mouseup、ready、resize、scroll、select、submit


>## 一次性的事件处理
>### one(eventType[,selector][,data],handler)

>## 移除事件处理
>### off(eventType[,selector][,handler])

>## triggerHandler和trigger的区别：
>### 不会触发浏览器默认事件
>### 不会产生事件冒泡
>### 只触发jQuery对象集合中第一个元素的事件处理函数
>### 返回的是事件处理函数的返回值，而不是jQuery对象
 
