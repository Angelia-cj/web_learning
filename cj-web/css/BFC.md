###在解释BFC是什么之前，需要先介绍Box，Formattinf Context的概念

Box：css布局的基本单位

	Box是CSS布局的对象和基本单位，直观点来说，就是一个页面由很多个Box组成的
	元素的
	元素的类型和display属性，决定了这个Box的类型。不同类型的Box，会参与不同的Formatting Context（一个决定如何渲染文档的容器）。
	因此Box内的元素会以不同的方式渲染。让我们看看有哪些盒子：
		block-level box：
			display属性为block，list-item，table的元素，会生成block-level box，并且参与block formatting context
		inline-level box:
			display属性为inline，inline-block，inline-table的元素，会生成inline-level box，并且参与inline formatting context
Formatting Context
	Formatting Context是W3C CSS2.1规范中的一个概念。
	它是页面中的一块渲染区域，并且由一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用
	最常见的Formatting Context有Block formatting context（简称BFC），inline formatting context（简称IFC）
			


###BFC是什么
 BFC(Block formatting context)直译为“块级格式化上下文”。它是一个独立的渲染区域，只有Block-level box参与，、它规定了内部的Block-level box 如何布局，并且与这个区域外部毫不相干

###BFC布局规则	
	1. 内部的Box会在垂直方向，一个接一个的放置
	2. BFC的区域不会与float box重叠
	3. 内部的Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻BOX的margin会发生重叠
	4. 计算BFC的高度时，浮动元素也参与计算。(清楚浮动  haslayout)
	5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此

###BFC什么时候出现(哪些元素会生成BFC)
	根元素
	float元素
	position为absolute或fixed
	overflow不为visible
	display为inline-block，table-cell，table-caption，flex，inline-flex
