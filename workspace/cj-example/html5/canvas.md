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
###canvas绘制矩形
	HTML中的元素canvas只支持一种原生的图形绘制：矩形。所有其他的图形的绘制都至少需要生成一条路径

	1.绘制矩形
		canvas提供了三种方法绘制矩形：
			---->绘制一个填充的矩形（填充色默认为黑色）
				fillRect(x, y, width, height)
			---->绘制一个矩形的边框（默认边框为:一像素实心黑色）
				strokeRect(x, y, width, height)
			---->清除指定矩形区域，让清除部分完全透明。	
				clearRect(x, y, width, height)
				
		x与y指定了在canvas画布上所绘制的矩形的左上角（相对于原点）的坐标。
		width和height设置矩形的尺寸。（存在边框的话，边框会在width上占据一个边框的宽度，height同理）
	
	2.strokeRect时，边框像素渲染问题
		按理渲染出的边框应该是1px的，
		canvas在渲染矩形边框时，边框宽度是平均分在偏移位置的两侧。
			context.strokeRect(10,10,50,50)
				:边框会渲染在10.5 和 9.5之间,浏览器是不会让一个像素只用自己的一半的
				  相当于边框会渲染在9到11之间
			context.strokeRect(10.5,10.5,50,50)
				:边框会渲染在10到11之间
	
	3.添加样式和颜色
		fillStyle   :设置图形的填充颜色。
		strokeStyle :设置图形轮廓的颜色。
			默认情况下，线条和填充颜色都是黑色（CSS 颜色值 #000000）
		lineWidth : 这个属性设置当前绘线的粗细。属性值必须为正数。
			描述线段宽度的数字。 0、 负数、 Infinity 和 NaN 会被忽略。
			默认值是1.0。
			
	4.lineWidth & 覆盖渲染
	
	5.lineJoin
		设定线条与线条间接合处的样式（默认是 miter）
		round : 圆角
		bevel : 斜角
		miter : 直角
		
		
		###canvas绘制路径
	图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。
	
###步骤
	1.首先，你需要创建路径起始点。
	2.然后你使用画图命令去画出路径
	3.之后你把路径封闭。
	4.一旦路径生成，你就能通过描边或填充路径区域来渲染图形。
	
###绘制三角形
	beginPath()
		新建一条路径，生成之后，图形绘制命令被指向到路径上准备生成路径。
		
		生成路径的第一步叫做beginPath()。本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，
		所有的子路径（线、弧形、等等）构成图形。而每次这个方法调用之后，列表清空重置，
		然后我们就可以重新绘制新的图形。
	
	moveTo(x, y)
		将笔触移动到指定的坐标x以及y上
		当canvas初始化或者beginPath()调用后，你通常会使用moveTo()函数设置起点
		
	lineTo(x, y)
		将笔触移动到指定的坐标x以及y上
		绘制一条从当前位置到指定x以及y位置的直线。
	
	closePath()
		闭合路径之后图形绘制命令又重新指向到上下文中。
			闭合路径closePath(),不是必需的。这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。
		如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做
			当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。
		但是调用stroke()时不会自动闭合
		
	stroke()
		通过线条来绘制图形轮廓。
		不会自动调用closePath()
		
	fill()
		通过填充路径的内容区域生成实心的图形。
		自动调用closePath()
		
###绘制矩形
	rect(x, y, width, height)
		绘制一个左上角坐标为（x,y），宽高为width以及height的矩形。
		当该方法执行的时候，moveTo()方法自动设置坐标参数（0,0）。
		也就是说，当前笔触自动重置会默认坐标
		
###lineCap
	lineCap 是 Canvas 2D API 指定如何绘制每一条线段末端的属性。
	有3个可能的值，分别是：
		butt  :线段末端以方形结束。 
		round :线段末端以圆形结束
		square:线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域
	默认值是 butt。
		
###save
	save() 是 Canvas 2D API 通过将当前状态放入栈中，保存 canvas 全部状态的方法
	
	保存到栈中的绘制状态有下面部分组成：
		当前的变换矩阵。
		当前的剪切区域。
		当前的虚线列表.
		以下属性当前的值： strokeStyle, 
					 fillStyle,  
					 lineWidth, 
					 lineCap, 
					 lineJoin...
					 
