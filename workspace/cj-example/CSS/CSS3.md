###day01
	1.Cascading  style sheets
	2.样式表的组成
		规则
			选择器+声明块
					声明
						CSS合法的属性名+属性值
	3.浏览器渲染样式表的顺序
		从右往左
	4.选择器
		基本选择器及其扩展
			* . # 后代 组合（#test.pink）
			> + ~ 分组（，结合符）
		属性选择器
			存在与值 属性选择器
				[attr] [attr="val"] [attr~="val"](只认空格)
			子串值 属性选择器
				^ $ * |(val val-)
		伪类与伪元素选择器
			链接伪类
				:link :visited :target(css实现选项卡)
			动态伪类
				:hover :active(lvha)
			表单伪类
				:disabled :enabled	:checked(自定义单选按钮) :focus
			结构性伪类
				ele:nth-child(index)
				ele:nth-of-type(index) 以元素为中心
				
				区别：
					1.nth-child找到第index个子元素  这个子元素必须满足ele的规则
					  nth-of-type找到底index个ele子元素
					2.nth-of-type以元素为中心
				注意：
					index可以是变量n（只能是n  0到正无穷）
							odd：奇数
							even：偶数	
			伪元素
				::after
				::before
				
		CSS声明的优先级
			层叠
				先按来源进行刷选
				如果来源相同，按选择器的特殊性继续刷选
				选择器的特殊性如果相同，按顺序继续刷选
	5.自定义字体
		@font-face
		字体图标
			1.制作一套矢量图
			2.将矢量图与字符进行绑定
			3.使用工具或者站点生成一套字体
			4.最终使用
		 字体兼容处理网站
	       https://www.fontsquirrel.com/tools/webfont-generator
	    icomoon字体图标
	       https://icomoon.io/#home
	
	6.文本新增样式
		文本阴影
		怎么溢出显示省略号
			white-space=no-wrap
			overflow=hidden
			text-overflow=ellipsis
			包裹区域必须不能让子元素撑开


###day02复习
	1.盒模型新增样式
		box-shadow
			关键字(内 外阴影)
			length(x轴的偏移量)
			length(y轴的偏移量)
			length(模糊程度)
			length(阴影面积)
			color(阴影颜色)
		text-shadow
			length(x轴的偏移量)
			length(y轴的偏移量)
			length(模糊程度)
			color(阴影颜色)
	2.倒影（webkit内核  文字描边  背景镂空）
		渐变倒影
	3.box-sizing
		border-box：代表元素上设置的width和height表示的是border-box尺寸
		content-box：代表元素上设置的width和height表示的是content-box尺寸
	4.层级
		a.浮动提升半层，只有在浮动的情况下，才需要考虑元素分两层
			定位元素提一层
				相对定位会在文档流你有残留
		b.z-index为1怎么都会比a高;z-index为-1怎么都会比a低
	5.包含块
		初始包含块：和视窗大小位置尺寸一样的矩形
			滚动系统滚动条会不会影响初始包含块的位置？
				会
			禁止系统滚动条
				html,body{
					height:100%;
					overflow:hidden
				}
			怎么解决ie6下固定定位失效的问题？
				用绝对定位来模拟固定定位
					1.禁止系统滚动条
					2.将滚动条作用在最外层的包裹器上或者在body上
					3.因为移动包裹器或者body身上的滚动条并不会影响初始包含块的位置
						所以一个按照初始包含块定位的元素就不会产生移动
	6.边框图片、渐变
	7.背景
		css2
			background-color	平铺整个border-box
			background-image	默认从padding-box开始绘制，从border-box开始剪裁
								css3中有多背景，默认绘制时尺寸是自己的位图像素
			background-repeat
								控制平铺与否
			background-position
								控制背景图片在背景区域中的位置
								px
								百分比
									参照于背景区域减去背景图片的位图像素值
			background-attachment
								scroll：默认值，背景图不会随着元素滚动条的滚动而滚动
								fixed：背景图铺在视口中固定定位了
		css3
			background-origin
			background-clip
			background-size 
				图片是自适应的
	8.如何实现一张图片的垂直水平居中
		body:after{
			content: "";
			display: inline-block;
			height: 100%;
			vertical-align: middle;
		}
		img{
			vertical-align: middle;
		}


