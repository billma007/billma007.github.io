/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/07/10/myfirstblog/index.html","64978bb92fc2b1db52dfd72657ef970b"],["/2021/07/21/stl_use/index.html","799bc69267cd56758d0c859c7c6ab5d8"],["/2021/08/01/cpp-string/index.html","a72797aa21f035362bdb2969c849bcca"],["/2021/08/04/cpp-fstream/index.html","650b70ed692a0ac404bb927f67f2a816"],["/2021/08/12/a-b-problem/index.html","ae9f59f80a60bbb43ec6d7fa49dc3507"],["/2021/08/15/github-tokenerror/index.html","c1d20f27c27812f66fc5805518d9c51c"],["/2021/08/19/c-global-variables-in-multiple-files/index.html","614578a738f8093a74df893a4242d483"],["/2021/08/26/cpp-begin-1/index.html","9815bab99739e7a452a24bce0cb343a1"],["/2021/08/26/cpp-constructor-exception/index.html","3e7fb49b4b22dd7cfde3fd981fe48a8e"],["/2021/08/26/lcs-suffix-array/index.html","15cedc61c9d2e42366c1142c487283d8"],["/2021/08/26/python-matplotlib/index.html","1d11b06793d5a3a7c843dfc397382e72"],["/2021/08/29/cpp-if-else-question-1/index.html","7733c3c7f21af76e122bb37faa304baf"],["/2021/08/29/github-speed-up-download/index.html","85115ad009f1c3f4da85c029e74b4bca"],["/2021/09/04/vpn-how-to-open/index.html","a23cf3a8a1688b4be5b4425b26aac69d"],["/2021/09/12/2109poemsay/index.html","1e40396b7d19e3dfec9beed926d01ef3"],["/2021/10/01/21sportsmeet/index.html","7191e8b2eb33a59c7ae07a175a1ae123"],["/2021/10/05/cppluogu-p5380/index.html","3119123e36fe4c7b52a8ffa168193d1c"],["/2021/10/09/wenyan-compile/index.html","a3cc5a37081289e5c5ab466f9a91a505"],["/2021/10/30/zz_confuzi/index.html","e714850edbb424c8321d637bb958d4cc"],["/2021/11/12/file-exe/index.html","1f6312df6645d5d83c73e6d2771dfeea"],["/2021/12/04/1202ccf/index.html","c45c41f9febce2421b429dc6c49cc2fa"],["/2021/12/19/xinxitest-gl/index.html","612dc485763a6fdb3c3aec2949a01d8b"],["/2022/02/06/COVID-19-zbzydjq/index.html","a33d59b6d6bb9545e4f8d10ed49d20d7"],["/404.html","7b2b5ac8aa5285e91826389edb88cf96"],["/about/index.html","7a2532dae0bfeb1d8a9e8082f5a8aa0b"],["/about/station.html","2a46dffbfe8fb46ba2dfcb4e41d6f6f5"],["/archives/2021/07/index.html","45f2634e57c5491b2715a11ba4ae5c4e"],["/archives/2021/08/index.html","819d6a999c254c22435d772b7856ef67"],["/archives/2021/08/page/2/index.html","5d0a4137fc5e2e47b96ce1114aad384f"],["/archives/2021/09/index.html","54970c0e6499873b2cad6e8311db0bc7"],["/archives/2021/10/index.html","20209f6912ec19b6730548e8e5dabca3"],["/archives/2021/11/index.html","5a7d79c77743c00cf8cf37658934925c"],["/archives/2021/12/index.html","e25433298ac5f438ebbd692a9caa7e18"],["/archives/2021/index.html","718fd18fcfc6055b6c603d96311bba5e"],["/archives/2021/page/2/index.html","2f1b05f5fd204f4f34896a70b42f7063"],["/archives/2021/page/3/index.html","fb25b7d7ac4d23e37c1afc8eb04d5520"],["/archives/2022/02/index.html","44eebbb9a64654109e44add7495bb18d"],["/archives/2022/index.html","1104600f4bbe90ac8c0a4e6c05dacbd0"],["/archives/index.html","be6acb991590125ae247851c60b32442"],["/archives/page/2/index.html","f3fce26f62f576e0152467654e3f8b23"],["/archives/page/3/index.html","7620e467425fa220d7bad418ef665e8e"],["/baidu_verify_code-ymIFKBAamH.html","4f5dd073b4e24ed09f2a311b920def13"],["/calall/1_0_db2.html","f41d5475f7ef5b0e276b5d9799dd1415"],["/calall/1_0_db3.html","ff0dec212894f371cb135aaad23c1e6f"],["/calall/index.html","47290a4b21104cd640ae48c7577821fb"],["/categories/index.html","634c5134ad67cca48a37b8d18946caad"],["/categories/南航苏州附中校园活动/index.html","9d9e9af2c161ff73927a74350acce50a"],["/categories/日常经验/index.html","47d1bac6fe80bf347dc9c1b4d2a4c19b"],["/categories/竞赛解法/index.html","25c96b65443416b960a17dea267e7924"],["/categories/精华转载/index.html","d356c2bb83daaf8fb85b11001bcf2992"],["/categories/编程算法/index.html","a9faf222d39ae4acde4ea69dbe4af8da"],["/css/Readme.html","67a0194faa4ec902e15d51fea75556bd"],["/css/first.css","2216ad509fce056f741b5b66ca14dfb4"],["/css/message.css","ca2f839e9a41207ce4d486b75b0dc926"],["/css/style.css","b6d47f6f70d479f24555fabea6e6bd17"],["/faq/index.html","a46a1beb789c89d47d6aba391d9e6aa7"],["/game/index.html","d46303e326f9fe147e5eea6b77ba1a7a"],["/how-to-ask-q/ft.html","ad6b202819666195242c97d42c1c4629"],["/how-to-ask-q/index.html","a4089616d428b54bca39e922f49bcc6c"],["/index.html","f84daf18c8aa47207cdb9380d1086148"],["/js/aplayer.js","40a083642ab212371216044672d6f0d4"],["/js/app.js","5fc723ec197aa6215c5e7e1a7a9076c1"],["/js/message.js","a05a127c793145cec6b721f14fced3e5"],["/js/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/contributors.js","50566ed7a65c7a8ed00f81ac7e296ebd"],["/js/plugins/friends.js","a4a917ec8d015ae87ec4104fb53a4d6c"],["/js/plugins/sites.js","f2bbc29a32077a3cbfff221fc9637027"],["/js/rightMenu.js","3a4fed1dede847ada1ee56eabcf6c4f7"],["/js/search/hexo.js","a79c455b734acb6e7067d785ce4d5ed5"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/notes/index.html","366ce6db639bbfb57c31fb12cff761cd"],["/page/2/index.html","c12f976789df415c8379779f1f20304e"],["/page/3/index.html","d3db85cb18f545ce9bb47b8e4e97a844"],["/resources/4.5/5.1.1.html","27d265258e558b6cc8242cc9798be9d3"],["/resources/4.5/5.1.2.html","52f095eecff1bceca85f351f51e30359"],["/resources/4.5/5.2.1.html","f89e049593d322d379118a5d1fc3a7b4"],["/resources/4.5/5.2.2.html","ddff417efca7559de8eed01ff2f734a2"],["/resources/4.5/5.2.3.html","fab8990bf6c5735b06a0e587b0d95917"],["/resources/4.5/5.3.1.html","5060d005f6e9990e07081f7741472d83"],["/resources/4.5/5.3.2.html","6282f655c15e1105c32e316349fcaf9f"],["/resources/4.5/5.3.3.html","96e3e9b064dde1aa300650d2cdb61e08"],["/resources/4.5/5.3.4.html","fa343043194a634c5b2b69df9ea813ef"],["/resources/4.5/5.3.5.html","3dc2502b964e712f154bc311bb7ef21c"],["/resources/4.5/5.4.1.html","82cad566579a69be340c9d7b52fa0c60"],["/resources/4.5/5.4.2.html","89ee7ffcc0e438126d949bae8111cb39"],["/resources/4.5/5.4.3.html","70c23a756c5b70585f6a819524d7e08a"],["/resources/4.5/5.4.4.html","a1b8be8251f3ddac9f7de734b0ef0f9a"],["/resources/4.5/final.html","e4e41297e0a2772270266c9d222da466"],["/resources/index.html","f1c4768e1f9bb40fe2c4e07a3e294316"],["/shuoshuo/index.html","ef2b2492a4b81e059046307cf42c881a"],["/sto/2018-010101.html","04e1bde184c60675589210f59be201c9"],["/sto/index.html","8cba82e1e55e7502144fdea03822d3ae"],["/sw-register.js","eb71cd84bf52faa1fce58104985a1af7"],["/tags/computer-cpp/index.html","9654593dfb41464a60fbfa5b09e464fc"],["/tags/github/index.html","0529fae3280e7dd3770c25f31cdc9f62"],["/tags/python/index.html","95327550526d911c253bc2a663de1384"],["/tags/teach，computer，cpp/index.html","aaaf6e1b32faa3d324a25874a0f8e33a"],["/thoughts/index.html","b580328919a7af18d2ec7af2df2e88a7"],["/videopoem/index.html","d6e59869a6707e2eb6d8a4cbe3da7922"],["/wiki/calall-light/how_to_use.html","5d729cbd1df4a47b5f02644197c244c5"],["/wiki/calall-light/index.html","5e19e455349fe7404c1d20501125ddc8"]];
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
