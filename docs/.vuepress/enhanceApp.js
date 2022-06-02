/*
 * @Author: TaiWei
 * @Date: 2022-01-06 09:34:36
 * @LastEditors: TaiWei
 * @LastEditTime: 2022-04-02 09:24:54
 */
import Home from "./components/home";
import Threejs from "./components/Threejs";
// import initParticles from "./public/js/InitParticles";
export default async ({ Vue, router, isServer }) => {
    console.log(15, router);
    Vue.component("Home", Home);
    if (!isServer) {
        await import("./public/js/index-canvas.js").then((module) => {
            Vue.prototype.initThree = module.default;
            Vue.component("Threejs", Threejs);
        });
    }
};
