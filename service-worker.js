"use strict";var precacheConfig=[["/monumen/index.html","3b4501d335e35e158bfe562d063b1b9e"],["/monumen/static/css/main.1a2cb54a.css","b64728f18b022b39d8faf57ea427d710"],["/monumen/static/js/0.6e6c2f7d.chunk.js","3d91b01ac569d7548c5232c2e4bea0e2"],["/monumen/static/js/main.9e694a61.js","a2eaa9d0b24127e4eb5436926e943b46"],["/monumen/static/media/Convo.5cf0a532.png","5cf0a5324cede5d4b2ab2859cdecd5b1"],["/monumen/static/media/Info.4b9f8fd1.png","4b9f8fd1983d3ae5c1a2acdaf02614a7"],["/monumen/static/media/Welcome.bccce6b8.png","bccce6b864005ba94281fd3b07c96fba"],["/monumen/static/media/app-store-badge.189e324b.svg","189e324b1b4deb792b85b6df6ee6c8a4"],["/monumen/static/media/firstWelcome.07f7c5e2.png","07f7c5e230e936587aca578094368f02"],["/monumen/static/media/helpWith.995419a4.png","995419a4c59a7de7eb6974c4953eb992"],["/monumen/static/media/iPhoneX.b063ec2c.png","b063ec2cc15276af7365c0ab4756c191"],["/monumen/static/media/karluvMost.227f6feb.png","227f6feb4b9e43caf19965a6af7e0187"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=n),e.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,t,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),e.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return t.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],e=e[1],n=new URL(n,self.location),e=createCacheKey(n,hashParamName,e,/\.\w{8}\./);return[n.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){var t,e,a;"GET"===n.request.method&&(t=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t)),a="/monumen/index.html",!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(t=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)})))});