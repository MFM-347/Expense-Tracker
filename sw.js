if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let f={};const c=e=>s(e,o),l={module:{uri:o},exports:f,require:c};i[o]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),f)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"17aa957b1b944a5748678222e0211dc7"},{url:"assets/index-2m9i7cvh.js",revision:null},{url:"assets/index-Dm2PBChp.css",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"favicon.ico",revision:"d25ec0f2082c35152424c74d7898c5d7"},{url:"icon.svg",revision:"35cb507b5a7ffefc2af05dedbbb9fa04"},{url:"index.html",revision:"f0afc2eb305fa6a25ae5fdf1646eeaff"},{url:"maskable-icon-512x512.png",revision:"6bd4628dbdb48506aab9bf40f54efa7c"},{url:"pwa-192x192.png",revision:"c65ea78c31eb76f0e46a9c7520fba6ae"},{url:"pwa-512x512.png",revision:"901ee716f5e29eb9869b9fcbc61929b2"},{url:"pwa-64x64.png",revision:"f09fdfcf2fad1c16585d4762ec14fc25"},{url:"screenshot.webp",revision:"7fee8a8e1e213c3848f33833a78d89b4"},{url:"manifest.webmanifest",revision:"0ec5366914212a42068b45d81cd7d7c4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