###day03
	a.过渡只关系元素的初始状态和结束状态，没有方法可以获取元素在过渡中每一帧的状态
	b.元素在初次渲染还没有结束的时候，是没有办法触发过渡的
	c.在绝大部分变换样式的切换时，变换组合的个数或位置不一样时，是没有办法触发过渡的


	1.过渡
		transition-property 
			指定过渡动画的属性（并不是所有的属性都可以动画）
		transition-duration
			指定过渡动画的时间（0也要带单位）
		transition-timing-function
			指定过渡动画的形式（贝塞尔）
		transition-delay
			指定过渡动画的延迟
		transition
			第一个可以被解析成时间的值会赋给transition-duration
		transtionend事件（DOM2）
			在每个属性完成过渡时都会触发这个事件
		当属性值的列表长度不一致时
			跟时间有关的重复列表
			transition-timing-function使用默认值
	
	2.2D变换（transform）
		rotate
			旋转
		translate
			平移
		skew
			斜切
		scale
			缩放
		变换组合!
			顺序是从右往左的，变换的底层其实就是矩阵的运算
		基点的变换
			transform-origin
		****

###day04复习
	百分比都是参照于谁？
	元素垂直水平居中方案
		已知高宽
			1.position=absolute,lrtb=0,margin=auto,包含块一定的是容器。（绝对定位盒模型的特性）
					left+right+w+p+m = 包含块的宽度
					top+bottom+h+p+m = 包含块的高度
			2.position=absolute,lt=50%,包含块一定的是容器,marginT/L为负的自身的一半。
			3.position=absolute,lt=50%,包含块一定的是容器,transform:tranlate3d(-50%,-50%,0)
			4.flex
		未知高宽
			1.position=absolute,lt=50%,包含块一定的是容器,transform:tranlate3d(-50%,-50%,0)
			2.flex
		img元素如何元素垂直水平居中
			1.基线
	1.3D变换
		perspective，灭点
			景深的写法：
				2种写法。一种css属性，一种是transform属性的一个变换函数（必须在第一位）
			景深的作用：
				构建3D舞台，决定用户的肉眼距离屏幕的水平距离！使3D变换的元素具有近大远小的感觉
			景深和灭点的关系
				景深越大，灭点越远，元素变形越小
				景深越小，灭点越近，元素变形越大
			景深基点
			景深叠加
			
			景深是一个不可继承属性，但他可以作用于所有的后代元素
			
		transform-style
			transform-style的作用
				构建3D舞台，使3d舞台有层次感
			transform-style是一个不可继承属性，他只作用于子元素
			
		backface-visibility
			隐藏元素背面
				一个元素分两面，但并不意味元素有厚度。在一个状态下，元素只能展现自己的一面
				
	2.css3动画基础
		animation-name：代表关键帧的名字
			关键帧：
			   @keyframes animiationName{
	                 keyframes-selector{
	                      css-style;
	                 }
    			}
		
		animation-duration：一个动画周期的时长
		animation-timing-function：作用于一个关键帧周期而非整个动画周期
		animation-delay：代表动画的延迟（这是一个动画外的属性）
		animation-iteration-count：循环关键帧的次数！（只会管理动画内的属性，动画的延迟不会被循环）
		animation-direction：改变关键帧的执行方向，还会影响animation-timing-function的形式
		animation-fill-mode：管理所有动画外的状态！
			什么是动画外的状态
				from之前
					animation-delay
				to之后
			值
				none		: 动画外的状态保持在动画之前的位置
				backwards	：from之前的状态与from的状态保持一致
				forwards	：to之后的状态与to的状态保持一致
				both		：动画外的状态与from和to的状态保持一致
		animation-play-state：管理动画的运行和停止
		
		关键帧：
			   @keyframes animiationName{
	                 keyframes-selector{
	                      css-style;
	                 }
    			}
    			
			keyframes-selector可以是关键帧form（0%）和to（100%）
							    可以是百分比
							   代表的是时间的百分比（时间点） 
###steps(num,[start/end])
	num:拆成多少步（当吗num为12时，整个动画最好有13帧）
	start：看不见第一帧
	end：看不见最后一帧

	transform只能使用在块级元素上！！！

