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
    "revision": "a84d08471921290a97218319da31fda3"
  },
  {
    "url": "assets/css/0.styles.76257f8b.css",
    "revision": "05a1def036d1f574e3940dc15f4da72e"
  },
  {
    "url": "assets/img/1.01f00d60.png",
    "revision": "01f00d602ce79406283cf817b6527f55"
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
    "url": "assets/img/1.b5668535.png",
    "revision": "b56685350377cb150dfd5d84384f5dce"
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
    "url": "assets/js/1.248264f2.js",
    "revision": "1b6ecbf9f4d13625874011d11a246ae1"
  },
  {
    "url": "assets/js/10.7819807a.js",
    "revision": "abbcc72dbb776d1e196c8e60931a25be"
  },
  {
    "url": "assets/js/11.b4ec7e5d.js",
    "revision": "b5bfd795dbcf82a0c413d42e2cf4a8e4"
  },
  {
    "url": "assets/js/12.a7360465.js",
    "revision": "63a0fa48f027de7c6cc8265b3dc075c2"
  },
  {
    "url": "assets/js/13.ef48e7a5.js",
    "revision": "4932bbf6bee30933f6dfa5265dd8c14a"
  },
  {
    "url": "assets/js/14.87c4daf2.js",
    "revision": "1267753590db98bbe929e051cd5f8dc6"
  },
  {
    "url": "assets/js/15.bc6237ab.js",
    "revision": "dd6f17c809e2ca7023911d910e6f2400"
  },
  {
    "url": "assets/js/16.b83e0cac.js",
    "revision": "b21b96ebea310e22080d344428b293d2"
  },
  {
    "url": "assets/js/17.fb48de18.js",
    "revision": "f21d0272e1c34c4c888f45a80b98f8f2"
  },
  {
    "url": "assets/js/18.6fbdf732.js",
    "revision": "b4c1ab5e0e0eea5f8b55ba3d667f8bcd"
  },
  {
    "url": "assets/js/19.f4ae0065.js",
    "revision": "dbdbfef8d1a0b17a694f102a56a3f7c2"
  },
  {
    "url": "assets/js/20.70aac4d2.js",
    "revision": "9fc35559c0dd43f53d8ffb97af7989c2"
  },
  {
    "url": "assets/js/21.2b3cb02a.js",
    "revision": "d5170bc77af740121349dcdafab457da"
  },
  {
    "url": "assets/js/22.760262a4.js",
    "revision": "705d6046caaab7791dc84a167d94784c"
  },
  {
    "url": "assets/js/23.d92c7896.js",
    "revision": "df005c706022e714e83e417220534235"
  },
  {
    "url": "assets/js/24.3c0d7b5b.js",
    "revision": "a7d3609af08397929e8085760be2f636"
  },
  {
    "url": "assets/js/4.be42d5c6.js",
    "revision": "d6bc07573e001df1483335a1e6560f28"
  },
  {
    "url": "assets/js/5.31680bb7.js",
    "revision": "819b138c31c56bc3c192e53de3927772"
  },
  {
    "url": "assets/js/6.832e924c.js",
    "revision": "c53ff50cdac722a1896e90baa63abf8d"
  },
  {
    "url": "assets/js/7.e78ab480.js",
    "revision": "5f3c18f0d4b3c53769cd17c4ac95c08e"
  },
  {
    "url": "assets/js/8.8d973067.js",
    "revision": "9d6b224e4946192ffee2d7df15e0606d"
  },
  {
    "url": "assets/js/9.23fbe357.js",
    "revision": "8822d422d29021ec2178a18ec68488cb"
  },
  {
    "url": "assets/js/app.88d24093.js",
    "revision": "cce22d25f21e315ca622ff8d7a4f634a"
  },
  {
    "url": "assets/js/vendors~flowchart.e17ee4af.js",
    "revision": "ec9382ff4a9b8f83b5666b40ab94f410"
  },
  {
    "url": "categories/css/index.html",
    "revision": "533ec02f3597f7282ff6ace3d1478ff3"
  },
  {
    "url": "categories/index.html",
    "revision": "73b0bc36d30ca89d7015008f73cdac68"
  },
  {
    "url": "categories/interview/index.html",
    "revision": "b7b78f92adcae5bbd0c8fe7b351743bb"
  },
  {
    "url": "categories/react/index.html",
    "revision": "f5e11b1120d6e00a5e4b6a4047261a5e"
  },
  {
    "url": "categories/threejs/index.html",
    "revision": "f0f821117fef14e2125382cc4efbaf3d"
  },
  {
    "url": "css/animate.min.css",
    "revision": "f880233b33d999973da8815110ef1a6b"
  },
  {
    "url": "css/style.css",
    "revision": "46a871030f2dcdd0a638624e444d7063"
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
    "revision": "60557809de38e98f2243f7d333d1e289"
  },
  {
    "url": "interview/interview-collect.html",
    "revision": "d57be531743cb36ef173487df5ff476c"
  },
  {
    "url": "js/index-canvas.js",
    "revision": "d87817abf24cfd879df035bdbc5cdae7"
  },
  {
    "url": "js/InitParticles.js",
    "revision": "ff4ce26fb7a2a34105b242c4ca3658c8"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "e2b5da350ff562936608b29ef9b63e18"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "56ff69b411abfc80cb68d0b1267959c5"
  },
  {
    "url": "tag/create-react-app/index.html",
    "revision": "6aa335f2c041e246e68f9d04ffe7295a"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c6e394e6d5df0840db504a8f8b6e7b92"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "6ad294f978151b3542928d4b7831dd57"
  },
  {
    "url": "tag/float/index.html",
    "revision": "a60acfb95527411ad48ac5ce0d04a741"
  },
  {
    "url": "tag/index.html",
    "revision": "9a20643e9bb4b5c52a1510a380b029b7"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "c4ef5f22927cd580bb52685fd23adb14"
  },
  {
    "url": "tag/jsx/index.html",
    "revision": "302593a08b74881dd44c200ae0e092ab"
  },
  {
    "url": "tag/position/index.html",
    "revision": "d534856b7b0ec7aa04c42d6e9e4fec4e"
  },
  {
    "url": "tag/react/index.html",
    "revision": "2df9fda59a731385226312607b8b81f5"
  },
  {
    "url": "tag/ref/index.html",
    "revision": "9d1e4a32dcc50ebfc67c74d14d0ba83f"
  },
  {
    "url": "tag/state/index.html",
    "revision": "092a78d1a08dcd667b540352bf9ba680"
  },
  {
    "url": "tag/threejs/index.html",
    "revision": "194bf36e9aa3ba47096e691a2fc8c00d"
  },
  {
    "url": "timeline/index.html",
    "revision": "893f45c7326afbadcfc5028ddd0c1f22"
  },
  {
    "url": "web/css/flex.html",
    "revision": "70f8e63738d4d05586319f2e6d94e7fe"
  },
  {
    "url": "web/css/float.html",
    "revision": "bf711344e84913286fb5f8c69f0a30cd"
  },
  {
    "url": "web/css/position.html",
    "revision": "da01969c4dd54b46bf249881e699ced3"
  },
  {
    "url": "web/react/jsx.html",
    "revision": "116386ba67501e18e25a70466b6fcdb5"
  },
  {
    "url": "web/react/react-cli-s.html",
    "revision": "0944e0bfb7172d9ab59431703a8543b8"
  },
  {
    "url": "web/react/react-components.html",
    "revision": "0ff3b90a0587db99ce473b86713cc342"
  },
  {
    "url": "web/react/react-ref.html",
    "revision": "098a8f7ed5fc631e81bce87c8c36f1fe"
  },
  {
    "url": "web/react/react-state.html",
    "revision": "9ab98166f89c5439520fa60cf6d91e21"
  },
  {
    "url": "web/threejs/threejs.html",
    "revision": "9ea1e05ffb8f513e3d9713a4a14676dc"
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
