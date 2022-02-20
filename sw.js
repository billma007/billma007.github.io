/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/07/10/myfirstblog/index.html","bbe4978e4e8e22007d01ccfb5ae4b217"],["/2021/07/21/stl_use/index.html","8885598cedb949ffaab9b6b24b60c0cd"],["/2021/08/01/cpp-string/index.html","440553b5326b5b78b2800d8ce7f96d54"],["/2021/08/04/cpp-fstream/index.html","23808af3330c1340e79c76052cb55e77"],["/2021/08/12/a-b-problem/index.html","e038622b5a051d37f81965a652f55351"],["/2021/08/15/github-tokenerror/index.html","031e0e426ae55b32e631a4f1107d59da"],["/2021/08/19/c-global-variables-in-multiple-files/index.html","f6a905ad60c3f4486ab49af72312ea3d"],["/2021/08/26/cpp-begin-1/index.html","f7a8b10cc05dbe02ef6ae140586a2689"],["/2021/08/26/cpp-constructor-exception/index.html","8ed36a7f7b049157f0799007d179e6c2"],["/2021/08/26/lcs-suffix-array/index.html","ab7f0d2cc488c525d71ce6f933c895dc"],["/2021/08/26/python-matplotlib/index.html","531bd674eb9c5389676fbb07092ce1c9"],["/2021/08/29/cpp-if-else-question-1/index.html","14837685f1c3126855c4a18a8a15fd50"],["/2021/08/29/github-speed-up-download/index.html","82a77c376f6eaf03bcb9669260cea490"],["/2021/09/04/vpn-how-to-open/index.html","c2bdcb5dba50174a457efef5456f7c3e"],["/2021/09/12/2109poemsay/index.html","289591610974519eb5fe9551842bc868"],["/2021/10/01/21sportsmeet/index.html","691617f59878af4f7c870eb4e5c28106"],["/2021/10/05/cppluogu-p5380/index.html","3610f2b6f643f8dd5d6dcb6d34932509"],["/2021/10/09/wenyan-compile/index.html","963b68a6457e1e551d1ed7bb56582b5e"],["/2021/10/30/zz_confuzi/index.html","a0e5e5d031ff8319def3f7f9f7787a88"],["/2021/11/12/file-exe/index.html","07bb691eccaf3b98160c66d7d6619687"],["/2021/12/04/1202ccf/index.html","0bf72458d38d35f91509d1991bbc4e44"],["/2021/12/19/xinxitest-gl/index.html","dded9c1614cc1b2fb869ff400e2248b1"],["/2022/02/06/COVID-19-zbzydjq/index.html","118966a11c27113940c27407a3e1b841"],["/404.html","8ec1b2b2546b66b6fd180cd89391e715"],["/about/index.html","7dc15edd20e196ee76cd596c099dbd9a"],["/about/station.html","cc44d966fc3ba1e3b918f15329f7bca2"],["/archives/2021/07/index.html","aa54cd3676878a60919324e07479fd36"],["/archives/2021/08/index.html","5f228cedd545cf1571735641e53e0872"],["/archives/2021/08/page/2/index.html","76c97f0cc1586ccc9119e925e734724c"],["/archives/2021/09/index.html","4077fb68b4a8acfce989c30f897eea75"],["/archives/2021/10/index.html","59db39747d9882ac7f4a5da451502a0a"],["/archives/2021/11/index.html","b3d14206ef2219fe97787944b2b14420"],["/archives/2021/12/index.html","11970f484ee937b7350d8cd3027f3a2a"],["/archives/2021/index.html","3d5697dc84ea83f234b935bf2263554c"],["/archives/2021/page/2/index.html","b58bf236a42c5ff3705d35cbd13a584b"],["/archives/2021/page/3/index.html","5dc8878a6ccae641d11e202666d25046"],["/archives/2022/02/index.html","f8043e8071ee7820824d3293daa4c0c9"],["/archives/2022/index.html","998bf43dcb4a2d8704bfa83feea6727c"],["/archives/index.html","eda6a7d7f40611115d14916753abf0f3"],["/archives/page/2/index.html","a15409fae2de6a874176ec1d8f8885be"],["/archives/page/3/index.html","73c0a3a6df7d60f1f3e67b0775b0fd5a"],["/baidu_verify_code-ymIFKBAamH.html","aab439825f35422edeb0cee19c47bc8c"],["/calall-light/index.html","3102e263420415120cb3d3aad1ca7835"],["/calall/1_0_db2.html","2b4a63aada1e3380a7603b20261d1b8e"],["/calall/1_0_db3.html","2d31f363a1de5acd45e2efe8a1707dd2"],["/calall/index.html","450aa2e94cbbcbfcb497e52162d85a32"],["/categories/index.html","1e125eaf6e9389a90bc8ed3dade21f9b"],["/categories/南航苏州附中校园活动/index.html","a5d24cd6665a104deaf9aa1e40104fbc"],["/categories/日常经验/index.html","0a42770113f6b676ad2c7169190b6f82"],["/categories/竞赛解法/index.html","8c7b73d0408a4dcb965cc43d3aeb7ce8"],["/categories/精华转载/index.html","bd9025efb4b6830560dacb36aa3ca497"],["/categories/编程算法/index.html","f2775ae61f4aa702dd199291436b25ee"],["/css/Readme.html","67a0194faa4ec902e15d51fea75556bd"],["/css/first.css","2216ad509fce056f741b5b66ca14dfb4"],["/css/message.css","ca2f839e9a41207ce4d486b75b0dc926"],["/css/style.css","b6d47f6f70d479f24555fabea6e6bd17"],["/faq/index.html","ebd69db4fe0300864ef33ab83968b8cb"],["/game/index.html","566f1c66119fc5ac01f61a25e436b73a"],["/how-to-ask-q/ft.html","b3f668359aea61d0a73f598eeb91aba9"],["/how-to-ask-q/index.html","60e72b29d0f0df2dee2dfe68d479f2bc"],["/index.html","1dd21cd780490e9a933b92c0598329d8"],["/js/aplayer.js","40a083642ab212371216044672d6f0d4"],["/js/app.js","5fc723ec197aa6215c5e7e1a7a9076c1"],["/js/message.js","a05a127c793145cec6b721f14fced3e5"],["/js/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/contributors.js","50566ed7a65c7a8ed00f81ac7e296ebd"],["/js/plugins/friends.js","a4a917ec8d015ae87ec4104fb53a4d6c"],["/js/plugins/sites.js","f2bbc29a32077a3cbfff221fc9637027"],["/js/rightMenu.js","3a4fed1dede847ada1ee56eabcf6c4f7"],["/js/search/hexo.js","a79c455b734acb6e7067d785ce4d5ed5"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/notes/index.html","5ca4e3e79b616449de5f2d54fdfff9ec"],["/page/2/index.html","d963f22f1c1b1522e60e0c1dbe5fc912"],["/page/3/index.html","0c905077b11e110205ddf0aa71e65bb3"],["/resources/4.5/5.1.1.html","e375bf120cdb9144b39493905b7cdfb6"],["/resources/4.5/5.1.2.html","89112c282ea6b19e4fb6bdd55cff5a80"],["/resources/4.5/5.2.1.html","4b9464b3f942810934f689d01c03f225"],["/resources/4.5/5.2.2.html","0ba79e11c68e619344c3dbcb775b40f6"],["/resources/4.5/5.2.3.html","6a0f3d96a8f71d7d32bb57d7ea6b5664"],["/resources/4.5/5.3.1.html","6ba67eb40f3dda19b61c25ba1a60ae35"],["/resources/4.5/5.3.2.html","72b9847a32eb1797b4e3efec64d05f20"],["/resources/4.5/5.3.3.html","73aa197639f109c9dc9e7742e806c219"],["/resources/4.5/5.3.4.html","83affbe5664c14b7f03319e4780abe33"],["/resources/4.5/5.3.5.html","1ef93e512eb71d1c5ed10a1a4b8d5db9"],["/resources/4.5/5.4.1.html","a66bba6f1f00113432180e4d8bd4affc"],["/resources/4.5/5.4.2.html","3f8c47401322ce6cf3c23c92319b02b2"],["/resources/4.5/5.4.3.html","dd96fb8ae13b92d58930471517457cea"],["/resources/4.5/5.4.4.html","4cfe7dc82d55a020a4b2c7d05c4a855f"],["/resources/4.5/final.html","6f4bec5b53dbbb9a02b8095b861685e3"],["/resources/index.html","6af2cbb72d9961edad9b2ab1ef29b5e9"],["/shuoshuo/index.html","ff05fceb5209cd3fe90e3659cfa79cf0"],["/sto/2018-010101.html","972b76ec70ac4d23a0ed7e4f3b67952d"],["/sto/index.html","bed1aa7a4f788de0f9d263d0cf3f5791"],["/sw-register.js","e699b6083b3e9e2edf5ede07c772274b"],["/tags/computer-cpp/index.html","602e66239de32d329fcc857468911bdf"],["/tags/github/index.html","f6841cb9a0ceea4fda9049820c18dd0a"],["/tags/python/index.html","c8ba420742bf76d298f37af9004437c1"],["/tags/teach，computer，cpp/index.html","3419fd81f5c13b26e8e5d136d880898c"],["/thoughts/index.html","766370db2ef41da958ac935ad073c350"],["/videopoem/index.html","c416a807dbe5d4a4e7a1a54b4e599ee7"],["/wiki/calall-light/how_to_use.html","ffbcd20cb16bb4a3a34f3ad2bbcf96ba"],["/wiki/calall-light/index.html","49b5faa19efe28d00186867665216f5e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
