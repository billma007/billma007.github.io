/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/07/10/myfirstblog/index.html","376bd114f6fcef8a3387c1d8e0cd9b38"],["/2021/07/21/stl_use/index.html","3402acc28c1be8d95f21a3cef9ccd6c2"],["/2021/08/01/cpp-string/index.html","1b7225ad4a44a15edeb1a111baa52155"],["/2021/08/04/cpp-fstream/index.html","4e628947543f0d4c899b7fbe715bcd57"],["/2021/08/12/a-b-problem/index.html","bd5ba2a67958afb52b9095af3bf6b0b4"],["/2021/08/15/github-tokenerror/index.html","870447297d653fe09e05dec2b398aae4"],["/2021/08/19/c-global-variables-in-multiple-files/index.html","f7fcc6b664bcad325560c35636b4897f"],["/2021/08/26/cpp-begin-1/index.html","2e7a18c0d60ec6b2f07307b3feaf2056"],["/2021/08/26/cpp-constructor-exception/index.html","2655137da945b404232830a7ffe645e3"],["/2021/08/26/lcs-suffix-array/index.html","78fd9708ec8ca4abc1bc31c937d9b04a"],["/2021/08/26/python-matplotlib/index.html","37c4e050cf473cd3972ee6e3eec79069"],["/2021/08/29/cpp-if-else-question-1/index.html","fe97e8c9d1b29420b06a8b7f4aa2182c"],["/2021/08/29/github-speed-up-download/index.html","3180f470b456fddaba77b79b0e39c4ed"],["/2021/09/04/vpn-how-to-open/index.html","4a0c6dc3c2cc20d241b7eeb8354d1fa8"],["/2021/09/12/2109poemsay/index.html","b808575515f74c08dc6cf326d52aff59"],["/2021/10/01/21sportsmeet/index.html","b6ed4ebd5216768121d1ac3830ff06fc"],["/2021/10/05/cppluogu-p5380/index.html","32721462f27606c4ceca8b4ed9933303"],["/2021/10/09/wenyan-compile/index.html","151cac96b2f5fa954c17d615ce930efd"],["/2021/10/30/zz_confuzi/index.html","42f4968af81218beefa268216e78e1a6"],["/2021/11/12/file-exe/index.html","ac7bd724eb6a4df4cadc34496b277996"],["/2021/12/04/1202ccf/index.html","1a84162e46270c206800c1a910d6ba29"],["/2021/12/19/xinxitest-gl/index.html","b2aeb21ad42b261b3c96cfc8e22f35ee"],["/2022/02/06/COVID-19-zbzydjq/index.html","ec686a49787b7d87de1177cf9ef46cf0"],["/2022/02/21/zzyzm/index.html","ca6b506d8eb6f35890a2f323b8ce2dcf"],["/404.html","6d7752866afd76f658ac489444d43261"],["/about/index.html","6950279ada002e64612a8fc514070f68"],["/about/station.html","ea78977b381b72f5deb8e7eb8abcf214"],["/archives/2021/07/index.html","b114f2f19da89808b7134c5721b25f0d"],["/archives/2021/08/index.html","3495c751b72624073e4e2c7b9d3ddd36"],["/archives/2021/08/page/2/index.html","517e8079d2385f9cacb1b4af32732506"],["/archives/2021/09/index.html","ad7f9521dabe23a7c6135df02bc02c9e"],["/archives/2021/10/index.html","101a97afb5d09026f366bebdcb223791"],["/archives/2021/11/index.html","4e34c7f3fadb84504ddcabf91efaf6da"],["/archives/2021/12/index.html","f0b48ce9b62256e35f3b49b4e32814be"],["/archives/2021/index.html","c66b7a897e2ae9cb7842e4d5d7ae326d"],["/archives/2021/page/2/index.html","278ac3381e46077e0a44684fee2b95ce"],["/archives/2021/page/3/index.html","5b72359f644350cd4caf78cee931fea6"],["/archives/2022/02/index.html","925b44cc3f7cc39edd013781c5f12edc"],["/archives/2022/index.html","797505cebf11657f6eb8a532c537ee26"],["/archives/index.html","72814dad1adb731337351971c550257b"],["/archives/page/2/index.html","27772b3b64f1ce128b04d0c0683fc00d"],["/archives/page/3/index.html","4f886586665a00df5f09e0005a7951d7"],["/baidu_verify_code-ymIFKBAamH.html","ac2479308742ab79ab17245fc0426f08"],["/calall-light/index.html","d890ee0b04b31cadd06f8135f14bb0f3"],["/calall/1_0_db2.html","d88b7c9d251436c0f9acc3bf6b0de5ee"],["/calall/1_0_db3.html","4d9f7ae181f31e429472d2a9bd80c925"],["/calall/index.html","235280813dfbb56db208f6ca895ab9dd"],["/categories/index.html","1d9ee61a9738964b199e48b5a804a250"],["/categories/南航苏州附中校园活动/index.html","9fa302dc3f4a9b11ea14ce467856bd8d"],["/categories/日常经验/index.html","5b7b9c3c2c6938ad70acf4d3439e0116"],["/categories/竞赛解法/index.html","34a2dccedf443fa034e69713b3770118"],["/categories/精华转载/index.html","d1e7f8526b4419f6f356fa995bb8d9eb"],["/categories/编程算法/index.html","23cb6a24f9d6cc8d936eab489225db5d"],["/css/Readme.html","67a0194faa4ec902e15d51fea75556bd"],["/css/first.css","2216ad509fce056f741b5b66ca14dfb4"],["/css/message.css","ca2f839e9a41207ce4d486b75b0dc926"],["/css/style.css","b6d47f6f70d479f24555fabea6e6bd17"],["/faq/index.html","09c21111db6797ffee569dce7edaff8c"],["/game/index.html","008cf78d460c93f42ad1ba38d435c220"],["/how-to-ask-q/ft.html","7d558f377bea898c74d24141d39b1e93"],["/how-to-ask-q/index.html","cb56f953ed25b00b3f8dd023bf692ba7"],["/index.html","ee765213a4adfb5f1830486b4fe201bd"],["/js/aplayer.js","40a083642ab212371216044672d6f0d4"],["/js/app.js","5fc723ec197aa6215c5e7e1a7a9076c1"],["/js/message.js","a05a127c793145cec6b721f14fced3e5"],["/js/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/contributors.js","50566ed7a65c7a8ed00f81ac7e296ebd"],["/js/plugins/friends.js","a4a917ec8d015ae87ec4104fb53a4d6c"],["/js/plugins/sites.js","f2bbc29a32077a3cbfff221fc9637027"],["/js/rightMenu.js","3a4fed1dede847ada1ee56eabcf6c4f7"],["/js/search/hexo.js","a79c455b734acb6e7067d785ce4d5ed5"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/notes/index.html","49d98fe998cabc5f089a27655768c97b"],["/page/2/index.html","afe137aa5415147b0cc8e9e5bb4bbd65"],["/page/3/index.html","f875204ac551f469b304cb2ef4827a39"],["/resources/4.5/5.1.1.html","171a3a63ff9207f66d83f676b40b6023"],["/resources/4.5/5.1.2.html","3eacafdfc8eebf6ce4f1089b824a9cc8"],["/resources/4.5/5.2.1.html","941716575002fdcdf009552bfd4d380a"],["/resources/4.5/5.2.2.html","304deb6590f096fbfc2a8653691f65c7"],["/resources/4.5/5.2.3.html","5540c2734c2380aa15d2b3f377e445d4"],["/resources/4.5/5.3.1.html","db3ebc4e8d98c7b41dd6bedd1c9109c2"],["/resources/4.5/5.3.2.html","33f96082e98bc6c0884e34e7df43a6f4"],["/resources/4.5/5.3.3.html","5d693bad85342d9a2c025afdfd7e4369"],["/resources/4.5/5.3.4.html","0b43a58ab70e8c58725a6fee2a4a99f0"],["/resources/4.5/5.3.5.html","d6c64d88711fd7023f36fed3cd6e61f1"],["/resources/4.5/5.4.1.html","325c98220396dd587900d1bdea180fdd"],["/resources/4.5/5.4.2.html","f7d2f41db9105997e5ca2a36b5c0fb76"],["/resources/4.5/5.4.3.html","e918332b405c087b2c71585edcbe3a58"],["/resources/4.5/5.4.4.html","c7ecafad35fcd0ecdf781519b788dc07"],["/resources/4.5/final.html","8070e25c4d93e797c669a9f0f08dd9bd"],["/resources/index.html","b56ddd84c5fa8060e0fff60433d67bb5"],["/shuoshuo/index.html","24d3da70b70bd3327ac51c0cce8540ec"],["/sto/2018-010101.html","ee86595948bde5f6029233c618421881"],["/sto/index.html","8bbe07ae3e743ae0a670e813fb0c51db"],["/sw-register.js","115b22f7c9b0e96d07506fa7435b2339"],["/tags/computer-cpp/index.html","0442bacc8611a1d51fa78c17de831fe1"],["/tags/github/index.html","4f3639dc325e223522b4b86a05578837"],["/tags/python/index.html","244b2690646b316fdda66ce54d0e33e9"],["/tags/teach，computer，cpp/index.html","8361f5df00b68f4bb0bfdca1d628ac1c"],["/thoughts/index.html","e0b8bc0ff8a697f8472fd2aff308d071"],["/videopoem/index.html","8a9c68fde950898432ba09c6539c3206"],["/wiki/calall-light/how_to_use.html","34df78e847effb15a61f7a2b32d72677"],["/wiki/calall-light/index.html","3fd567263eb4b866915752f57455fd8f"]];
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
