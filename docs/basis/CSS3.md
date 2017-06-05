# CSS

![Css3img](/images/Css3img.jpeg)

## css基础知识

### 盒模型


#### 概述

>在一个文档中，每个元素都被表示为一个矩形的盒子。确定尺寸, 属性 --- 像它的颜色，背景，边框方面 --- 和这些盒子的位置是渲染引擎的目标。<br/><br/>
在CSS中，使用标准盒模型描述这些矩形盒子中的每一个。这个模型描述了元素所占空间的内容。每个盒子有四个边：外边距边, 边框边, 内填充边 与 内容边。

![boximg1](/images/boximg1.png)  

>内容区域content area 是包含元素真实内容的区域。它通常包含背景、颜色或者图片等，位于内容边界的内部，它的大小为内容宽度 或 content-box宽及内容高度或content-box高。

>如果 box-sizing 为默认值， width, min-width, max-width, height, min-height 与 max-height 控制内容大小。

>内边距区域padding area 延伸到包围padding的边框。如果内容区域content area设置了背景、颜色或者图片，这些样式将会延伸到padding上(译者注：而不仅仅是作用于内容区域)。它位于内边距边界内部, 它的大小为 padding-box  宽与 padding-box 高。

>内边距与内容边界之间的空间可以由 padding-top, padding-right, padding-bottom, padding-left 和简写属性 padding 控制。

>边框区域border area 是包含边框的区域，扩展了内边距区域。它位于边框边界内部，大小为 border-box  宽和 border-box 高。由 border-width 及简写属性 border控制。

>外边距区域margin area用空白区域扩展边框区域，以分开相邻的元素。它的大小为  margin-box 的高宽。

>外边距区域大小由 margin-top, margin-right, margin-bottom, margin-left 及简写属性 margin 控制。

>在 外边距合并 的情况下，由于盒之间共享外边距，外边距不容易弄清楚。

>最后，请注意，对于非替换的行内元素来说，尽管内容周围存在内边距与边框，但其占用空间（行高）由 line-height 属性决定。

## 布局相关

![img2](/images/UfUNVjm.png)

### 传统布局

![cssbox](/images/cssbox.gif)

#### 静态布局（Static Layout）

>即传统Web设计，对于PC设计一个Layout，在屏幕宽高有调整时，使用横向和竖向的滚动条来查阅被遮掩部分；
对于移动设备，单独设计一个布局，使用不同的域名如wap.或m.。

#### 流式布局（Adaptive Layout）

>自适应布局（Adaptive）的特点是分别为不同的屏幕分辨率定义布局。布局切换时页面元素发生改变，但在每个布局中，页面元素不随窗口大小的调整发生变化。
你可以把自适应布局看作是静态布局的一个系列。

#### 响应式布局（Responsive Layout）

>分别为不同的屏幕分辨率定义布局，同时，在每个布局中，应用流式布局的理念，即页面元素宽度随着窗口调整而自动适配。
可以把响应式布局看作是流式布局和自适应布局设计理念的融合。

