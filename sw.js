/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/07/10/myfirstblog/index.html","c552eb62465c4d1719d03fb33be41746"],["/2021/07/21/stl_use/index.html","4b3101a106cc65c4d1dcbd08c198b41a"],["/2021/08/01/cpp-string/index.html","1cec482300c117f35ebfc682d1a81b9f"],["/2021/08/04/cpp-fstream/index.html","a364b4519c409739ddbd558f298571a0"],["/2021/08/12/a-b-problem/index.html","5ed37065ef8b3e38551c0547e841d310"],["/2021/08/15/github-tokenerror/index.html","f6ce6236eb89a8ccf68a5cec812e7ff0"],["/2021/08/19/c-global-variables-in-multiple-files/index.html","18199e7f1131a6537d4a44a9a7e24d30"],["/2021/08/26/cpp-begin-1/index.html","161978be6a0bb5be035e80acd17919d0"],["/2021/08/26/cpp-constructor-exception/index.html","27bb208ac16ab9892991f0e4913f34cb"],["/2021/08/26/lcs-suffix-array/index.html","294e3c994ad27b72ae46c3722fa49459"],["/2021/08/26/python-matplotlib/index.html","8c770b4348c92d42a5944d8485591c17"],["/2021/08/29/cpp-if-else-question-1/index.html","27e9e540cbff383d1827b43568e2d7cd"],["/2021/08/29/github-speed-up-download/index.html","9f99e019a4aa60ae05afddb1f344b478"],["/2021/09/04/vpn-how-to-open/index.html","6dce123e932496e656591b709bd1e9d5"],["/2021/09/12/2109poemsay/index.html","b529399b83eb2a37ea23f09676b29c8b"],["/2021/10/01/21sportsmeet/index.html","34400ee46085dbda7dd7247d85eaf53b"],["/2021/10/05/cppluogu-p5380/index.html","4ebbaa71e85dce053a4d84bd1b4ce2ea"],["/2021/10/09/wenyan-compile/index.html","491d34d0005f5c92f869f0da46f71806"],["/2021/10/30/zz_confuzi/index.html","bbfbd46d9f3700b19b02ed7b7b4c5b93"],["/2021/11/12/file-exe/index.html","fdb425ee10a3fa0ddb37bfabe7828ab0"],["/2021/12/04/1202ccf/index.html","45eafb7e9f870125370fcb6055f9fb9a"],["/2021/12/19/xinxitest-gl/index.html","3b2abd28973343949aa861e333f923f0"],["/2022/02/06/COVID-19-zbzydjq/index.html","013e77fa086cc83e46d300da2f8a9d15"],["/404.html","eb74859a39c27b63ab9153ba959b6bd4"],["/about/index.html","e58e9c13d2a6dd779de46c3437dcdde2"],["/about/station.html","ec0444d7f3e1e00b7b6d6c1fd0cd2a50"],["/archives/2021/07/index.html","7d05f5e84865c649e989b72cdecdaabf"],["/archives/2021/08/index.html","efd7f2f27664be9100c75a8501f96093"],["/archives/2021/08/page/2/index.html","96b6b5f66009cef32cb74a8ddd1bfda0"],["/archives/2021/09/index.html","2c02de44561fec83fe57e207754daa7e"],["/archives/2021/10/index.html","82a733f0a5a36823545988c36483e9a9"],["/archives/2021/11/index.html","7653b5f9f156af3d304e2cc894129e43"],["/archives/2021/12/index.html","47e6491d38f8a7bc81be7b62353467a1"],["/archives/2021/index.html","48f6573eb0e9692fdb6aa5694fc12ef9"],["/archives/2021/page/2/index.html","2bbcb51a4499d785e8377b68f53a4c03"],["/archives/2021/page/3/index.html","5324889d13b5d245692c9bcd44afac1b"],["/archives/2022/02/index.html","6ef197ad19b3e7aa98a35b6500e32d4f"],["/archives/2022/index.html","18038952000dafe47584358453ae56cd"],["/archives/index.html","415ab8a2ed3843f0d2c38c9c0d5bd72a"],["/archives/page/2/index.html","0b7cf1471d2564f9b4ed0d35b83b876b"],["/archives/page/3/index.html","3c6a94d94159c5d0c5173536dd6b6e79"],["/baidu_verify_code-ymIFKBAamH.html","197d07f97dd2ccc069a2ff21d0d514ac"],["/calall/1_0_db2.html","abe78d8e20389042f6c1762fdfe80c5c"],["/calall/1_0_db3.html","dc4015396816beeb20d039f5afde7a05"],["/calall/index.html","ed75c848fe2b4ada79a297fc63a2834d"],["/categories/index.html","6e8aed7a3c047501e55e8175e2b0385d"],["/categories/南航苏州附中校园活动/index.html","87d364ed834c95ac912947dbfd4a0ae7"],["/categories/日常经验/index.html","847fdadfa8707fecef5c4d547d69a537"],["/categories/竞赛解法/index.html","d780cd03075babd779884e3b3250758d"],["/categories/精华转载/index.html","ff80ef1e7f5f20ba5e064eb6336897de"],["/categories/编程算法/index.html","49e302c6ccdea4341d00d0e3e3e236c1"],["/css/Readme.html","67a0194faa4ec902e15d51fea75556bd"],["/css/first.css","2216ad509fce056f741b5b66ca14dfb4"],["/css/message.css","ca2f839e9a41207ce4d486b75b0dc926"],["/css/style.css","b6d47f6f70d479f24555fabea6e6bd17"],["/faq/index.html","afd3881f3a2c52d675f17dfb3e9dc809"],["/game/index.html","2972da376a3845fb62a660dc2d405c00"],["/how-to-ask-q/ft.html","1ddb7edfcefc8982c77abaf290f32fd2"],["/how-to-ask-q/index.html","b7b3bb3e24265f5a10b27d8f33a679b9"],["/index.html","d1add2a44bd90dc8a6eee6e0619cb18e"],["/js/aplayer.js","40a083642ab212371216044672d6f0d4"],["/js/app.js","5fc723ec197aa6215c5e7e1a7a9076c1"],["/js/message.js","a05a127c793145cec6b721f14fced3e5"],["/js/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/contributors.js","50566ed7a65c7a8ed00f81ac7e296ebd"],["/js/plugins/friends.js","a4a917ec8d015ae87ec4104fb53a4d6c"],["/js/plugins/sites.js","f2bbc29a32077a3cbfff221fc9637027"],["/js/rightMenu.js","3a4fed1dede847ada1ee56eabcf6c4f7"],["/js/search/hexo.js","a79c455b734acb6e7067d785ce4d5ed5"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/notes/index.html","1e21df930dc09ac964c0dec7ff037fff"],["/page/2/index.html","3ab9d645dfe3297dce581f521bc5f333"],["/page/3/index.html","fd734c1183cdec06624c5d2721dab5bb"],["/resources/4.5/5.1.1.html","92116e9c41fabca12c0bcd617b71c875"],["/resources/4.5/5.1.2.html","f00b9fd7732e745f9f4d8b2084229471"],["/resources/4.5/5.2.1.html","f18c4ffff4b2d0db0473d068c071df74"],["/resources/4.5/5.2.2.html","4dc92ef30b3383ce2ba15df1056dc8d1"],["/resources/4.5/5.2.3.html","f044bea81511f23e9809fae6b62783da"],["/resources/4.5/5.3.1.html","5dfdaba0585fa0507d74a6474a384a0b"],["/resources/4.5/5.3.2.html","1cadfe729aaf7cbdbe5b72ce2d867248"],["/resources/4.5/5.3.3.html","38f2eecb58da7f081faae71205c4b986"],["/resources/4.5/5.3.4.html","8a960d0a1ff2a412ae2325cc602e7ad7"],["/resources/4.5/5.3.5.html","08a9aaa95403a11d5441f19fe4336a74"],["/resources/4.5/5.4.1.html","52ccb22ac8fbdd2f5f06ffbf1c0fc565"],["/resources/4.5/5.4.2.html","b42c0216efd7baa40ff947403f0b3400"],["/resources/4.5/5.4.3.html","7f21da1993ce8a8bb22b2e42ba4013a2"],["/resources/4.5/5.4.4.html","651c140ac0e9df9d46581c4f332bf9b5"],["/resources/4.5/final.html","1705d34b3e8734930da3b7caf0c2978b"],["/resources/index.html","4f47243ac3bba8239fc363695dc607ac"],["/shuoshuo/index.html","781405f9b4ca0e46a4afe15973b6f4da"],["/sto/2018-010101.html","07781bb15b25326f44e87aea1086dd84"],["/sto/index.html","c28bc85a7b8dec6dd4fbd2cf7273ac14"],["/sw-register.js","effbdf395766dbf6e4c6300ff4255d27"],["/tags/computer-cpp/index.html","f4e78eb69a381daa5b8ae3620e246063"],["/tags/github/index.html","e065e8cc0df3c5ea3fbe5dabea7de5e4"],["/tags/python/index.html","4683eb823d50cf63d97451ad35207866"],["/tags/teach，computer，cpp/index.html","e8ef95976a7b54e3d60dbe28e5c1ae0a"],["/thoughts/index.html","ed51cfa9455ca920352d653e5a80c212"],["/videopoem/index.html","38e6d3d1d547f533f13a54ca62001746"],["/wiki/calall-light/how_to_use.html","ea5a1f247a6ce2df6e2f48ef6a85394f"],["/wiki/calall-light/index.html","4d3a77f31c685671e437a406cb786e71"]];
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
