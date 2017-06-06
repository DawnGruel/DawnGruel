# 搭建本地的Es6开发环境

>今天我们就来学习ES6构建方面的知识，并搭建一个简单的学习环境。<br/><br/>

>首先需要介绍一个ES6开发利器：Babel。<br/><br/>

>Babel是一个编译器，负责将源代码转换成指定的语法的目标代码，可以使之很好的在运行环境中执行我们的代码。下面我们就来详细介绍这个神器，利用它来编译我们的ES6代码。 <br/><br/>
>
>Babel给我们提供了一个很方便的命令行工具：babel-cli，利用它我们可以在命令行中执行编译命令，我们只需使用npm来安装它即可：

```
npm install -g babel-cli
```
>除此之外，我们还需要安装转码规则包，Babel支持很多语法的转码，比如我们想要将ES6转换成ES5，那么需要安装babel-preset-es2015包，如果我们想要编译React源码，就需要安装babel-preset-react，这里我们需要安装babel-preset-es2015。为此我们创建一个babel-test目录，在这个目录里我们创建两个目录，es6和js，分别用于放置ES6源代码和编译后的ES5目标代码。<br/><br/>

>然后我们在跟目录下使用命令

```
“npm init –yes”
```
>生成一个默认的package.json文件，babel-test目录结构如下图所示：

![Es6img1](/images/Es6img1.png)

>然后在当前目录执行下面这行命令安装ES6转码规则包：

```
npm install babel-preset-es2015 --save-dev
```

>在es6目录中我们创建了一个test.es6文件用于写入ES6源代码，Babel编译源文件时没有过多的限制，所以我们也可以选择使用js或es作为文件后缀名。现在我们将下面这段ES6代码写入到test.es6中：

```
let name = 'Scott';
let greeting = `hello ${name}`;
console.log(greeting);
```

>接下来我们就可以来运行babel的命令编译我们的ES6源代码了：

```
babel es6/test.es6 --out-file js/test.js --presets es2015
```

>这行命令的作用是对整个es6目录中的文件进行编译，编译结果输出到js目录，如下图所示： 

![Es6img2](/images/Es6img2.png)

>到目前为止，我们仍手动执行babel命令编译源代码，并且我们使用了全局的babel-cli库，这显然不是最好的解决方案。如果我们checkout出一个项目，必须要先在全局安装babel-cli库才能运行，我们不希望有这样的依赖。另外不同的项目依赖库的版本可能都不同，全局的babel-cli库也不能保证兼容各个项目中其他依赖库的版本。除此之外，每次手动运行编译命令也太繁琐了，我们希望将babel-cli库安装到本地，并且使用一个简单的命令执行编译任务。 <br/><br/>

>首先我们需要在本地安装babel-cli库：

```
npm install babel-cli --save-dev
```

>现在我们可以卸载全局的babel-cli库了：

```
npm uninstall -g babel-cli
```

>最后，我们需要在package.json里面修改一下scripts：

```
"scripts": {
    "compile": "babel es6 --out-dir js --presets es2015"
}
```
>修改完成之后，我们就可以使用npm来运行这个编译任务了，只需下面一条简单的指令即可：

```
npm run compile
```