<p class="tip">
结合上述文字描述，再观察此[链接](http://wow.techbrood.com/fiddle/1753)的页面实际效果。
</p>

### flex布局（Flexible Box）

[FlexBox兼容性查看](http://caniuse.com/#search=flex)  

![flexbox](/images/flexbox.png)

>Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。  
>任何一个容器都可以指定为 Flex 布局。

```
.box{
  display: flex;
}		
```
>行内元素也可以使用 Flex 布局。

```
.box{
  display: inline-flex;
}
```
>Webkit 内核的浏览器，必须加上-webkit前缀。

```
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```
>*设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效*

#### 基本概念

>采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![img1](/images/bg2015071004.png)

>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

>项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size

#### 容器的属性

>以下6个属性设置在容器上。

##### flex-direction（排列方向）
>flex-direction属性决定主轴的方向（即项目的排列方向）。 

```
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

![img2](/images/bg2015071005.png)

<p class="warning">
row（默认值）：主轴为水平方向，起点在左端。  
row-reverse：主轴为水平方向，起点在右端。  
column：主轴为垂直方向，起点在上沿。  
column-reverse：主轴为垂直方向，起点在下沿。  
</p>

##### flex-wrap（换行方式）
>默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

![img3](/images/bg2015071006.png)

```
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

>（1）nowrap（默认）：不换行。

![img4](/images/bg2015071007.png)

>（2）wrap：换行，第一行在上方。

![img5](/images/bg2015071008.jpg)

>（3）wrap-reverse：换行，第一行在下方。

![img6](/images/bg2015071009.jpg)
##### flex-flow（前两个的简写法）
>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

```
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```
<p class="warning">
若不明其意👆请戳此处[(づ｡◕‿‿◕｡)づ链接](http://blog.csdn.net/iefreer/article/details/50727035)
</p>

##### justify-content（对齐方式）
>justify-content属性定义了项目在主轴上的对齐方式。

```
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

![img7](/images/bg2015071010.png)

<p class="warning">
flex-start（默认值）：左对齐。  
flex-end：右对齐。  
center： 居中。  
space-between：两端对齐，项目之间的间隔都相等。  
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
</p>

##### align-items（交叉轴对齐方式）
>align-items属性定义项目在交叉轴上如何对齐。

```
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

![img8](/images/bg2015071011.png)

<p class="warning">
flex-start：交叉轴的起点对齐。  
flex-end：交叉轴的终点对齐。  
center：交叉轴的中点对齐。  
baseline: 项目的第一行文字的基线对齐。  
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
</p>

##### align-content（多轴线对齐方式）
>align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

![img12](/images/bg2015071012.png)

<p class="warning">
flex-start：与交叉轴的起点对齐。  
flex-end：与交叉轴的终点对齐。  
center：与交叉轴的中点对齐。  
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。  
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。  
stretch（默认值）：轴线占满整个交叉轴。
</p>

#### 填充物的属性

##### order（次序排列）
>order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```
.item {
  order: <integer>;
}
```

![img13](/images/bg2015071013.png)

##### flex-grow（放大比例）
>flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

```
.item {
  flex-grow: <number>; /* default 0 */
}
```

![img14](/images/bg2015071014.png)

<p class="warning">
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。  
如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
</p>

##### flex-shrink（缩小比例）
>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

```
.item {
  flex-shrink: <number>; /* default 1 */
}
```

![img15](/images/bg2015071015.jpg)

<p class="warning">
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。  
如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。<br/><br/>
负值对该属性无效。
</p>

##### flex-basis(起始默认值)
>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
>它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。  

##### flex(比例|起始默认设置简写)
>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

>该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。  
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

##### align-self（差异对齐）
>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

![img16](/images/bg2015071016.png)

>该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

<p class="warning">
flex-start：交叉轴的起点对齐。  
flex-end：交叉轴的终点对齐。  
center：交叉轴的中点对齐。  
baseline: 项目的第一行文字的基线对齐。  
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
</p>

#### FlexBox快速教程
便于你对于Flexbox的理解你可以戳此处:[flexbox快速掌握](http://flexboxfroggy.com/)
<p class="warning">
强烈推荐👆更加生动直观，带动你的思考。
</p>

或者此处：[实例教程请戳这里](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)。


### Grid布局

--

[Grid兼容性查看](http://caniuse.com/#search=grid)

#### 什么是CSS3 Grid布局

>CSS3网格布局目的是让开发人员设计一个网格并将内容放在这些网格内。而不是使用浮动制作一个网格，实际上你将一个元素声明为一个网格容器，并把元素内容置于网格中。最重要的是文档流的源顺序并不重要。  


>学习CSS Grid布局更多的相关知识，我觉得通过一些工具会对大家的理解更有帮助，到目前为止，这方面的在线工具已经有很多种，比如：

##### 声明网格

>我们声明一个网格是使用“display”的新属性值：“display:grid”。由于我们这里需要在IE10中实现，所以我们需要加上前缀：“display:-ms-grid;”。<br/><br/>
一旦我们声明了网格，就可以使用“grid-columns”和“grid-rows”属性来设置列与行。

```
.wrapper {   
		display: -ms-grid;   
		-ms-grid-columns: 200px 20px auto 20px 200px;   
		-ms-grid-rows: auto 1fr; 
		}	 
```
>在上面的示例中  
 把“.wrapper”元素声明成一个网格。  
 我使用“grid-columns”属性创建了一个200像素宽度的列，一个20像素的间距，一个根据可用空间的弹性列，另一个20像素的间距和200像素的侧边栏：一个灵活的布局有两个固定宽度的侧边栏。<br/><br/>
 使用“grid-rows”属性我创建了两行：  
 第一行设置了“auto”，不管是否入内容他都将延伸填允；  
 第二行设置了“1fr”，一个用于网格的新单位值，他意味着一个分数单位。  
 在这种情况之下，一个分数单位的可用空间，不管空间是否存在都是有效的。
 
##### 网格项目定位
>现在有一个简单的网格，我需要把内容放上去。假如我有一个类名叫“.mian”的div，我想把他放在网格的第二行和设置了auto值的列，我可以使用下面的样式：

```
.main {   
	-ms-grid-column: 3;   
	-ms-grid-row: 2;   
	-ms-grid-row-span: 1; 
	}	 
```

>如果你是一个老的开发人员，你可能已经意识到，我们其实是使用CSS创建了一个类似于HTML的表格布局。如果你想尝试找到对应的元素，你可以把网格布局当作一个表格的概念，这是最有益的方法。

#### CSS Grid布局的学习

下面的动图是使用@Mirza Joldic写的 [CSS Grid Playground](https://www.cssgridplayground.com/) 小工具。我们也主要通过这款小工具来掌握Grid：

![GridGif](/images/GridGif.gif)

##### 基础属性

###### 1.核心概念(display:grid;)

>这里要提两个核心概念，这两个核心概念有点类似于Flexbox布局：

- Grid容器（对应Flexbox布局中的Flex容器）  
- Grid项目（对应Flexbox布局中的Flex项目）  

>比如一个这样的HTML结构：

![GridImg1](/images/GridImg1.png)

>使用 CSS Grid布局首要的第一步，就是通过 display:grid; 来对容器声明一个网格容器，那么这个 div 元素里面对应的子元素就自动成为网格项目。

![GridGif1](/images/GridGif1.gif)

>虽然你在 div.grid-container 中设置了 display:grid;，声明了这个元素为Grid容器，但在浏览器中，并看不到有任何的变化。但在在幕后中，他们还是发生了变化， div.grid-container 是一个Grid容器，在这里我们添加的子元素就自动变成了网格项目。

###### 2.列的宽度比(grid-template-columns)
>指定列数，并对每列宽度设值
接下来，使用 grid-template-columns: 1fr 1fr 1fr; 来定义三列网格
👇(此处有[*七个子元素*](javascript:;) )：

![GridGif2](/images/GridGif2.gif)

###### 3.行的高度比(grid-template-rows)
>指定行数，并对每行高度设值

###### 4.间隔大小(grid-gap)
>指定列（或行）的间距  

从gif图中就明显的看出来，现在有点变化了，颜色块变小了，但很难区分出有何变化，为了让效果之间有更突出的差异，再给 .grid-container 中添加 grid-gap:5px ：
![GridGif3](/images/GridGif3.gif)

>看到变化了吧，整个网格分了三个列，单元格之间有 5px 的间距，同时每列的列宽是整个宽度的三分之一，那是因为我们采用了 fr 单位，而且把整个网格分成了三列，每列的宽度是 1fr 。

<p class="warning">
回顾前三个知识点：  
grid-template-columns 用来把网格指定列的宽度  
grid-gap 用来指定列（或行）的间距  
fr 可以自动根据网格容器的宽度来计算列的宽度  
</p>

>现在我们把 grid-template-columns 的值改成： 1fr 2fr 1fr ，对应的效果就会变成：

![GridGif4](/images/GridGif4.gif)

>现在第二列的宽度是第一列和最后一列的两倍。这也再次证明 fr 单位的强大之处，使用它可以让你很容易定义你的网格尺寸。

###### 5.跨列合并(grid-column)
>现在越来越接近我们想要的网格。但需求是不断变化的，比如我们现在想让顶部的第一行尽可能的宽，比如说跨整个网格列。如此一来，只需要在第一个网格上使用 grid-column: 1 / 4 ：

![GridGif5](/images/GridGif5.gif)



<p class="warning">
或许第一次接触 1 / 4 会令你感到神秘，其实这个涉及到了CSS Grid中的重要概念之一，那就是网格线，其中第一个数字是列的起始网格线位置，第二个数字是线束网格线的位置(并不包含该网格线后的Child)。
</p>

###### 6.跨行合并(grid-row)
>接下来，我们想要有一个 300px 的侧边栏高度，并且让他的位置是垂直方向的 2 / 3 。我们可以使用 grid-row: 2 / 4 来实现，这个特性和 grid-column 非常的类似。这个时候，效果变成这样：

![GridGif6](/images/GridGif6.gif)

###### 7.合并单元格(span)
>其实CSS Grid看上去和表格非常的类似，在表格中我们有一个专业的术语，合并单元格。其实在CSS Grid布局中，我们同样有一个类似的特性，那就是在 grid-column 或者 grid-row 中引入关键词 span ，在关键词 span 后面紧跟一个数值，就是表示合并单元格的数量，先来看下图：

![GridGif7](/images/GridGif7.gif)

>上面的示例中，我们使用到了 grid-column: 2 / span 1 和 grid-row: 2 / span 2 。其中 grid-column: 2 / span 1 表示从列网格线 2 开始，跨度是 1 个列网格线（其实就是合并一个列单元格）。而 grid-row: 2 / span 2 表示的是从行网格线 2 开始，跨度是两个两个线（其实就是合并两个行单元格）。

###### 8.隐式网格线
对于一个CSS Grid，可以通过 grid-template-columns 创建列网格线， grid-template-rows 创建行网格线。这种方式创建的是一种显式的网格线。  
当然，除了这种方式，还可以创建隐式网格线。除此之外，还可以使用 grid-auto-rows 和 grid-auto-columns 可以创建一个隐式网格。这个隐式网格对应的网格线就被称之为隐式网格线。  
下图简单的展示了示例中的网格线示意图：

![GridImg2](/images/GridImg2.png)

###### 9.对齐模块特性(align-self)
>通过上面的方式，我们可以轻易的控制网格，也能非常容易的实现一个Web面页的布局，比如一个三列的布局。但我们在布局中经常还需要控制对齐方式，特别是在CSS Grid的布局当中，比如下面的示例中，我们第三列并未占满整个高度，这个时候希望它能底部对齐。此时为了实现这样的效果，需要使用到CSS中的对齐模块特性，比如在这里，我们可以使用 align-self: end 来实现：

![GridGif8](/images/GridGif8.gif)

>align-self 是CSS中的一个新模块特性 [Box Alignment](https://www.w3.org/TR/css-align-3/) 中的一个属性。有关于这个模块的的功能还是非常的实用。@Rachel Andrew整理了一份 [Box Alignment Cheatsheet](https://rachelandrew.co.uk/css/cheatsheets/box-alignment) ，里面详细介绍了Box Alignment的使用。简单的来讲，这个规范中有三个关键部分：

- [Positional Alignment](https://drafts.csswg.org/css-align/#positional-values)：关键词有 start 、 end 、 center
- [Baseline Alignment](https://drafts.csswg.org/css-align/#baseline-values)：关键词有 start 、 end 、 center
- [Distributed Alignment](https://drafts.csswg.org/css-align/#distribution-values)：关键词有 start 、 end 、 center

>其实你要是对Flexbox熟悉的话，你或许感觉这个Box Alignment有点类似于Flexbox中的一些控制Flex项目对齐方式的属性。事实是这样的，如果你感兴趣想深入的了解这方面的相关知识，建议你花点时间阅读《 [Web布局新系统：CSS Grid,Flexbox和Box Alignment](javascript:;) 》一文。<br/><br/>

如果你对上面的相关知识有所了解的话，你就可以很轻易的使用CSS Grid相关知识实现一个常用的Web页面布局效果。比如下面这张图，为了好完，我把主内容的容器设置了具体的宽度，并且通过Box Alignment属性，让这个区域水平垂直居中：

![GridGif9](/images/GridGif9.gif)

>整个题外话，虽然实现 [水平垂直居中的解决方案](http://www.w3cplus.com/blog/tags/357.html) 已有很多种了，但Box Alignment模块将是最佳方式。

>基础的使用就是这样。当然，在使用它去做一些事情或者做一些创意之前，还是很有必要对CSS Grid基础要有一个简单的了解。个人建议你花点时间阅读一下下面几篇文章：

[CSS Grid布局：图解网格布局中术语之一](http://www.w3cplus.com/css3/css-grid-layout-terminology-part1.html)
[CSS Grid布局：图解网格布局中术语二](http://www.w3cplus.com/css3/css-grid-layout-terminology-part2.html)
[CSS Grid布局：图解网格布局中术语三](http://www.w3cplus.com/css3/css-grid-layout-terminology-part3.html)
[CSS Grid布局指南](http://www.w3cplus.com/css3/a-complete-guide-css-grid-layout.html)

>当然，如果你深入的学习CSS Grid的相关知识，个人强列你仔细阅读完这里的所有文章。其实我个人也是CSS Grid的极度爱好者，我将在这里不断的更新和发布有关于CSS Grid的相关文章。希望这些文章对你学习和使用CSS Grid有所帮助。

#### Grid快速Game教程
便于你对于Grid的理解你可以戳此处:[Grid快速掌握](http://cssgridgarden.com/)  
强烈推荐👆此链接能更加生动直观，带动你的思考。


## CSS性能优化
### css压缩

>CSS压缩并不是什么高端的姿势，但却很有用，其原理很简单，就是把我们CSS中没用的空白符等删去，达到缩减字符个数的目的。

### 合写CSS

>我们还可以通过少写CSS属性来达到减少CSS字节的目的

```
.test{
 background-color: #000;
 background-image: url(image.jpg);
 background-position: left top;
 background-repeat: no-repeat;
}
```
>如下

```
.test{
  background: #000 url(image.jpg) top left no-repeat;
} 
```

### 利用继承

>CSS的继承机制也可以帮我们再一定程度上缩减字节数，我们知道CSS有很多属性是可以继承的即在父容器设置了默写属性，子容器会默认也使用这些属性，因此如果我们希望全文字体尺寸是14px，大可不必为每个容器设置，只需要在body上设置就可以了。应用这个技巧，把CSS属性在可能的情况下提到父容器是可以帮我们节省CSS字节的。

### 抽离、拆分CSS

>抽离CSS是指把一些通用的CSS放到一个文件内，而不是写道各个页面，这样一次下载后，其它页面用到的时候就可以利用缓存了，减少不必要的重复下载。  

>应用抽离原则，在很多时候我们把页面通用的CSS写到了一个文件，这样加载一次后就可以利用缓存，但这样做并不适合所有场景，以前我写CSS把一些前端插件用的CSS全写到了一个页面，但是有时候页面只会用一个Dialog、有的页面只用到了一个TreeView，但却把十多个插件的CSS都下载到了页面，这就是问题了，所以虽然把CSS写道一个文件可以减少http请求，但像刚才的这种情况是不应该这样做的，对一些所有页面都会用到的我们可以这样做，所以我们在抽离和拆分的时候可要想好了。

### CSS sprites

>这个其实算不上是CSS优化，应该说是web优化用到了CSS的技巧，顺便提一下，有兴趣同学可以看看[使用CSS sprites减少HTTP请求](http://www.cnblogs.com/dolphinX/p/3348460.html)。

### CSS放在head中
>减少repaint和reflow

>相信做web的同学都知道这条建议，但为什么CSS放在页面顶部有利于网页优化呢？浏览器渲染页面大概是这样的，当浏览器从上到下一边下载html生成DOM tree一边根据浏览器默认及现有CSS生成render tree来渲染页面，当遇到新的CSS的时候下载并结合现有CSS重新生成render tree，刚才的渲染工作就白费了，如果我们把所有CSS都放到页面顶部，这样就没有重新渲染的过程了。对浏览器工作原理有兴趣的同学可以看看神文[浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)，相信会对浏览器工作原理有深入的认识。

>类似的我们知道了这个也应该在脚本中注意尽量减少repaint和reflow，什么情况会导致这两种情况呢

>reflow：当DOM元素出现隐藏／显示、尺寸变化、位置变化的时候都会让浏览器重新渲染页面，之前渲染工作白费了

>repaint：当元素的背景颜色、边框颜色不引起reflow的变化是会让浏览器重新渲染该元素。貌似还可以接受，但如果我们在开始就定义好了，不让浏览器重复工作就更好了。 

### 避免适用通配符或隐式通配符

>CSS中的*代表通配符，虽然好用但使用不当这也是一个恶魔，比如

```
body * {padding:0;margin:0;} 
```

>我们以为这是对body的子结点都设置一些属性，但因为CSS继承特性的原因，页面所有元素都会接受这个规则，对于复杂的页面在性能上的影响还是很大的，这并不是说不能使用通配符，而是说使用的时候要注意范围。相信这个规则大家都知道，但是有一些隐式的通配符也需要我们的注意，比如

```
:visible{
  padding:0;
}
```

>这样的几乎就和通配符一样，在使用的时候一定要注意范围限制问题

### contain属性

>这个 contain 属性的主要目的是隔离指定内容的样式、布局和渲染。开发人员可以使用这个 contain 属性来限制指定的DOM元素和它的子元素同页面上其它内容的联系；我们可以把它看做一个iframe。跟iframe很相似，它能建立起一个边界，产生一个新的根布局；保证了它和它的子元素的DOM变化不会触发父元素重新布局、渲染等。

<p class="warning">
开发人员可以用这个 contain 属性声明一个元素和它的子元素是——尽可能的——和页面上的其它元素保持独立。
</p>

>	这个 contain 属性可以有7种不同的值:  
>	none 无  
>	layout 开启布局限制  
>	style 开启样式限制  
>	paint 开启渲染限制  
>	size 开启size限制  
>	content 开启除了size外的所有限制  
>	strict开启 layout, style 和 paint 三种限制组合   

#### 使用场景demo

##### 页面小饰件(widgets)

>通常在页面上添加第三方小饰件时，我们几乎对它们没有什么太多的控制，比如分享工具，它们可能会因为具有相当耗资源的布局、样式、渲染操作等大幅度的降低整个页面的执行效率。为了将它们同我们的网站隔离开来，使用 contain: strict; 将第三方的小饰件同页面上的其它内容隔离开来。

##### 屏幕外的内容

>如果你有一个导航栏或其它类似的东西并不在屏幕可现实范围内出现，浏览器同样会为这些不可见的元素进行渲染。通过使用 contain: paint; 浏览器就会忽略渲染这些屏幕外不可见的元素，从而能更快的渲染其它内容。

#### 计算容器尺寸

>我在文字开头提到过这个问题，使用 *contain: strict*; 可以[免去很多关于容器尺寸控制的问题](https://github.com/ResponsiveImagesCG/container-queries/issues/3#issuecomment-185951645)。比如，子元素的内容会影响容器的大小，使用 contain 属性就可以避免这样的问题产生。

#### 什么时候应该使用contain

>如果你的页面很简单，没有复杂的DOM节点和小饰件(widgets)，那就没必要考虑使用这种CSS的contain技术。而如果你开发的页面非常复杂，那么，这个CSS的contain技术可以帮助你优化页面的性能。而对于第三方的小饰件，始终使用contain: strict;是很好的习惯，它可以保护你的页面不受它们的干扰而出现性能问题。










*Editorial Staff :Dylan*