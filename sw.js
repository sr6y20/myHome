if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const a=s=>i(s,r),c={module:{uri:r},exports:o,require:a};e[r]=Promise.all(l.map((s=>c[s]||a(s)))).then((s=>(n(...s),o)))}}define(["./workbox-c2058018"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Blog-976622bb.css",revision:null},{url:"assets/Blog-c9955b67.js",revision:null},{url:"assets/debounce-cbed7cac.js",revision:null},{url:"assets/el-popper-2a497d77.js",revision:null},{url:"assets/el-popper-b17b6765.css",revision:null},{url:"assets/Hello-438c0b2b.css",revision:null},{url:"assets/Hello-83c7569d.js",revision:null},{url:"assets/Hot-5c0ad5bf.css",revision:null},{url:"assets/Hot-a6d8e2bb.js",revision:null},{url:"assets/Icon-423aef1a.js",revision:null},{url:"assets/index-735b3637.js",revision:null},{url:"assets/index-7cd1cfd7.js",revision:null},{url:"assets/index-ada1e94a.css",revision:null},{url:"assets/Main-bbc25428.css",revision:null},{url:"assets/Main-f8d31b4c.js",revision:null},{url:"assets/Nav-93596e0d.css",revision:null},{url:"assets/Nav-d92a0d7d.js",revision:null},{url:"assets/Star-32140501.js",revision:null},{url:"assets/Star-c7ffac28.css",revision:null},{url:"index.html",revision:"592f86da927dc049391008d08cb30557"},{url:"loading/loading.css",revision:"d9ba415e6bcb278f020078ba68f8e252"},{url:"loading/loading.min.css",revision:"30b761e150750cb27a158a6d18e7b160"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/home.png",revision:"e25f08a12e2d41db4e7099861ab8fe3d"},{url:"manifest.webmanifest",revision:"cbcca331905eac613f01d0a46d1135ea"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new s.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new s.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
