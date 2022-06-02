---
title: react-state(状态机)

date: 2022-03-24

tags:
    - react

    - state

categories:
    - react

meta:
    - name: keywords
      content: react-state,状态机

author: TaiWei
---

::: tip

学习的好伙伴  
[react state 官方文档地址](https://react.docschina.org/docs/state-and-lifecycle.html)  
[react state 菜鸟教程文档地址](https://www.runoob.com/react/react-state.html)

:::

::: warning

函数组件中不使用 hooks 的话无法使用 state

:::

### 一、类组件中 state

在 constructor 这个初始化周期中直接定义
state 是挂在组件实例对象上

```jsx
import React from "react";
export class Testc extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "quan" };
    }
    render() {
        return <div className="f-style">组件一</div>;
    }
}
```

:::tip
修改 state 中的值需要使用 react API 中的 setState 方法

```jsx
this.setState({ name: "quanx" });
```

:::

### 二、state 总结

1、state 存在的形式以 key-value 的形式进行存储；  
2、state 的数据不能直接修改，需要使用 setState 进行修改；  
3、组件中 render 方法中的 this 指向组件实例对象；  
4、组件中自定义方法 this 指向为 undefined 解决方案

-   a、通过 bind 直接指明 this 指向
-   b、箭头函数解决

```jsx
//1、bind改变this指向
class Testc extends React.Component {
    constructor(props) {
        super(props);
        this.thisFunc = this.thisFunc.bind(this);
    }
    thisFunc() {
        console.log(this);
    }
    render() {
        return <div className="f-style">组件一</div>;
    }
}
// 2、箭头函数
class Testc extends React.Component {
    constructor(props) {
        super(props);
    }
    thisFunc = () => {
        console.log(this);
    };
    render() {
        return <div className="f-style">组件一</div>;
    }
}
// 3、事件绑定是使用箭头函数
class Testc extends React.Component {
    constructor(props) {
        super(props);
    }
    thisFunc() {
        console.log(this);
    }
    render() {
        return (
            <div className="f-style" onClick={() => this.thisFunc()}>
                组件一
            </div>
        );
    }
}
```
