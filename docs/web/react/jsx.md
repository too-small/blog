---
title: jsx语法

date: 2022-03-20

tags:
    - jsx

categories:
    - react

meta:
    - name: keywords
      content: jsx语法

author: TaiWei
---

::: tip

学习的好伙伴  
[react jsx 简介官方文档地址](https://react.docschina.org/docs/introducing-jsx.html)  
[react jsx 菜鸟教程文档地址](https://www.runoob.com/react/react-jsx.html)
:::

### 一、为什么要使用 jsx？

React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。

React 并没有采用将标记与逻辑进行分离到不同文件这种人为地分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现关注点分离。

React 不强制要求使用 JSX，但是大多数人发现，在 JavaScript 代码中将 JSX 和 UI 放在一起时，会在视觉上有辅助作用。它还可以使 React 显示更多有用的错误和警告消息。

### 二、例子

```jsx
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}
```

```jsx
export class Exception extends React.Component {
    render() {
        return (
            <div style={{ marginTop: "40px" }} className="f-style">
                <MyButton></MyButton>
            </div>
        );
    }
}
```

### 三、jsx 语法规则总结及注意

::: tip

1、定义虚拟 dom 时，不用引号；  
2、标签中混入 js 表达式时需用{}包括；  
3、样式类名使用 className；  
4、内联样式要用 style：{{}}包裹 key:value 的形式书写，且 key 为小驼峰写法；  
5、只有一个根标签；  
6、标签必须闭合；  
7、标签首字母：

-   a、若小写字母开头，则将标签转为 html 中同名元素若 html 中无该标签对应的同名元素，则报错；
-   b、若大写字母开头，react 就去渲染对应的组件，若组件没有定义则报错。

:::
