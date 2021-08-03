###Html5
	HTML5 是定义 HTML 标准的最新的版本。 该术语表示两个不同的概念：
		它是一个新版本的HTML语言，具有新的元素，属性和行为，
		它有更大的技术集，允许更多样化和强大的网站和应用程序。
				这个集合有时称为HTML5和朋友，通常缩写为HTML5。
	
		HTML5     约等于     HTML + CSS + JS
		
###Html5优势
	跨平台:唯一一个通吃PC MAC Iphone Android等主流平台的跨平台语言
	快速迭代
	降低成本
	导流入口多
	分发效率高
###H5
	1.DOCTYPE和浏览器渲染模式
		DOCTYPE，或者称为 Document Type Declaration（文档类型声明，缩写 DTD）
		通常情况下，DOCTYPE 位于一个 HTML 文档的最前面的位置，位于根元素 HTML 的起始标签之前。
		因为浏览器必须在解析 HTML 文档正文之前就确定当前文档的类型，以决定其需要采用的渲染模式，
		不同的渲染模式会影响到浏览器对于 CSS 代码甚至 JavaScript 脚本的解析
		
		
		到目前为止，各浏览器主要包含了三种模式。在 HTML5 草案中，更加明确的规定了模式的定义：
		  	 传统名称	    				  		HTML5 草案名称				document.compatMode 返回值
		standards mode(strict mode) 			no-quirks mode				CSS1Compat
		almost standards mode					limited-quirks mode			CSS1Compat
		quirks mode								quirks mode					BackCompat
	
	
		document.compatMode
			 document.compatMode 属性最初由微软在 IE 中创造出来，这是一个只读的属性，返回一个字符串，
			 只可能存在两种返回值：
				BackCompat：标准兼容模式未开启（怪异模式）
				CSS1Compat：标准兼容模式已开启（标准模式）
	
		在现代主流浏览器中，其实怪异模式的渲染和标准与几乎标准间没有太大的差别（ie9+ 谷歌 火狐 ...）
	    ie5.5之前都是ie自己的渲染模式，怪异模式
	    ie6才开始慢慢支持标准，标准模式，在ie6 中怪异和标准模式的区别最大
	    ie7 8 9都是基于标准模式升级的，他们理论上存在怪异模式
	
		HTML5提供的<DOCTYPE html>是标准模式，向后兼容的,等同于开启了标准模式，
		那么浏览器就得老老实实的按照W3C的 标准解析渲染页面
		一个不含任何 DOCTYPE 的网页将会以 怪异(quirks) 模式渲染。
		
		
		
		
		
	2.DTD
		<!DOCTYPE html>
			当 doctype 信息如上时，表明该页面是遵守了 HTML5 规范的，浏览器会选择 Standards Mode，这种 doctype 是最推荐的一种，
		我们平时设计页面都应该加上这一个 doctype。
			HTML5 不基于 SGML,所以不需要引用 DTD,浏览器内部本身有对标签进行解析渲染验证的模块
		
		<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
		当 doctype 如上时，浏览器同样会选择 Standards Mode，虽然和第一种 doctype 有一些区别，但是几乎可以认为是一样的。

		<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
		当 doctype 如上时，浏览器会选择 Almost Standards Mode，渲染时和标准会有一些区别

		当 doctype 缺失的时候，浏览器会选择 Quirks Mode，这是非常不推荐的方式，
		当 doctype上面有注释，标签或者空行时，某些浏览器都会认为该页面不具有doctype。
		我们应该尽量避免 Quirks Mode，这对一个 web 应用是非常不利的地方。	  
		 
	4.每种doctype在浏览器中对应的渲染模式
		https://en.wikipedia.org/wiki/Quirks_mode
				
###根元素
	H4中的根元素:
		<html xmlns="http://www.w3.org/1999/xhtml">
		
		首先这个标记没有任何问题，你喜欢的话,那就背下来继续用。它是有效的。
		但这个标记中的很多字节在Html5中我们都可以省略了
		
		xmlns:这是XHTML1.0的东西，
			它的意思是在这个页面上的元素都位于http://www.w3.org/1999/xhtml这个命名空间内
			但是HTML5中的每个元素都具有这个命名空间，不需要在页面上再显示指出
			
			
	H5中的根元素
		<html></html>

###head元素
	MIME类型:
		每当浏览器请求一个页面时，web服务器会在发送实际页面内容之前，先发送一些头信息。
		浏览器需要这些信息来决定如何解析随后的页面内容。最重要的是Content-Type
		
		比如: Content-Type:text/html
		
		text/html:即这个页面的"内容类型",或者称为MIME类型。这个头信息将唯一确定某个资源的本质是什么
		也决定了它应该如何被呈现。
		
		图片也有自己的MIME类型		
			jpg:image/jpeg   
			png:image/png
			
		js也有自己的MIME类型，css也有自己的MIME类型，
			任何资源都有自己的MIME类型，整个web都依靠MIME类型来运作
	
