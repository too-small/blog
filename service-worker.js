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
    "revision": "7273aaa3b06c6947e39d07fa990a4885"
  },
  {
    "url": "assets/css/0.styles.9a540cd1.css",
    "revision": "668aac7ab51fca639812bcf5f8f29ded"
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
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.290a01bc.js",
    "revision": "7957cfbd03d0eed46b9a4f437a32e00b"
  },
  {
    "url": "assets/js/10.ce6b2d22.js",
    "revision": "dec2a1c5af3a44c51b1ed588b0a1bea1"
  },
  {
    "url": "assets/js/11.8a1104c0.js",
    "revision": "ba687228cd2b1de5466a82210a501cb3"
  },
  {
    "url": "assets/js/12.54a57be3.js",
    "revision": "8e4b27ab3622a949901cd43f476cbd88"
  },
  {
    "url": "assets/js/13.c49e326f.js",
    "revision": "d8172b152b02f768cfed6ed7266f7875"
  },
  {
    "url": "assets/js/14.96a847a1.js",
    "revision": "86aca7673fd70702c85212a4b8fe0926"
  },
  {
    "url": "assets/js/15.d9c77d06.js",
    "revision": "13c11227d0382227d5f52a903ed25d67"
  },
  {
    "url": "assets/js/16.90d7c9f2.js",
    "revision": "b2af6f8b40fd2b3fc5179eb7c3997591"
  },
  {
    "url": "assets/js/17.90d5c630.js",
    "revision": "6ebecb3c14e58ede4e0cf6a12a5ba486"
  },
  {
    "url": "assets/js/18.33e36976.js",
    "revision": "13de04a9c9045fc47c97846ec8a26515"
  },
  {
    "url": "assets/js/19.6a975eef.js",
    "revision": "519d92448d06695300ecba00cc696af1"
  },
  {
    "url": "assets/js/20.0d4ee59e.js",
    "revision": "5822cc0036e2800a1640f3e74074a858"
  },
  {
    "url": "assets/js/21.9cada664.js",
    "revision": "f784e472c047a305fc5824426c4156dd"
  },
  {
    "url": "assets/js/22.6e2d7b9d.js",
    "revision": "5d68cfc482dd71f11be19c10165a52bd"
  },
  {
    "url": "assets/js/23.b809f2cd.js",
    "revision": "cb1477c3b7d5c0c4f350c04f386779c9"
  },
  {
    "url": "assets/js/24.7b507cea.js",
    "revision": "3149c646300ee9d296fe34afa89c0ae2"
  },
  {
    "url": "assets/js/4.b49c3359.js",
    "revision": "c12f86918af6d7fe858f75dac0bc8a9e"
  },
  {
    "url": "assets/js/5.818293bb.js",
    "revision": "41ec0caa97c34a55ce3ecb701e5ea212"
  },
  {
    "url": "assets/js/6.0ec2b2a9.js",
    "revision": "3b3e2df673cde52c42a680fb9df64fed"
  },
  {
    "url": "assets/js/7.2b79ecc7.js",
    "revision": "6576659aac5b76217d7f76b90745582f"
  },
  {
    "url": "assets/js/8.92a25fdc.js",
    "revision": "a4f8a0dd2105c6a0a8487e8c2e437ced"
  },
  {
    "url": "assets/js/9.cdff0f55.js",
    "revision": "2f5dacfe3a03ecd7cd3f3ce0660c405f"
  },
  {
    "url": "assets/js/app.c83e126d.js",
    "revision": "1889f81e36df216ae48726f98a2ed9da"
  },
  {
    "url": "assets/js/vendors~flowchart.73ea1521.js",
    "revision": "3cdbf26e4c71a4d99b01cc0cf354f38f"
  },
  {
    "url": "categories/css/index.html",
    "revision": "124ff72a604253e7a43cfada080cceab"
  },
  {
    "url": "categories/index.html",
    "revision": "660622e8fd6fd3aca2cca6c83e57a985"
  },
  {
    "url": "categories/interview/index.html",
    "revision": "599cf9685556c389816fd3a0814a3d4c"
  },
  {
    "url": "categories/react/index.html",
    "revision": "dbb7a85809007f621a3828bcff213b6e"
  },
  {
    "url": "categories/threejs/index.html",
    "revision": "f4dae09f97007f187241cb3f5339ef31"
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
    "revision": "a7c5e60c982b46e976ce810a547f0eb9"
  },
  {
    "url": "interview/interview-collect.html",
    "revision": "ee809e5b6a4d7d809c5b104fb729de62"
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
    "revision": "88a757c8fc7acdac9a6fb55f9f92ee91"
  },
  {
    "url": "tag/css/index.html",
    "revision": "6c21b9761188872663112975a47d4888"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "60751c39f8441a9720d7afbd3c0b6cec"
  },
  {
    "url": "tag/float/index.html",
    "revision": "33771b48b82391caca7936f5da069671"
  },
  {
    "url": "tag/index.html",
    "revision": "47c24a4cf01ca67e021e2925ca472d34"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "47085b350f04b748accf08f81a3ae03e"
  },
  {
    "url": "tag/jsx/index.html",
    "revision": "2b0928833e7dc5d91f371277a601fe98"
  },
  {
    "url": "tag/position/index.html",
    "revision": "d703bf5dbf463c667cf8fc3c3b50954b"
  },
  {
    "url": "tag/react/index.html",
    "revision": "4907f8662d85eb02d6ac5453007f2b14"
  },
  {
    "url": "tag/ref/index.html",
    "revision": "b8d1d3a4eda701f81af2c85f4a70c771"
  },
  {
    "url": "tag/state/index.html",
    "revision": "ad23f7d68247e64c613e1cdfe657d2d1"
  },
  {
    "url": "tag/threejs/index.html",
    "revision": "3b35de00cc36f3f7c3c348db3931768c"
  },
  {
    "url": "timeline/index.html",
    "revision": "bde2a1b85ba29aa650be075861583b13"
  },
  {
    "url": "web/css/flex.html",
    "revision": "da1bae6071f2584efe3acc4a18a6ec24"
  },
  {
    "url": "web/css/float.html",
    "revision": "d146b7a5a367c21cece21e2c2b75cdb4"
  },
  {
    "url": "web/css/position.html",
    "revision": "dc966778a13570b46ae5bf2feb3b29f6"
  },
  {
    "url": "web/react/jsx.html",
    "revision": "ba0e4552198cf3d3d90e51fd45455cbb"
  },
  {
    "url": "web/react/react-cli-s.html",
    "revision": "a815b90fec9ceb79765cb01dc6c2a14c"
  },
  {
    "url": "web/react/react-components.html",
    "revision": "000c33ec4144c375d1d5793d60df5142"
  },
  {
    "url": "web/react/react-ref.html",
    "revision": "eb74405c43327f278ece05ba69545e03"
  },
  {
    "url": "web/react/react-state.html",
    "revision": "36c6448945292e9ad3fa25845928682c"
  },
  {
    "url": "web/threejs/threejs.html",
    "revision": "f95a6f3001a34d52e6aec341b3bbe445"
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