###restore
	restore() 是 Canvas 2D API 通过在绘图状态栈中弹出顶端的状态，将 canvas 恢复到最近的保存状态的方法。 
	如果没有保存状态，此方法不做任何改变。	
	

###角度与弧度的js表达式:radians=(Math.PI/180)*degrees。
###canvas绘制圆形
	arc(x, y, radius, startAngle, endAngle, anticlockwise)
			画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，
			按照anticlockwise给定的方向（默认为顺时针）来生成。
			ture：逆时针
			false:顺时针
		
		x,y为绘制圆弧所在圆上的圆心坐标
		radius为半径
		startAngle以及endAngle参数用弧度定义了开始以及结束的弧度。这些都是以x轴为基准
		参数anticlockwise 为一个布尔值。为true时，是逆时针方向，否则顺时针方向。

###arcTo
	arcTo(x1, y1, x2, y2, radius)
	根据给定的控制点和半径画一段圆弧
	肯定会从(x1 y1)  但不一定经过(x2 y2);(x2 y2)只是控制一个方向

###二次贝塞尔
	quadraticCurveTo(cp1x, cp1y, x, y)
		绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。
		起始点为moveto时指定的点
		
###三次贝塞尔
	bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
		绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。
		起始点为moveto时指定的点###canvas中的变换
	translate(x, y)
		我们先介绍 translate 方法，它用来移动 canvas的原点到一个不同的位置。
		translate 方法接受两个参数。x 是左右偏移量，y 是上下偏移量，
		
		在canvas中translate是累加的

	rotate(angle)
		这个方法只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值。
		旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate 方法
		
		在canvas中rotate是累加的
		
	scale(x, y)
		scale 方法接受两个参数。x,y 分别是横轴和纵轴的缩放因子，它们都必须是正值。
		值比 1.0 小表示缩小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。
		缩放一般我们用它来增减图形在 canvas 中的像素数目，对形状，位图进行缩小或者放大。
		
		在canvas中scale是累称的
		
###表盘
	1.初始化
		将圆心调整到画布的中间
		由于canvas中画圆与旋转所参照的坐标系于正常坐标系有出入
			将整个画布逆时针旋转90度
		初始化一些样式数据
			ctx.lineWidth = 8;
		  	ctx.strokeStyle = "black";
		  	ctx.lineCap = "round";
	
	2.外层空心圆盘
		圆盘颜色:#325FA2
		圆盘宽度:14
		圆盘半径:140
		
	3.时针刻度
		长度为20
		宽度为8
		外层空心圆盘与时针刻度之间的距离也为20
		
	4.分针刻度
		宽度为4
		长度为3
		
	5.时针
		宽度为14
		圆心外溢出80 收20
		
	6.分针
		宽度为10
		圆心外溢出112 收28
		
	7.秒针
		颜色:D40000
		宽度为6
		圆心外溢出83 收30
		
		---->中心实心圆盘
			半径为10
		---->秒针头
			96码开外半径为10的空心圆
			宽度为6
		
		
	###在canvas中插入图片(需要image对象)
	1.canvas操作图片时，必须要等图片加载完才能操作
	2.drawImage(image, x, y, width, height)
		其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。
		这个方法多了2个参数：width 和 height，这两个参数用来控制 当像canvas画入时应该缩放的大小


###在canvas中设置背景(需要image对象)
	1.createPattern(image, repetition)
		image:图像源
		epetition:
			"repeat" 
			"repeat-x" 
			"repeat-y" 
			"no-repeat" 
			
	一般情况下，我们都会将createPattern返回的对象作为fillstyle的值
			
###渐变
	canvas渐变（线性渐变）
		createLinearGradient(x1, y1, x2, y2)
				表示渐变的起点 (x1,y1) 与终点 (x2,y2)
					
		gradient.addColorStop(position, color)
				gradient :createLinearGradient的返回值
				addColorStop 方法接受 2 个参数，
					position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。
									例如，0.5 表示颜色会出现在正中间。
					color 参数必须是一个有效的 CSS 颜色值（如 #FFF， rgba(0,0,0,1)，等等）
				
	
	canvas渐变（径向渐变）	
		createRadialGradient(x1, y1, r1, x2, y2, r2)
			前三个参数则定义另一个以(x1,y1) 为原点，半径为 r1 的圆，
			后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。
			
		###在canvas中绘制文本
	canvas 提供了两种方法来渲染文本:
		fillText(text, x, y)
			在指定的(x,y)位置填充指定的文本
		strokeText(text, x, y)
			在指定的(x,y)位置绘制文本边框
			