###语义化标签
	在HTML 5出来之前，我们用div来表示页面头部，章节，页脚等。但是这些div都没有实际意义。
	各大浏览器厂商分析了上百万的页面，从中发现了DIV名称的通用id名称大量重复。例如，很多开发人员喜欢使用
	div id="footer"来标记页脚内容，所以Html5元素引入了语义化标签（一组新的片段类元素）
	
	https://dev.opera.com/blog/presentation-html5-and-accessibility-sitting-in-a-tree-4/idlist-url.htm
	https://dev.opera.com/blog/presentation-html5-and-accessibility-sitting-in-a-tree-4/classlist-url.htm
	
	<hgroup></hgroup>
	<header></header>
	<nav></nav>
	<section></section>
	<footer></footer>
	<article></article>
	<aside></aside>
	
	
	语义化的好处
		HTML5可以让很多更语义化结构化的代码标签代替大量的无意义的div标签
		这种语义化的特性提升了网页的质量和语义
		对搜索引擎更加的友好
	他们这些标签功能就是代替<div>功能中的一部分，他们没有任何的默认样式，除了会让文本另起一行外；
	https://gsnedders.html5.org/outliner/
	
	
	hgroup元素代表 网页 或 section 的标题，当元素有多个层级时，该元素可以将h1到h6元素放在其内，譬如文章的主标题和副标题的组合
	
		<hgroup>
		    <h1>HTML 5</h1>
		    <h2>这是一篇介绍HTML 5语义化标签和更简洁的结构</h2>
		</hgroup>
	
		hgroup使用注意：
			如果只需要一个h1-h6标签就不用hgroup
			如果有连续多个h1-h6标签就用hgroup
			如果有连续多个标题和其他文章数据，h1-h6标签就用hgroup包住，和其他文章元数据一起放入header标签
			
	
	header 元素代表 网页 或 section 的页眉。
		通常包含h1-h6元素或hgroup
	
		<header>
		    <hgroup>
		        <h1>网站标题</h1>
		        <h2>网站副标题</h2>
		    </hgroup>
		</header>
		
		header使用注意：
			可以是“网页”或任意“section”的头部部分
			没有个数限制。
			如果hgroup或h1-h6自己就能工作的很好，那就不要用header。



	nav元素代表页面的导航链接区域。用于定义页面的主要导航部分。
	
		<nav>
		    <ul>
		        <li>HTML 5</li>
		        <li>CSS3</li>
		        <li>JavaScript</li>
		    </ul>
		</nav>
		
		nav使用注意：
			用在整个页面主要导航部分上，不合适就不要用nav元素；
	
	
	
	section元素代表文档中的 节 或 段，段可以是指一篇文章里按照主题的分段；节可以是指一个页面里的分组。
	
		<section>
		    <h1>section是啥？</h1>
		    <article>
		        <h2>关于section</h1>
		        <p>section的介绍</p>
		        <section>
		            <h3>关于其他</h3>
		            <p>关于其他section的介绍</p>
		        </section>
		    </article>
		</section>
		
		section使用注意：
			section不是一般意义上的容器元素，如果想作为样式展示和脚本的便利，可以用div。
			article、nav、aside可以理解为特殊的section，
			所以如果可以用article、nav、aside就不要用section，没实际意义的就用div		
		
		
		
	article元素最容易跟section和div容易混淆，其实article代表一个在文档，页面或者网站中自成一体的内容
	
		<article>
		    <h1>一篇文章</h1>
		    <p>文章内容..</p>
		    <footer>
		        <p><small>版权：html5jscss网所属，作者：damu</small></p>
		    </footer>
		</article>
		
		article使用注意：
			独立文章：用article
			单独的模块：用section
			没有语义的：用div
		
		
		
	aside元素被包含在article元素中作为主要内容的附属信息部分，其中的内容可以是与当前文章有关的相关资料、标签、名次解释等
		
		在article元素之外使用作为页面或站点全局的附属信息部分。最典型的是侧边栏，其中的内容可以是日志串连，其他组的导航，甚至广告，这些内容相关的页面。
		
		<article>
		    <p>内容</p>
		    <aside>
		        <h1>作者简介</h1>
		        <p>小北，前端一枚</p>
		    </aside>
		</article>
		
		aside使用总结：
			aside在article内表示主要内容的附属信息，
			在article之外则可做侧边栏
			如果是广告，其他日志链接或者其他分类导航也可以用

	
	
	
	footer元素代表 网页 或 section 的页脚，通常含有该节的一些基本信息，譬如：作者，相关文档链接，版权资料。
	
		<footer>
		    COPYRIGHT@damu
		</footer>
		
		footer使用注意：
			可以是 网页 或任意 section 的底部部分；
			没有个数限制，除了包裹的内容不一样，其他跟header类似。
			
	<meta charset="UTF-8">:
		告诉浏览器你应该使用哪种编码来解析网页				
	
	###状态标签
	meter:用来显示已知范围的标量值或者分数值。
		value:当前的数值。
		min:值域的最小边界值。如果设置了，它必须比最大值要小。如果没设置，默认为0
		max:值域的上限边界值。如果设置了，它必须比最小值要大。如果没设置，默认为1
		low:定义了低值区间的上限值,如果设置了，它必须比最小值属性大，并且不能超过high值和最大值。未设置或者比最小值还要小时，其值即为最小值。
		high:定义了高值区间的下限值。如果设置了，它必须小于最大值，同时必须大于low值和最小值。如果没有设置，或者比最大值还大，其值即为最大值。
		optimum:这个属性用来指示最优/最佳取值。

	progress:用来显示一项任务的完成进度
		max:该属性描述了这个progress元素所表示的任务一共需要完成多少工作.
		value：该属性用来指定该进度条已完成的工作量.
				如果没有value属性,则该进度条的进度为"不确定",
				也就是说,进度条不会显示任何进度,你无法估计当前的工作会在何时完成

