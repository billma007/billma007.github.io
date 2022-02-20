/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/07/10/myfirstblog/index.html","e3b6aea93b254c04302eac629da56ba0"],["/2021/07/21/stl_use/index.html","3de15b39f14c89426e21e094856b8e75"],["/2021/08/01/cpp-string/index.html","6c0f46a55f0cc687d39b8a519d9f4c49"],["/2021/08/04/cpp-fstream/index.html","e36e47a22659056f6b33a2ce31b3f15f"],["/2021/08/12/a-b-problem/index.html","26932224ce00c958f41c0a45495498ea"],["/2021/08/15/github-tokenerror/index.html","cd38280385d16dfbfde57c607ebce2a5"],["/2021/08/19/c-global-variables-in-multiple-files/index.html","70b1e1e743d78a6f3b49ac91ba61adce"],["/2021/08/26/cpp-begin-1/index.html","75e5229d60773c8b2a8031d00400f549"],["/2021/08/26/cpp-constructor-exception/index.html","eb074e2a38c444bac61688fb1158bc58"],["/2021/08/26/lcs-suffix-array/index.html","278b62e4bf2018d2ef17840baf0e53de"],["/2021/08/26/python-matplotlib/index.html","25547c1d36f3f19a2b358aed9f8a3f8a"],["/2021/08/29/cpp-if-else-question-1/index.html","7367c41c775ac2e698284e6f5ac3ac11"],["/2021/08/29/github-speed-up-download/index.html","ec5cfb1e4200c3022deed5a896f411eb"],["/2021/09/04/vpn-how-to-open/index.html","f5be5a94ef8eb97b55bcab147295a598"],["/2021/09/12/2109poemsay/index.html","b4675df9ef2037e40dab6fa2f60baaf3"],["/2021/09/13/cxynb/index.html","0ddf6bbcdc7ef098d49c5ce862969050"],["/2021/10/01/21sportsmeet/index.html","2697353e26f20ee3590577faeb914e68"],["/2021/10/05/cppluogu-p5380/index.html","0fabe1e1b3597786270c1a39c1a8d861"],["/2021/10/09/wenyan-compile/index.html","1f976d9e95c0a0af48424902bd6e1027"],["/2021/10/30/zz_confuzi/index.html","a064c1c1c4aec63c6e41d74c80d0ab85"],["/2021/11/12/file-exe/index.html","f7928e497093a1558aa336a7ce92ec10"],["/2021/12/04/1202ccf/index.html","c81ba44af0256457710474bbce3e0b06"],["/2021/12/19/xinxitest-gl/index.html","8b6543d39bbd352e3a9ef3b6040b90ed"],["/2022/02/06/COVID-19-zbzydjq/index.html","168bc442b8a2efbf146b0739c36f42c7"],["/404.html","86b115bd15238cd0ca2cced1579de4a0"],["/about/index.html","085ead8a6425b1250489840f4f25cd82"],["/about/station.html","51c7a67e8fc9b21c9b68175294470018"],["/archives/2021/07/index.html","f01ed1db119929a2f0e56fefa643ff44"],["/archives/2021/08/index.html","95d2d09ccf5b69cf6c343836b38f9e95"],["/archives/2021/08/page/2/index.html","3ea1b36e65a160baf34c8ef2ad2b0738"],["/archives/2021/09/index.html","33cab9000149285e5368b6bb7d8d8c9d"],["/archives/2021/10/index.html","b683a6d4ccd3558cd58703d988755f6e"],["/archives/2021/11/index.html","d3bf362e073f54f839e8ad486d086d2a"],["/archives/2021/12/index.html","c8abb9751c517113e7a3ebec4494e9fe"],["/archives/2021/index.html","8ab8e60e7192db4d0e32799056be8775"],["/archives/2021/page/2/index.html","75215c4f03b963c988f20d5f0ea1bc7d"],["/archives/2021/page/3/index.html","fb8b45f8a06dd9eadf22c20f3312e5d2"],["/archives/2022/02/index.html","09286dfcc3309135a382c2fdbde31308"],["/archives/2022/index.html","fb762a400fe0ccfdd30945bd91681342"],["/archives/index.html","2875a82424b76c3853e51093df9d8dd3"],["/archives/page/2/index.html","9565dd0f0d4b4ad007232f1a9858cf48"],["/archives/page/3/index.html","45ff2290b9650cb1f29291bad8c0c536"],["/baidu_verify_code-ymIFKBAamH.html","7817899501e1e9f0fcaedbb770c20fab"],["/calall-light/index.html","a5f5cfd27233987274b796d5ca78f08e"],["/calall/1_0_db2.html","bcf906645793fb515aaf44c11a63477c"],["/calall/1_0_db3.html","a2d9c3a5346ca2ee8df6dbcd07eb2f5a"],["/calall/index.html","aa66e658eae4e1c33d3416dbc15209d6"],["/categories/index.html","ce1a6a9f6124c21268d511fe925a83f7"],["/categories/南航苏州附中校园活动/index.html","20d9d9231a47eefe22aa08da4095735e"],["/categories/日常经验/index.html","28dbf12e7e2ac706f4bd3d04a8a9fe36"],["/categories/竞赛解法/index.html","420dc7a4178879d40432bebf197119cc"],["/categories/精华转载/index.html","68e6ab408889cdcd018d0b11394486d5"],["/categories/编程算法/index.html","803d9636a8880a0a81ff88fb59915936"],["/categories/陈星宇牛逼/index.html","5727c85ad820efac4d32905fccd33666"],["/css/Readme.html","67a0194faa4ec902e15d51fea75556bd"],["/css/first.css","2216ad509fce056f741b5b66ca14dfb4"],["/css/message.css","ca2f839e9a41207ce4d486b75b0dc926"],["/css/style.css","b6d47f6f70d479f24555fabea6e6bd17"],["/faq/index.html","adff114b120d7fde5eb199eaed316d4e"],["/game/index.html","162357c112ec019b6a486bb24e5bb59b"],["/guestbook/index.html","2408ed349715bfd675a0a14f20b3c89a"],["/how-to-ask-q/ft.html","bdc1fe44d4cbeb742d1db091e9a916ab"],["/how-to-ask-q/index.html","4eff7f7612182fe544379d142eca1d98"],["/index.html","2a1fa500fd97d9a279b4c3a0d83ed4e5"],["/js/aplayer.js","40a083642ab212371216044672d6f0d4"],["/js/app.js","5fc723ec197aa6215c5e7e1a7a9076c1"],["/js/message.js","a05a127c793145cec6b721f14fced3e5"],["/js/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/contributors.js","50566ed7a65c7a8ed00f81ac7e296ebd"],["/js/plugins/friends.js","a4a917ec8d015ae87ec4104fb53a4d6c"],["/js/plugins/sites.js","f2bbc29a32077a3cbfff221fc9637027"],["/js/rightMenu.js","3a4fed1dede847ada1ee56eabcf6c4f7"],["/js/search/hexo.js","a79c455b734acb6e7067d785ce4d5ed5"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/notes/index.html","16586c3b8b84816891f53bf02c7d948c"],["/page/2/index.html","bb9c5268084373532a113364edfeb9cf"],["/page/3/index.html","d625377b819ac54c3fbb77d0f61ef372"],["/resources/index.html","42e424f8a06e4aa4c1fe15ede2e60f60"],["/shuoshuo/index.html","b391a29e128df01f52a50661221f6d13"],["/sto/2018-010101.html","38dbd92530fb9e1b5ca4805867e8f39a"],["/sto/index.html","f3bb3a830bc6cd25bab485b47395a576"],["/sw-register.js","3b6815aca40f2e22aa20c299b0445c78"],["/tags/computer-cpp/index.html","670ef8bab381177a2d0f4dc8f9312af0"],["/tags/github/index.html","5e7897afe1b931da52d22a5b9e7ac66b"],["/tags/python/index.html","99075007e7b88b3d6713205571d418e7"],["/tags/teach，computer，cpp/index.html","c135c3e0d1bb695d0ad19241b6ee445c"],["/thoughts/index.html","49623f81166cfae38b0959bb83572083"],["/videopoem/index.html","b23ca3a8028841db9bb0eeafaa142998"],["/wiki/calall-light/how_to_use.html","a767011319376a01d9739bde0b872362"],["/wiki/calall-light/index.html","d28c71f6f86c80517e19d44ec9c94ffc"]];
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
