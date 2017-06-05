## H5相关

<p class="tip">
 	持续改动中！
</p>

![H5pic](/images/H5background.jpeg)

### H5新增基础标签
>比较：下面是传统的div+css的页面布局方式

![oldHTML](/images/oldHTML.png)
  
>下面是HTML5布局方式

![newHTML](/images/newHTML.png)  

现在来说说图片中出现的标签：   

>结构标签：(块状元素) 有意义的div  

>artical: 标记定义一篇文章  

>header: 标记定义一个页面或一个区域的头部  

>nav: 标记定义导航链接  

>section: 标记定义一个区域  

>aside: 标记定义页面内容部分的侧边栏  

>hgroup: 标记定义文件中一个区块的相关信息  

>figure: 标记定义一组媒体内容以及它们的标题  

>figcaption: 标签定义 figure 元素的标题。  

>footer: 标记定义一个页面或一个区域的底部  

>dialog: 标记定义一个对话框(会话框)类似微信  

多媒体交互标签：
```
<video> 标记定义一个视频
<audio> 标记定义音频内容
<source> 标记定义媒体资源
<canvas> 标记定义图片
<embed> 标记定义外部的可交互的内容或插件 比如flash
```

### 冷门知识（趣闻）

#### 编辑当前页面

>将以下代码放到console执行后，整个页面将变得可编辑！

```
document.body.contentEditable = 'true';
```

#### 拥有ID的元素会创建全局变量

```
<div id="sample"></div>
<script type="text/javascript">
        console.log(sample);
</script>
```


## HTML与XHTML的区别

```
HTML与XHTML之间的差别，粗略可以分为两大类比较：一个是功能上的差别，另外是书写习惯的差别。  
关于功能上的差别，主要是XHTML可兼容各大浏览器、手机以及PDA，并且浏览器也能快速正确地编译网页。
```
#### 注意点
+ ##### 所有标签都必须小写  

	```
	在XHTML中，标签都必须小写，不能大小写穿插，亦不能全部大写。
	错误：<Head></Head><Body></Body>
	正确：<head></head><body></body>
	```
+ ##### 双标签必须关闭

	```
	像是<p>...</p>、<a>...</a>、<div>...</div>标签等，必须对	应结束标签。
	错误：大家好<p>我是muki
	正确：<p>大家好</p><p>我是muki</p>
	```
+ ##### 单标签必须结束

	```
	像是<br/>、<hr/>、<img/>等，必须有结束/。
	错误：你真棒<br>
	正确：你真棒<br/>
	```
+ ##### 标签顺序必须正确

	```
	标签由外到内，一层层包覆着，所以假设你先写div后写h1，结尾就要先写h1后写div。只要记住一个原则“先进后出”，先弹出的标签要后结尾。
	错误：<div><h1>大家好</div></h1>
	正确：<div><h1>大家好</h1></div>
	```
+ ##### 所有属性都必须使用双引号

	```
	在XHTML 1.0中规定连单引号也不能使用，所以全程都得用双引号。
	错误：<div style=font-size:11px>hello</div>
	正确：<div style="font-size:11px">hello</div>
	```
+ ##### 不允许使用target="_blank"

	```
	从XHTML 1.1开始全面禁止target属性，如果想要有开新窗口的功能，就必须改写为rel="external"，并搭配JavaScript实现此效果。
	错误：<a href="http://blog.mukispace.com" target="_blank">MUKI space</a>
	正确：<a href="http://blog.mukispace.com" rel="external">MUKI space</a>
	```

#### 从各自规范说起

+ ##### html 4.01 标准

	```
	<html> 必须是root元素。   
	<head>和<body> 是 <html>中一定有且只有的元素。   
	<head> 必须有 <title>， <meta>和<style>可选, 他们只能在<head>里。   
	<body> 里只能有 block元素   
	block元素不能放在inline元素里   
	block元素不能放在<p>里   
	<ul>和<ol>中只能有<li>元素,但<li>里可以放其他，包括block元素   
	<blockquote>中只能放block元素
	```
+ ##### xhtml 1.0 标准

	```
	html元素需要有xml相关属性  
	元素名必须是小写字母  
	元素属性用"包围,不能为空值  
	在内容里不能有&, 需要转义，包括其他特殊字符<>  
	空元素以 />结尾  
	```
	
## SVG
	
## CANVAS


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
*Editorial Staff :Dylan*