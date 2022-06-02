/*
 * @Author: TaiWei
 * @Date: 2022-01-10 09:27:46
 * @LastEditors: TaiWei
 * @LastEditTime: 2022-03-31 16:37:35
 */
module.exports = Object.assign({
    "/web/": [
        {
            title: "修仙的小码农",
            collapsable: false,
        },
        {
            title: "自我提升序章",
            collapsable: false,
            sidebarDepth: 1,
            children: [],
        },
        {
            title: "react篇",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "react/jsx.md",
                "react/react-components.md",
                "react/react-state.md",
                "react/react-cli-s.md",
                "react/react-ref",
            ],
        },
        {
            title: "threejs篇",
            collapsable: false,
            sidebarDepth: 1,
            children: ["threejs/threejs.md"],
        },
        {
            title: "css篇",
            collapsable: false,
            sidebarDepth: 1,
            children: ["css/flex.md", "css/float.md", "css/position.md"],
        },
    ],
    "/interview/": [
        {
            title: "修仙的小码农",
            collapsable: false,
        },
        {
            title: "投其所好序章",
            collapsable: false,
            sidebarDepth: 1,
            children: [],
        },
        {
            title: "前端知识点汇总",
            collapsable: false,
            sidebarDepth: 0,
            children: ["interview-collect.md"],
        },
    ],
});
