/*
 * @Author: TaiWei
 * @Date: 2022-01-25 17:34:54
 * @LastEditors: TaiWei
 * @LastEditTime: 2022-04-08 11:52:12
 */
module.exports = {
    type: "blog",
    // 博客设置
    blogConfig: {
        category: {
            location: 2, // 在导航栏菜单中所占的位置，默认2
            text: "分类", // 默认 “分类”
        },
        tag: {
            location: 3, // 在导航栏菜单中所占的位置，默认3
            text: "标签", // 默认 “标签”
        },
    },
    // 最后更新时间
    lastUpdated: "Last Updated", // string | boolean
    // 作者
    author: "too-small",
    // 备案号
    // record: "蜀ICP备2021020861号",
    // 项目开始时间
    startYear: "2019",
    // vssueConfig: {
    //     platform: "gitee",
    //     owner: "too-small",
    //     repo: "myblog",
    //     clientId:
    //         "24613f875941f9fb5482b5050ed18a9863635ba270bc079f0e04df90dd96d736",
    //     clientSecret:
    //         "0e49b1db1302a58d3ab728a32cf549c34af828babfb4361438bf964014b3a067",
    // },
};
