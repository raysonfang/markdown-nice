export default `/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding:30px;
 * 全文字体 font-family:ptima-Regular;
 * 英文换行 word-break:break-all;
 */
.layout {
  font-family:PingFangSC-Light;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top:5px;
 * 下边距 margin-bottom:5px;
 * 行高 line-height:26px;
 * 词间距 word-spacing:3px;
 * 字间距 letter-spacing:3px;
 * 对齐 text-align:left;
 * 颜色 color:#3e3e3e;
 * 字体大小 font-size:16px;
 * 首行缩进 text-indent:2em;
 */
p {
  margin:10px 10px;
  line-height:1.75;
  letter-spacing:0.2em;
  font-size: 15px;
  word-spacing:0.1em;
}

/* 一级标题 */
h1 {
  border-bottom: 2px solid #0e88eb;
  font-size: 1.4em;
  text-align: center;
}

/* 一级标题内容 */
h1 span {
  font-size: 1.4em;
  display:inline-block;
  font-weight: bold;
  //background: #0e88eb;
  color:#ffffff;
  color: #0e88eb;
  padding:3px 10px 1px;
  border-top-right-radius:3px;
  border-top-left-radius:3px;
  margin-right:3px;
}

/* 一级标题修饰 请参考有实例的主题 */
h1:after {
}
 
/* 二级标题 */
h2 {
  text-align:left;
  margin:20px 10px 0px 0px;
}

/* 二级标题内容 */
h2 span {
  font-family:STHeitiSC-Light;
  font-size: 22px;
  color:#0e88eb;
  font-weight:bolder;
  display:inline-block;
  padding-left:10px;
  border-left:5px solid #0e88eb;
}

/* 二级标题修饰 请参考有实例的主题 */
h2:after {
}

/* 三级标题 */
h3 {
	font-size: 18px;
 	color: #0e88eb;
}

/* 三级标题内容 */
h3 span {
  font-size: 18px;
  color: #0e88eb;
}

/* 三级标题修饰 请参考有实例的主题 */
h3:after {
}

/* 列表内容 */
li {
  font-size: 15px;
}

/* 引用
 * 左边缘颜色 border-left-color:black;
 * 背景色 background:gray;
 */
blockquote {
  font-style:normal;
  border-left:none;
  padding:10px;
  position:relative;
  line-height:1.8;
  border-radius:0px 0px 10px 10px;
  color: #0e88eb;
  background:#fff;
  box-shadow:#84A1A8 0px 10px 15px;
}
blockquote:before {
  content:"★ ";
  display:inline;
  color: #0e88eb;
  font-size:4em;
  font-family:Arial,serif;
  line-height:1em;
  font-weight:700;
}

/* 引用文字 */
blockquote p {
  color: #0e88eb;
  font-size:15px;
  display:inline;
}
blockquote:after {
  content:"”";
  float:right;
  display:inline;
  color:#0e88eb;
  font-size:3em;
  line-height:1em;
  font-weight:500;
}

/* 链接 */
a {
  color: #0e88eb;
  border-bottom: 0px solid #ff3502;
  font-family:STHeitiSC-Light;
}

/* 加粗 */
strong {
  font-weight: border;
  color: #0e88eb;
}

/* 斜体 */
em {
  color: #0e88eb;
  letter-spacing:0.3em;
}

/* 加粗斜体 */
strong em {
  color: #0e88eb;
  letter-spacing:0.3em;
}

/* 删除线 */
del {
}
 
/* 分隔线
 * 粗细、样式和颜色
 * border-top:1px solid #3e3e3e;
 */
hr {
  height:1px;
  padding:0;
  border:none;
  border-top:medium solidid #333;
  text-align:center;
  background-image:linear-gradient(to right,rgba(248,57,41,0),#0e88eb,rgba(248,57,41,0));
}

/* 图片
 * 宽度 width:80%;
 * 居中 margin:0 auto;
 * 居左 margin:0 0;
 */
img {
  border-radius:0px 0px 5px 5px;
  display:block;
  margin:20px auto;
  width:85%;
  height:100%;
  object-fit:contain;
  box-shadow:#84A1A8 0px 10px 15px;
}

/* 图片描述文字 */
figcaption {
  display:block;
  font-size:12px;
  font-family:PingFangSC-Light;
}

/* 行内代码 */
p code,li code {
  color:/*自定义样式，实时生效*/



/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
table tr th,
table tr td {
  font-size: 15px;
}

/* 脚注文字 */
.footnote-word {
  color: #2d59b3;
}

/* 脚注上标 */
.footnote-ref {
  color: #6a88c5;
}

/*脚注链接样式*/
.footnote-item em {
  color: #0e88eb;
  font-size:12px;
};
}

/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
table tr th,
table tr td {
  font-size: 15px;
}

/* 脚注文字 */
.footnote-word {
  color: #0e88eb;
}

/* 脚注上标 */
.footnote-ref {
  color: #0e88eb;
}

/*脚注链接样式*/
.footnote-item em {
  color: #082a71;
  font-size:12px;
}`;