###flex捋一捋
	0.flex frog练习
		http://flexboxfroggy.com/
		
	1.flex基础点
		---什么是容器，什么是项目，什么是主轴，什么是侧轴？
		---项目永远排列在主轴的正方向上
		---flex分新旧两个版本
			-webkit-box
			-webkit-flex / flex
	
	2.注意点
		---我们都知道新版本的flex要比老版本的flex强大很多，有没有必要学习老版本的flex？
			移动端开发者必须要关注老版本的flex
				因为很多移动端设备内核低只老版本的flex
		
		---老版本的box通过两个属性四个属性值控制了主轴的位置和方向
		      新版本的flex通过一个属性四个属性值控制了主轴的位置和方向
	
	3.老版本
		容器
			容器的布局方向
				-webkit-box-orient:horizontal/vertical
				控制主轴是哪一根
					horizontal：x轴
					vertical  ：y轴
			容器的排列方向
				-webkit-box-direction：normal/reverse
				控制主轴的方向
					normal：从左往右（正方向）
					reverse：从右往左（反方向）
			富裕空间的管理
				只决定富裕空间的位置，不会给项目区分配空间
				主轴
					-webkit-box-pack
						主轴是x轴
							start：在右边
							end:	在左边
							center：在两边
							justify：在项目之间
						主轴是y轴
							start：在下边
							end：在上边
							center：在两边
							justify：在项目之间
				侧轴
					-webkit-box-algin
						侧轴是x轴
							start：在右边
							end：  在左边
							center：在两边
						侧轴是y轴
							start：在下边
							end：   在上边	
							center：在两边
		项目
			弹性空间管理
				-webkit-box-flex：弹性因子（默认值为0）
						
	4.新版本
		容器
			容器的布局方向
			容器的排列方向
				flex-direction
				控制主轴是哪一根，控制主轴的方向
					row;		从左往右的x轴	
					row-reverse;从右往左的x轴
					column;		从上往下的y轴
					column-reverse;从下往上的y轴
			富裕空间的管理
				只决定富裕空间的位置，不会给项目区分配空间
				主轴
					justify-content
							flex-start：		在主轴的正方向
							flex-end:		在主轴的反方向
							center：			在两边
							space-between：	在项目之间
							 space-around：  在项目两边
							
				侧轴
					align-items
							flex-start：在侧轴的正方向
							flex-end：    在侧轴的反方向
							center：		在两边
							base#ne    基线对齐
         					stretch		等高布局（项目没有高度）	
		项目
			弹性空间管理
				flex-grow：弹性因子（默认值为0）
				
	5.新版本新增的
		容器
			flex-wrap：控制的是侧轴的方向
				nowrap 不换行
				wrap   侧轴方向由上而下 			（flex-shrink失效）
				wrap-reverse 侧轴方向由下而上 	（flex-shrink失效）
			
			align-content：多行/列时侧轴富裕空间的管理（把多行/列看成一个整体）
			
			flex-flow：flex-direction和flex-wrap的简写属性
				本质上控制了主轴和侧轴分别是哪一根，以及他们的方向
		
		项目
			order:控制项目的排列顺序
			align-self：项目自身富裕空间的管理
			flex-shrink：收缩因子（默认值为1）
			flex-basis：伸缩规则计算的基准值（默认拿width或height的值）
	
	6.伸缩规则
		flex-basis（默认值为auto）
		flex-grow（默认值为0）
			可用空间 = (容器大小 - 所有相邻项目flex-basis的总和)
			可扩展空间 = (可用空间/所有相邻项目flex-grow的总和)
			每项伸缩大小 = (伸缩基准值flex-basis + (可扩展空间 x flex-grow值))
		flex-shrink（默认值为1）
			   --.计算收缩因子与基准值乘的总和  
			   			var a = 每一项flex-shrink*flex-basis之和
			   --.计算收缩因数
			                     收缩因数=（项目的收缩因子*项目基准值）/第一步计算总和   
			             var b =  (flex-shrink*flex-basis)/a
			   --.移除空间的计算
			                      移除空间= 项目收缩因数 x 负溢出的空间 
			             var c =    b * 溢出的空间      
	
	7.侧轴富裕空间的管理
		单行单列
			align-items
			align-self（优先级高）
		多行多列
			align-content		

