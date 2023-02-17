/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "96fd97d135828fddc98acc4ddf8e9314"
  },
  {
    "url": "assets/css/0.styles.50e28f76.css",
    "revision": "95e1226d41fde9aaf48bfcea6c926cdb"
  },
  {
    "url": "assets/img/1.01f00d60.png",
    "revision": "01f00d602ce79406283cf817b6527f55"
  },
  {
    "url": "assets/img/1.1850b43b.png",
    "revision": "1850b43bbf7525c22fc6f6898688692e"
  },
  {
    "url": "assets/img/1.32b338d3.png",
    "revision": "32b338d3ab3fabb547c0fe7f5ebccfdf"
  },
  {
    "url": "assets/img/1.6a9ea4ed.png",
    "revision": "6a9ea4ed8a9b4f1f356e55d1c5c04fba"
  },
  {
    "url": "assets/img/1.834a5d0a.png",
    "revision": "834a5d0ad7985409c2a405772b240cc6"
  },
  {
    "url": "assets/img/1.b5668535.png",
    "revision": "b56685350377cb150dfd5d84384f5dce"
  },
  {
    "url": "assets/img/2.49e95bdb.png",
    "revision": "49e95bdbfb7b55f17aa4e139ddee1366"
  },
  {
    "url": "assets/img/2.cc19778c.png",
    "revision": "cc19778c28a81270cbf996310081c8d4"
  },
  {
    "url": "assets/img/3.b0d9cd25.png",
    "revision": "b0d9cd251a453dca448e917a1c0c7a21"
  },
  {
    "url": "assets/img/5.67f5f934.png",
    "revision": "67f5f934695d919cab0e8bc81a40674b"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.c80c6f22.js",
    "revision": "bb04a9f87901722ae544ca1e640310dc"
  },
  {
    "url": "assets/js/10.6ec641ec.js",
    "revision": "c1bc4e29d8789019a96fafcd187fef13"
  },
  {
    "url": "assets/js/11.dcd6080d.js",
    "revision": "0264e1582c90b4cfc0b09103928bd8b9"
  },
  {
    "url": "assets/js/12.c23aaded.js",
    "revision": "ce31d2535f6dbd042ab0183ee2fac319"
  },
  {
    "url": "assets/js/13.10a9c95f.js",
    "revision": "88f3672d1604139ed3dbea97fdc9ca30"
  },
  {
    "url": "assets/js/14.09b2e0de.js",
    "revision": "a37b42d6f23db282e4d46b304c4cd56a"
  },
  {
    "url": "assets/js/15.b4888c60.js",
    "revision": "8d247058e76a9dba6c3b30cae3d4ec66"
  },
  {
    "url": "assets/js/16.16ae0b1a.js",
    "revision": "89a2fc65af22636af027abbfe0e62621"
  },
  {
    "url": "assets/js/17.27fd85d9.js",
    "revision": "931d132a209c0ac746bbd4929616fc16"
  },
  {
    "url": "assets/js/18.ee6ea5c4.js",
    "revision": "b79eaecd95a0c67f3e81c000415073eb"
  },
  {
    "url": "assets/js/19.1aca82c9.js",
    "revision": "598b13132e8ec31953ae61b26fe11bff"
  },
  {
    "url": "assets/js/20.a15eeaf5.js",
    "revision": "f5e39ae609cc77008d9983e8a3132367"
  },
  {
    "url": "assets/js/21.572a63e6.js",
    "revision": "5fed31b0a4531e13b4526bf7ebd0e40e"
  },
  {
    "url": "assets/js/22.cc6a79f0.js",
    "revision": "707ef3736d2b0be25237c2b02811043c"
  },
  {
    "url": "assets/js/23.76f6587c.js",
    "revision": "a1a7c57aa0c17b1fafeecbbc77f42b96"
  },
  {
    "url": "assets/js/24.06c94ec8.js",
    "revision": "6d980d035510eb4ac19ec404758b2ae0"
  },
  {
    "url": "assets/js/25.e1a424f3.js",
    "revision": "8e714ac56f23b0ea73dfe16bc497d1f8"
  },
  {
    "url": "assets/js/26.5cdd4921.js",
    "revision": "6f3553a7a9158b4d6337860650b84970"
  },
  {
    "url": "assets/js/4.7db23773.js",
    "revision": "1979d4ee62bb0300d9d089aa153ed3ff"
  },
  {
    "url": "assets/js/5.e18650bb.js",
    "revision": "ce70706ac109353f638844464479202a"
  },
  {
    "url": "assets/js/6.d70e66a7.js",
    "revision": "6c0eb5890e9abfc4ade1c327471411ee"
  },
  {
    "url": "assets/js/7.c84fbfd0.js",
    "revision": "fd04e21078275ae593c609c216b8f5b6"
  },
  {
    "url": "assets/js/8.5fa5ece3.js",
    "revision": "3e8b229f9282d1b29101c3de73d06660"
  },
  {
    "url": "assets/js/9.9097d9b8.js",
    "revision": "003f51a6e4971c00cb7f0de6d3b4e16d"
  },
  {
    "url": "assets/js/app.ccd4438d.js",
    "revision": "e65f04a2f3466f9566824b7b7ff09393"
  },
  {
    "url": "assets/js/vendors~flowchart.835cac3b.js",
    "revision": "8dbb628b0a49e064215fc82c4676ab8f"
  },
  {
    "url": "categories/css/index.html",
    "revision": "30ab5afc6eb14bcc4724ad3bf25d0be5"
  },
  {
    "url": "categories/electron/index.html",
    "revision": "94e1400269b93e3a01005d3c89b69ff3"
  },
  {
    "url": "categories/index.html",
    "revision": "69221cd48a97f31d51182bc3fbf96afc"
  },
  {
    "url": "categories/other/index.html",
    "revision": "3e85a30b0afbdfc0cf4fbb969b82f187"
  },
  {
    "url": "categories/react/index.html",
    "revision": "dfe41fb77b70cda260500c6e23f5af1a"
  },
  {
    "url": "categories/threejs/index.html",
    "revision": "a25097e82dc824576a702abead62818a"
  },
  {
    "url": "css/animate.min.css",
    "revision": "f880233b33d999973da8815110ef1a6b"
  },
  {
    "url": "css/style.css",
    "revision": "91d9962c67662778a8dc4182726f83b3"
  },
  {
    "url": "img/homeBg.png",
    "revision": "21f042e48b1b0d5615df2bbe09bf710d"
  },
  {
    "url": "img/pwLogo.gif",
    "revision": "afe3b4c7b2640733f481ce1ccede912a"
  },
  {
    "url": "img/snow.svg",
    "revision": "b2ae7b85aab0cc4ca399062fbacdd607"
  },
  {
    "url": "index.html",
    "revision": "43c579e0c07b22519a754cecc538a8fa"
  },
  {
    "url": "interview/interview-collect.html",
    "revision": "72812ba239f885213a3269e2eb267266"
  },
  {
    "url": "js/index-canvas.js",
    "revision": "d87817abf24cfd879df035bdbc5cdae7"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "56ff69b411abfc80cb68d0b1267959c5"
  },
  {
    "url": "tag/create-react-app/index.html",
    "revision": "3347505dc11c1725780573632c4fd5eb"
  },
  {
    "url": "tag/css/index.html",
    "revision": "9f50a6412c2729299791c0641568e4c7"
  },
  {
    "url": "tag/electron/index.html",
    "revision": "be773c5de6418c3dd8366a6806e9902f"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "9f37b9ce056fd37f036a022a21d172e6"
  },
  {
    "url": "tag/float/index.html",
    "revision": "d4f19590d08531294733753912287639"
  },
  {
    "url": "tag/index.html",
    "revision": "86466d57f87fea451594030bea80a23a"
  },
  {
    "url": "tag/jsx/index.html",
    "revision": "a6a1cad03ef9bcd1ee815be47649f227"
  },
  {
    "url": "tag/position/index.html",
    "revision": "92e96f4cd2fe1c34999952e1e8c7bd5b"
  },
  {
    "url": "tag/postman/index.html",
    "revision": "5ac00675f4b964557a869350e99f0cf9"
  },
  {
    "url": "tag/react/index.html",
    "revision": "915d4c2cec1ee27bdb6479c71f4e5edc"
  },
  {
    "url": "tag/ref/index.html",
    "revision": "71e8e1a0108d7950e18aea9dd60777f5"
  },
  {
    "url": "tag/state/index.html",
    "revision": "015d4d5008269f8ff140e62ec53d2c72"
  },
  {
    "url": "tag/threejs/index.html",
    "revision": "c8fb8ec03ba8d0b2481304bb748d164b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "41844fc574e58df502c576b5aa27898a"
  },
  {
    "url": "timeline/index.html",
    "revision": "33752babdbdc54f022ef7b92a8d51d21"
  },
  {
    "url": "web/css/flex.html",
    "revision": "c71976106698b1734fd68ef154c6c139"
  },
  {
    "url": "web/css/float.html",
    "revision": "77580beb3c794d7dee6de329e7f94a6a"
  },
  {
    "url": "web/css/position.html",
    "revision": "cf96920b1404c36a70dceef207c2f903"
  },
  {
    "url": "web/electron/vue-build-electron.html",
    "revision": "7179c721a91cc4f7364b0f42bd2bac1b"
  },
  {
    "url": "web/other/other-update-jj-avatar.html",
    "revision": "5cef953acc9312017cce4a90b3caece3"
  },
  {
    "url": "web/react/jsx.html",
    "revision": "56a56868ae4bdcf7948bd716fc71e71f"
  },
  {
    "url": "web/react/react-cli-s.html",
    "revision": "ee437367008b2bf16817b5abcdf07a0f"
  },
  {
    "url": "web/react/react-components.html",
    "revision": "cbdde24f6e3c46ea1f931ad6e421c3a5"
  },
  {
    "url": "web/react/react-ref.html",
    "revision": "8437e0c5a6bf04850bbb674604914530"
  },
  {
    "url": "web/react/react-state.html",
    "revision": "69fb77e31984ac372ba73291c91ebebb"
  },
  {
    "url": "web/threejs/threejs.html",
    "revision": "d0178e6dd830a57f4fad197aa440fa2b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
