---
title: 弹性布局-flex
date: 2019-09-10
tags:
    - css
    - flex

categories:
    - css
meta:
    - name: keywords
      content: flex,弹性布局

author: TaiWei
---

### 一、弹性布局的名称概念:

1、容器:需要添加弹性布局的父元素; 项目:弹性布局容器中的每一个子元素;称为项目。 2、主轴:在弹性布局中;我们会通过属性规定水平/垂直方向(flex-direction)为主轴;与主轴垂直的另一方向;称为交叉轴。

### 二、弹性布局的重要的几大基础属性:

1、flex-direction 属性决定主轴的方向(即项目的排列方向)。  
row(默认值): 主轴为水平方向;起点在左端;  
row-reverse: 主轴在水平方向;起点在右端 ;  
column:主轴为垂直方向;起点在上沿;  
column-reverse:主轴为垂直方向;起点在下沿。

2、flex-wrap 属性定义(定义是否换行)  
nowrap(默认):不换行。当容器宽度不够时;每个项目会被挤压宽度;  
wrap: 换行;并且第一行在容器最上方;  
wrap-reverse: 换行;并且第一行在容器最下方;  
注:(flex-flow 是 flex-direction 和 flex-wrap 的缩写形式;默认值为:flex-flow: row wrap;)

3、justify-content 属性定义了项目在主轴上的对齐方式。  
flex-start(默认值): 项目位于主轴起点;  
flex-end:项目位于主轴终点;  
flex-end:项目位于主轴终点;  
row-起点在左边;row-reverse-起点在右边;  
column-起点在上边;column-reverse-起点在下边;  
center: 居中  
space-between:两端对齐;项目之间的间隔都相等。(开头和最后的项目;与父容器边缘没有间隔);  
space-around:每个项目两侧的间隔相等。但是项目之间的间隔比项目与边框的间隔大一倍。(开头和最后的项目;与父容器边缘有一定的间隔)  
space-evenly:每个项目两侧的间隔相等。所以;项目之间的间隔和项目与边框的间隔相同。

4、align-items 属性定义项目在交叉轴上如何对齐;  
flex-start:交叉轴的起点对齐;  
flex-end:交叉轴的终点对齐;  
center:交叉轴的中点对齐;  
baseline: 项目的第一行文字的基线对齐。(文字的行高、字体大小会影响每行的基线);  
stretch(默认值):如果项目未设置高度或设为 auto;将占满整个容器的高度。

5、align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线;该属性不起作用。  
(当项目换为多行时;可使用 align-content 取代 align-items)