###列表标签
	datalist:datalist会包含一组option元素，这些元素表示其表单控件的可选值
				它的id必须要和input中的list一致
	
	details: 一个ui小部件，用户可以从其中检索附加信息。
			open属性来控制附加信息的显示与隐藏
	summary:用作 一个<details>元素的一个内容摘要（标题）
	
###注释标签
	ruby
	rt: 展示文字注音或字符注释。
	
###标记标签
	marK:着重
	
###疯狂的表单
	Html5 Forms概述,在Html5中:
		1.表单仍然使用<form>元素作为容器,我们可以在其中设置基本的提交特性
			form的action指向一个服务器地址（接口）
		2.当用户或开发人员提交页面时,表单仍然用于向服务端发送表单中控件的值
			注意表单项的name属性必须有值，服务器才能获取表单
		3.所有之前的表单控件都保持不变
		4.仍然可以使用脚本操作表单控件
		5.Htnl5之前的表单
			标签为input
				type:text:文本框
				type:password:密码框
				type:radio:单选按钮
					注意以name分组，确保单选关系，也为了后台能成功获取
					必须有value属性，为了后台获取后的识别（不写统一为on）
					checked属性,选中控制
				type:checkbox:复选框
					注意以name分组，确保为一组，也为了后台能成功获取
					必须有value属性，为了后台获取后的识别（不写统一为on）
					checked属性,选中控制
				type:submit:提交按钮
				type:reset:重置按钮
				type:button:普通按钮
			
			标签为select:下拉框
				name属性在select标签上
				multiple:可选多项
				子项可以通过optgroup来进行分组
					label属性用来定义组名
					子项为option标签
						selected属性,选中控制
						必须有value属性,为了后台获取后的识别
			
			标签为textarea:文本域
			
			标签为button:按钮
				type:submit:提交按钮
				type:reset:重置按钮
				type:button:普通按钮
				
			标签为lable:控制文本与表单的关系
				for属性指向一个input的id
				
			标签fieldset 标签legend:来为表单分组	
					
		6.attr & prop
		7.Html5 新增
		
###新增表单控件
		1.type:email :email地址类型
			当格式不符合email格式时，提交是不会成功的，会出现提示；只有当格式相符时，提交才会通过
			在移动端获焦的时候会切换到英文键盘
			
		2.type:tel :电话类型
			在移动端获焦的时候会切换到数字键盘
		
		3.type:url :url类型
			当格式不符合url格式时，提交是不会成功的，会出现提示；只有当格式相符时，提交才会通过
			
		4.type:search :搜索类型
			有清空文本的按钮
			
		5.type:range  :  特定范围内的数值选择器
			属性:min、max、step
		
		6.
		  type:number          :  只能包含数字的输入框
		  type:color  	       		:  颜色选择器
		  type:datetime        	 :  显示完整日期(移动端浏览器支持)
		  type:datetime-local  :  显示完整日期，不含时区
		  type:time            :  显示时间，不含时区
		  type:date            :  显示日期
		  type:week            :  显示周
		  type:month           :  显示月

			
###新增表单属性
		placeholder  :  输入框提示信息
			适用于form,以及type为text,search,url,tel,email,password类型的input
			
		autofocus  :  指定表单获取输入焦点
		
		required  :  此项必填，不能为空
		
		pattern : 正则验证  pattern="\d{1,5}
		
		formaction 在submit里定义提交地址
		
		list和datalist  :  为输入框构造一个选择列表
							list值为datalist标签的id
		
		
		
###表单验证反馈
	validity对象，通过下面的valid可以查看验证是否通过，如果八种验证都通过返回true，一种验证失败返回false
	node.addEventListener("invalid",fn1,false);
	
	valueMissing  	 :  输入值为空时返回true
	typeMismatch 	 :  控件值与预期类型不匹配返回true
	patternMismatch  :  输入值不满足pattern正则返回true
	
	tooLong  		 :  超过maxLength最大限制返回true
	rangeUnderflow   :  验证的range最小值返回true
	rangeOverflow    :  验证的range最大值返回true
	stepMismatch     :  验证range 的当前值 是否符合min、max及step的规则返回true
	
	customError 不符合自定义验证返回true
		setCustomValidity
		
###关闭验证
	formnovalidate属性
		
		

		