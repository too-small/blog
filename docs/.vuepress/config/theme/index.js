/*
 * @Author: TaiWei
 * @Date: 2021-10-08 10:50:09
 * @LastEditors: TaiWei
 * @LastEditTime: 2022-04-08 12:13:17
 */
const themeReco = require("./themeReco.js");
const sidebar = require("../sidebar/");

module.exports = Object.assign({}, themeReco, {
    nav: [
        { text: "首页", link: "/", icon: "reco-home" },
        {
            text: "文档",
            icon: "reco-api",
            items: [
                {
                    text: "vuepress官网",
                    link: "https://vuepress.vuejs.org/zh/guide/",
                    target: "_blank",
                },
                {
                    text: "vuepress-theme-reco",
                    link: "https://vuepress-theme-reco.recoluan.com/views/1.x/valine.html",
                    target: "_blank",
                },
            ],
        },
        { text: "时间线", link: "/timeline/", icon: "reco-date" },
        {
            text: "gitee",
            link: "https://gitee.com/too-small/too-small",
            target: "_blank",
        },
    ],
    sidebar,
    logo: "/img/pwLogo.gif",
    authorAvatar: "/img/pwLogo.gif",
    codeTheme: "tomorrow",
    huawei: true,
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: false, //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
});