###flex捋一捋
	0.flex frog练习
		http://flexboxfroggy.com/
		
	1.flex基础点
		---什么是容器，什么是项目，什么是主轴，什么是侧轴？
		---项目永远排列在主轴的正方向上
		---flex分新旧两个版本
			-webkit-box
			-webkit-flex / flex
	
	2.注意点
		---我们都知道新版本的flex要比老版本的flex强大很多，有没有必要学习老版本的flex？
			移动端开发者必须要关注老版本的flex
				因为很多移动端设备内核低只老版本的flex
		
		---老版本的box通过两个属性四个属性值控制了主轴的位置和方向
		      新版本的flex通过一个属性四个属性值控制了主轴的位置和方向
	
	3.老版本
		容器
			容器的布局方向
				-webkit-box-orient:horizontal/vertical
				控制主轴是哪一根
					horizontal：x轴
					vertical  ：y轴
			容器的排列方向
				-webkit-box-direction：normal/reverse
				控制主轴的方向
					normal：从左往右（正方向）
					reverse：从右往左（反方向）
			富裕空间的管理
				只决定富裕空间的位置，不会给项目区分配空间
				主轴
					-webkit-box-pack
						主轴是x轴
							start：在右边
							end:	在左边
							center：在两边
							justify：在项目之间
						主轴是y轴
							start：在下边
							end：在上边
							center：在两边
							justify：在项目之间
				侧轴
					-webkit-box-algin
						侧轴是x轴
							start：在右边
							end：  在左边
							center：在两边
						侧轴是y轴
							start：在下边
							end：   在上边	
							center：在两边
		项目
			弹性空间管理
				-webkit-box-flex：弹性因子（默认值为0）
						
	4.新版本
		容器
			容器的布局方向
			容器的排列方向
				flex-direction
				控制主轴是哪一根，控制主轴的方向
					row;		从左往右的x轴	
					row-reverse;从右往左的x轴
					column;		从上往下的y轴
					column-reverse;从下往上的y轴
			富裕空间的管理
				只决定富裕空间的位置，不会给项目区分配空间
				主轴
					justify-content
							flex-start：		在主轴的正方向
							flex-end:		在主轴的反方向
							center：			在两边
							space-between：	在项目之间
							 space-around：  在项目两边
							
				侧轴
					align-items
							flex-start：在侧轴的正方向
							flex-end：    在侧轴的反方向
							center：		在两边
							base#ne    基线对齐
         					stretch		等高布局（项目没有高度）	
		项目
			弹性空间管理
				flex-grow：弹性因子（默认值为0）
				
	5.新版本新增的
		容器
			flex-wrap：控制的是侧轴的方向
				nowrap 不换行
				wrap   侧轴方向由上而下 			（flex-shrink失效）
				wrap-reverse 侧轴方向由下而上 	（flex-shrink失效）
			
			align-content：多行/列时侧轴富裕空间的管理（把多行/列看成一个整体）
			
			flex-flow：flex-direction和flex-wrap的简写属性
				本质上控制了主轴和侧轴分别是哪一根，以及他们的方向
		
		项目
			order:控制项目的排列顺序
			align-self：项目自身富裕空间的管理
			flex-shrink：收缩因子（默认值为1）
			flex-basis：伸缩规则计算的基准值（默认拿width或height的值）
	
	6.伸缩规则
		flex-basis（默认值为auto）
		flex-grow（默认值为0）
			可用空间 = (容器大小 - 所有相邻项目flex-basis的总和)
			可扩展空间 = (可用空间/所有相邻项目flex-grow的总和)
			每项伸缩大小 = (伸缩基准值flex-basis + (可扩展空间 x flex-grow值))
		flex-shrink（默认值为1）
			   --.计算收缩因子与基准值乘的总和  
			   			var a = 每一项flex-shrink*flex-basis之和
			   --.计算收缩因数
			                     收缩因数=（项目的收缩因子*项目基准值）/第一步计算总和   
			             var b =  (flex-shrink*flex-basis)/a
			   --.移除空间的计算
			                      移除空间= 项目收缩因数 x 负溢出的空间 
			             var c =    b * 溢出的空间      
	
	7.侧轴富裕空间的管理
		单行单列
			align-items
			align-self（优先级高）
		多行多列
			align-content
	
	8.flex的简写属性
		flex:1  (flex-basis:0% flex-grow:1 flex-shrink:1)	
		等分布局	

