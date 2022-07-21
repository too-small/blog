/*
 * @Author: TaiWei
 * @Date: 2022-01-06 09:34:36
 * @LastEditors: TaiWei
 * @LastEditTime: 2022-07-21 12:10:15
 */
const themeConfig = require("./config/theme/");
module.exports = {
  port: 8086,
  title: "太微の阅览室",
  description: "真正的希望必须是现实的延伸,是一步步往前走的路",
  dest: "dist",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "/css/animate.min.css",
      },
    ],
    ["link", { rel: "icon", href: "/img/pwLogo.gif" }],
    ["link", { rel: "stylesheet", href: "/css/style.css" }],

    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    [
      "meta",
      {
        name: "baidu-site-verification",
        content: "code-6aiguU6kWM",
      },
    ],
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "https://code.jquery.com/jquery-3.1.1.min.js",
      },
    ],
    // 引入鼠标点击脚本
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/js/MouseClickEffect.js",
      },
    ],
  ],
  theme: "reco",
  themeConfig,
  markdown: {
    lineNumbers: true,
    anchor: { permalinkSymbol: "" },
  },
  plugins: [
    ["@vuepress/medium-zoom"],
    ["flowchart"],
    [
      "dynamic-title",
      {
        showIcon: "/img/pwLogo.gif",
        showText: "(/≧▽≦/)！",
        hideIcon: "/img/pwLogo.gif",
        hideText: "(●—●)！！",
        recoverTime: 2000,
      },
    ],
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功!",
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
    [
      "vuepress-plugin-helper-live2d",
      {
        live2d: {
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: "haruto",
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 165, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false, // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8, // 模型透明度(default: 0.8)
          },
        },
      },
    ],
    [
      "sakura",
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: true, // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: "https://too-small.site/img/snow.svg", // 绝对路径
        },
      },
    ],
    // [
    //   "ribbon-animation",
    //   {
    //     size: 90, // 默认数据
    //     opacity: 0.3, //  透明度
    //     zIndex: -1, //  层级
    //     opt: {
    //       // 色带HSL饱和度
    //       colorSaturation: "80%",
    //       // 色带HSL亮度量
    //       colorBrightness: "60%",
    //       // 带状颜色不透明度
    //       colorAlpha: 0.65,
    //       // 在HSL颜色空间中循环显示颜色的速度有多快
    //       colorCycleSpeed: 6,
    //       // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
    //       verticalPosition: "center",
    //       // 到达屏幕另一侧的速度有多快
    //       horizontalSpeed: 200,
    //       // 在任何给定时间，屏幕上会保留多少条带
    //       ribbonCount: 2,
    //       // 添加笔划以及色带填充颜色
    //       strokeSize: 0,
    //       // 通过页面滚动上的因子垂直移动色带
    //       parallaxAmount: -0.5,
    //       // 随着时间的推移，为每个功能区添加动画效果
    //       animateSections: true,
    //     },
    //     ribbonShow: false, //  点击彩带  true显示  false为不显示
    //     ribbonAnimationShow: true, // 滑动彩带
    //   },
    // ],
    [
      "copyright",
      {
        authorName: "太微", // 选中的文字将无法被复制
        minLength: 20, // 如果长度超过  30 个字符
      },
    ],
    [
      "cursor-effects",
      {
        size: 2, // size of the particle, default: 2
        shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
    "@vuepress-reco/extract-code",
  ],
  base: "/",
};