###文本样式
	font = value
		当前我们用来绘制文本的样式. 这个字符串使用和 CSS font 属性相同的语法. 
		默认的字体是 10px sans-serif。
		font属性在指定时，必须要有大小和字体 缺一不可
		
	textAlign = value
		文本对齐选项. 可选的值包括： left, right  center. 
		left
			文本左对齐。
		right
			文本右对齐。
		center
			文本居中对齐。
			这里的textAlign="center"比较特殊。textAlign的值为center时候
			文本的居中是基于你在fillText的时候所给的x的值，
			也就是说文本一半在x的左边，一半在x的右边
		
	
	textBaseline = value
		描述绘制文本时，当前文本基线的属性。
		top
			文本基线在文本块的顶部。
		middle
			文本基线在文本块的中间。
		bottom
			文本基线在文本块的底部。

###measureText
	measureText() 方法返回一个 TextMetrics 对象，包含关于文本尺寸的信息（例如文本的宽度）
		
###canvas中文本水平垂直居中
	
	
###阴影(文本阴影&盒模型阴影)
	shadowOffsetX = float
		shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，
		它们默认都为 0。
	shadowOffsetY = float
		shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，
		它们默认都为 0。
	shadowBlur = float
		shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。
	shadowColor = color(必需项)
		shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。
	
	
		###在canvas中的像素操作
		到目前为止，我们尚未深入了解Canvas画布真实像素的原理，事实上，
	你可以直接通过ImageData对象操纵像素数据，直接读取或将数据数组写入该对象中
	

###得到场景像素数据
	getImageData():获得一个包含画布场景像素数据的ImageData对像,它代表了画布区域的对象数据
	
	ctx.getImageData(sx, sy, sw, sh)
		sx:将要被提取的图像数据矩形区域的左上角 x 坐标。
		sy:将要被提取的图像数据矩形区域的左上角 y 坐标。
		sw:将要被提取的图像数据矩形区域的宽度。
		sh:将要被提取的图像数据矩形区域的高度。
	
###ImageData对象
	ImageData对象中存储着canvas对象真实的像素数据，它包含以下几个只读属性：
		width:图片宽度，单位是像素
		height:图片高度，单位是像素
		data:Uint8ClampedArray类型的一维数组，
			包含着RGBA格式的整型数据，范围在0至255之间（包括255）
			R:0 --> 255(黑色到白色)
			G:0 --> 255(黑色到白色)
			B:0 --> 255(黑色到白色)
			A:0 --> 255(透明到不透明)
			
###在场景中写入像素数据
	putImageData()方法去对场景进行像素数据的写入。
	putImageData(myImageData, dx, dy)
		dx和dy参数表示你希望在场景内左上角绘制的像素数据所得到的设备坐标
		
###创建一个ImageData对象
	ctx.createImageData(width, height);
		width : ImageData 新对象的宽度。
		height: ImageData 新对象的高度。
		
	默认创建出来的是透明的

###操作单个像素（行与列）

###马赛克
	
###全局透明度的设置
	globalAlpha = value
		这个属性影响到 canvas 里所有图形的透明度，
		有效的值范围是 0.0 （完全透明）到 1.0（完全不透明）
		默认是 1.0
		
###覆盖合成
	source:新的图像(源)
	destination:已经绘制过的图形(目标)

	globalCompositeOperation
		source-over(默认值):源在上面,新的图像层级比较高
		source-in  :只留下源与目标的重叠部分(源的那一部分)
		source-out :只留下源超过目标的部分
		source-atop:砍掉源溢出的部分
		
		destination-over:目标在上面,旧的图像层级比较高
		destination-in:只留下源与目标的重叠部分(目标的那一部分)
		destination-out:只留下目标超过源的部分
		destination-atop:砍掉目标溢出的部分	###将画布导出为图像
	toDataURL(注意是canvas元素接口上的方法)
	
###事件操作
	ctx.isPointInPath(x, y)
		判断在当前路径中是否包含检测点
			x:检测点的X坐标
			y:检测点的Y坐标
	
	注意，此方法只作用于最新画出的canvas图像	
