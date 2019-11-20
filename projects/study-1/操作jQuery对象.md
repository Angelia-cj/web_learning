## jQuery对象 jQuery对象集合 jQuery集合 jQuery元素集合 等都是同一个意思

>## DOM对象和jQuery对象
>### 区别：DOM对象是网页页面渲染出来的对象；jQuery对象是对一组（0个或多个）对象的包装
>### 检测：DOM Object : if (obj.nodeType)
>### 检测：jQuery Object : if (obj.jquery)
>### 转换：
>#### var jqueryObj = $(domObj);
>#### var domObj = jqueryObj.get([index]);