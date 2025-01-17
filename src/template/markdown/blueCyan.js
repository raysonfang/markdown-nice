export default `/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
 .layout {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
p {
  text-align: justify;
}

/* 一级标题 */
h1 {
  font-size: 1.8em;
  color: #009688;
 	margin: 1.2em auto;
  text-align: center;
  border-bottom: 1px solid #009688;
}

/* 一级标题内容 */
h1 span {
}

/* 一级标题修饰 请参考有实例的主题 */
h1:after {
}

/* 二级标题 */
h2 {
  color: #009688;
  padding-left: 10px;
  margin: 1em auto;
  border-left: 3px solid #009688;
}

/* 二级标题内容 */
h2 span {
}

/* 二级标题修饰 请参考有实例的主题 */
h2:after {
}

/* 三级标题 */
h3 {
  margin: 0.6em auto;
  padding-left: 10px;
  border-left: 2px solid #009688;
}

/* 三级标题内容 */
h3 span {
}

/* 三级标题修饰 请参考有实例的主题 */
h3:after {
}

/* 四级标题 */
h4 {
  margin: 0.6em auto;
  font-size: 1.2em;
  padding-left: 10px;
  border-left: 2px dashed #009688;
}

/* 五级标题 */
h5 {
  margin: 0.6em auto;
  font-size: 1.1em;
  padding-left: 10px;
  border-left: 1px dashed #009688;
}

/* 六级标题 */
h6 {
  margin: 0.6em auto;
  font-size: 1em;
  padding-left: 10px;
  border-left: 1px dotted #009688;
}

/* 列表内容 */
li {
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
blockquote {
    border-left: 2px solid #888;
  	border-right: 2px solid #888;
    padding-left: 1em;
    color: #777;
}

/* 引用文字 */
blockquote p {
}

/* 链接 */
a {
  color: #009688;
  border-bottom: 1px solid #009688;
}

/* 加粗 */
strong {
}

/* 斜体 */
em {
}

/* 加粗斜体 */
strong em {
}

/* 删除线 */
del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
hr {
  margin: 20px 0;
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
img {
}

/* 图片描述文字 */
figcaption {
}

/* 行内代码 */
p code, li code {
  color: #009688;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
table tr th {
    border: 1px solid #009688;
    background-color: #009688;
    color: #f8f8f8;
    border-bottom: 0;
}
table tr td {
  	border: 1px solid #009688;
}
table tr:nth-child(2n){
    background-color: #f8f8f8;
}

/* 脚注文字 */
.footnote-word {
  color: #009688;
}

/* 脚注上标 */
.footnote-ref {
  color: #009688;
}

/* "参考资料"四个字 */
.footnotes-sep {
}

/* 参考资料编号 */
.footnote-num {
}

/* 参考资料文字 */
.footnote-item p { 
}

/* 参考资料解释 */
.footnote-item p em {
}`;