###响应式布局核心 CSS3媒体查询选择器
	@media 媒体类型  and(关键字) 带条件的媒体属性 and 带条件的媒体属性 {
		//规则
	}

	媒体类型
		all
		screen
		print
		
	媒体属性
		
		width：浏览器的窗口尺寸
		device-width：设备尺寸
		device-pixel-ratio（必须加webkit前缀）：像素比
			---以上三个媒体属性可加 min 和 max 前缀
					min：最小值为谁
					max：最大值为谁
		
		横竖屏切换
			orientation：landscape（横屏）
			orientation：portrait （竖屏）
		
	关键字
		only：处理浏览器尽量问题
		and：连接一条查询规则
		,：连接多条查询规则
		not：取反
		
###多列布局

###规范
	HTML
		什么叫html5?   是一个强大的技术集（html5 ~ html+css+js）
	CSS
		什么是css3？
			css3其实就是html5的一部分，而且现代前端中已经没有版本的概念，都是级别
	JS
		ECMASCRIPT
		DOM
		BOM（没有规范，window）

###预处理器（less）
	变量
		@
		变量的延迟加载
		变量是块级作用域
	嵌套
		&:平级
	混合
		什么是混合？
			将一系列的规则集引入另一个规则集中（ctrl c+ctrl v）
			混合的定义在less规则有明确的指定，使用.的形式来定义
		普通混合（编译到原生css中的）
		不带输出的混合（加双括号）
		带参数的混合
		带默认值的混合
		匹配模式
		arguments
	计算
		加减乘除   计算的一方带单位就可以
	继承
	

###day07复习
	1.less的继承
		#test{
			&:extend(.father)
		}
		#test:extend(.father){
			
		}
		继承实质上将.father选择器和#test组合成一个选择器，
			声明块使用.father的
		
		all:继承所有和.father相关的声明块
		切记父类不能定义成混合（继承不灵活性能高 混合灵活性能低）
	2.less的避免编译
		~"不会被编译的内容"
		变量在less中属于块级作用域，延迟加载
	3.bootstrap栅格系统&源码分析
		流体容器
			width:auto
			两侧15px padding
		固定容器
			阈值
				xs（小于768px）		width：auto
				sm（大于等于768px）	width：720+槽宽
				md（大于等于992px）	width：940+槽宽
				lg（大于等于1200）		width：1140+槽宽
			两侧15px padding
		行
			两侧-15px margin
		列
			公共样式
				两侧有15px 的padding
				相对定位
			float
			width
				1~12
			left
			right
				0~12
				0：auto
			margin-left
				0~12
	4.列排序
		注意阈值上样式的设置不能跳跃


	

###day08
	1.width：auto   width：100%
	2.响应式页面
		定制化：修改bootstrap的源文件
				将bootstrap入口less文件作为混合使用
	3.attr&prop
		---什么是attribute？
			html的预定义和自定义属性
		---什么是property？
			js对象身上的直接属性
		---什么是布尔值属性，什么是非布尔值属性？
			property所对应的属性值是否布尔类型
		---attribute和property的同步关系
			非布尔值属性
				实时同步
			布尔值属性
				没有动过property
					attribute会同步property
					property不会同步attribute
				动过property
					attribute不会同步property
					property不会同步attribute
		---浏览器认谁，用户操作的是谁
			property
		---在jQuery中的体现
			attr()
			prop()
		---总结
			布尔值属性最好使用prop方法
			非布尔值属性attr方法
		---html5中有关的属性
			classlist：相对于class的property(className)
				add
				remove
				toggle
			dataset:自定义属性（限制 data-x-y）的property
				
	4.html5导学
		html5的意义，到底什么是html5，html5的优势
		h4与h5的对比
			编码
			渲染模式
			mine类型
		语义化标签
			header
			footer
			section
			nav
			
		










