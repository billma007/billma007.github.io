/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/07/10/myfirstblog/index.html","2261e775c81f25e0a1203d839b2a78fa"],["/2021/07/21/stl_use/index.html","d9213a7b1a9c52b63e22bdceb6c453a5"],["/2021/08/01/cpp-string/index.html","81677e86c8370b17e528467f3c329099"],["/2021/08/04/cpp-fstream/index.html","473617702a8ba373154b1334a420034a"],["/2021/08/12/a-b-problem/index.html","db953fd1c314e181c909a8ba1f42643c"],["/2021/08/15/github-tokenerror/index.html","a6a0de0dba8d0b6a57b8a992dea1a34c"],["/2021/08/19/c-global-variables-in-multiple-files/index.html","bd7a272cf772cd43c0dee797044175b0"],["/2021/08/26/cpp-begin-1/index.html","2807f2796c810af415fb57b72cbebd25"],["/2021/08/26/cpp-constructor-exception/index.html","4b5efff1c134cfdc39f698de0288c852"],["/2021/08/26/lcs-suffix-array/index.html","c443334db751a9b113e2e45536161a36"],["/2021/08/26/python-matplotlib/index.html","55d5dde117e78c86e1a71bb7da4f05b9"],["/2021/08/29/cpp-if-else-question-1/index.html","707fe8f3837e0ed87f50e03315958761"],["/2021/08/29/github-speed-up-download/index.html","e4dfbef4720bd657b5072e61fa2321a2"],["/2021/09/04/vpn-how-to-open/index.html","4fed992bfbf042317d974c63e6a6f6dd"],["/2021/09/12/2109poemsay/index.html","986003c97cccde52af9205506e68beef"],["/2021/10/01/21sportsmeet/index.html","a397afafb19e77fbd3d74cc56d5b1a9a"],["/2021/10/05/cppluogu-p5380/index.html","0c9c9b6aade2b8890b41cc38879ec3d1"],["/2021/10/09/wenyan-compile/index.html","2b0ec5a238a86ad15055972b6b88cb4d"],["/2021/10/30/zz_confuzi/index.html","fe9db6e0e86d7d604305f3e049077ab3"],["/2021/11/12/file-exe/index.html","150aca3b640bc12a985e4d4d87866037"],["/2021/12/04/1202ccf/index.html","422acdaa840b4f0b5e5fab2ac31cc5c2"],["/2021/12/19/xinxitest-gl/index.html","6f77bdc95890ba0d3c7437f50d1eb34f"],["/2022/02/06/COVID-19-zbzydjq/index.html","2adf5a389a56a54cf1ea83b0dfaaab01"],["/2022/02/21/zzyzm/index.html","8a7a99b41444cb70dbbd3512adee28d1"],["/404.html","858c7cae1505533c3f3e9b7415e32ba7"],["/about/index.html","54fdebfd260bf9d2f1f28142b416ca88"],["/about/station.html","c6a858d392d089972f74a668482a94c5"],["/archives/2021/07/index.html","0bf35e43fc98004677f54797f4f345c8"],["/archives/2021/08/index.html","284776371a1ec0584606973a6008f3f4"],["/archives/2021/08/page/2/index.html","e5180d62f22ca846efcc0fbbbdb81da1"],["/archives/2021/09/index.html","10ef8b7a76a660b6e1f8eb1fde840c21"],["/archives/2021/10/index.html","b53828011af9a32eba713be52d6a25d1"],["/archives/2021/11/index.html","2407c2c309f886f1f85016b340dc2290"],["/archives/2021/12/index.html","dd4041e9992ee11ebb776487b5f170e0"],["/archives/2021/index.html","ec8880fc342a930c107742ef8bfc3094"],["/archives/2021/page/2/index.html","555826ec7a6b9f85b8f7326674f819fd"],["/archives/2021/page/3/index.html","7a998871f116f7c4995bee16214f7108"],["/archives/2022/02/index.html","6fada7c94bd52560741eb304e34c567e"],["/archives/2022/index.html","a383ccf75cd020908a69a3ebea7eed59"],["/archives/index.html","201f6ed31539d5db6d8543e1a4596a58"],["/archives/page/2/index.html","a93985d725b8ff591e1c825c870ae110"],["/archives/page/3/index.html","70deed9ed38f272bdd979a2a96389299"],["/baidu_verify_code-ymIFKBAamH.html","27a642fbd02e5b54b710d8937d3f4b83"],["/calall-light/index.html","3dfc575a4cb29b1cd42792ec1c5397d9"],["/calall/1_0_db2.html","1da31d5b03820503df0c20d82b774958"],["/calall/1_0_db3.html","42f117a9c329283920e027b7dccb0637"],["/calall/index.html","93d36a92e43eb499a52912237027cb60"],["/categories/index.html","e87d32308e32b74822f81dae64f3046b"],["/categories/南航苏州附中校园活动/index.html","8fa84fed4b853489fc418c93733e103d"],["/categories/日常经验/index.html","b6779f30dc518ad39e69bde1fcd5ca71"],["/categories/竞赛解法/index.html","72182a50ced8eaecc0e8834433f59be4"],["/categories/精华转载/index.html","780953165cf8c0a00206b5fe878ae1d6"],["/categories/编程算法/index.html","a65ea02ff30bab7afb5a36646120cc3d"],["/css/Readme.html","67a0194faa4ec902e15d51fea75556bd"],["/css/first.css","2216ad509fce056f741b5b66ca14dfb4"],["/css/message.css","ca2f839e9a41207ce4d486b75b0dc926"],["/css/style.css","b6d47f6f70d479f24555fabea6e6bd17"],["/faq/index.html","80477bc406eb6b5d05a8581a88fbe127"],["/game/index.html","b8bc8d7c2702ae450d18d2ce8cfeb1dc"],["/how-to-ask-q/ft.html","281d7fe2bd7db4edb5d844dd15866fa3"],["/how-to-ask-q/index.html","3d6406f7a5cd6937e1fb64966c59f783"],["/index.html","6e82a794b45b2eb7fcbe7cdc0c8d1e84"],["/js/aplayer.js","40a083642ab212371216044672d6f0d4"],["/js/app.js","5fc723ec197aa6215c5e7e1a7a9076c1"],["/js/message.js","a05a127c793145cec6b721f14fced3e5"],["/js/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/contributors.js","50566ed7a65c7a8ed00f81ac7e296ebd"],["/js/plugins/friends.js","a4a917ec8d015ae87ec4104fb53a4d6c"],["/js/plugins/sites.js","f2bbc29a32077a3cbfff221fc9637027"],["/js/rightMenu.js","3a4fed1dede847ada1ee56eabcf6c4f7"],["/js/search/hexo.js","a79c455b734acb6e7067d785ce4d5ed5"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/notes/index.html","6a242c3751bf892a08beaa9e2f50b50a"],["/page/2/index.html","437113be7f06b2263c26680c838ce1b6"],["/page/3/index.html","3f8e607b3c098db41bc2bc1caa99acec"],["/resources/4.5/5.1.1.html","e508718029e65a96cf50e0ddf5867d09"],["/resources/4.5/5.1.2.html","9fddf8c46205a25ca4d0c230b21730a6"],["/resources/4.5/5.2.1.html","635063c24b8fdd48dceef3cbcce22965"],["/resources/4.5/5.2.2.html","5f5b31f9ce63c8a302fefdc751be8f43"],["/resources/4.5/5.2.3.html","4731c52649ae1f2404154d12d09b43d4"],["/resources/4.5/5.3.1.html","a21a2e34ae8ab314d472b16ad8550e21"],["/resources/4.5/5.3.2.html","b5a0322a7f618f7999d708e1959542d8"],["/resources/4.5/5.3.3.html","ecb6447574b83a3eb3386b853a1d2261"],["/resources/4.5/5.3.4.html","5900cf920544b7c648bd619d79b8cf59"],["/resources/4.5/5.3.5.html","fad6d170fa164831027bfb68359d713b"],["/resources/4.5/5.4.1.html","97dc8f9026806b113e6c5a7dd2bf509c"],["/resources/4.5/5.4.2.html","a285f53c2eead574a42974139dd82363"],["/resources/4.5/5.4.3.html","873480b7511d95b3074aea10d44de385"],["/resources/4.5/5.4.4.html","e21a2d7e0b5a1ec25ffa2d4b5f9c068f"],["/resources/4.5/final.html","2b02f4645e0cca8bc46f14fe4ce0cefd"],["/resources/index.html","52ed81a4276015e23dfef3200d0ef8ec"],["/shuoshuo/index.html","64ad2718f9f14cd03ea275b06c3e4720"],["/sto/2018-010101.html","ba6a5cbcb7ee0595392f1fe122ac6abb"],["/sto/index.html","f3fbc5329c6c803e778f450fc817166b"],["/sw-register.js","51624e242e3a00a839f62ae4c0ed3527"],["/tags/computer-cpp/index.html","1ced4c2816d2810af1047d4703ea5c92"],["/tags/github/index.html","108fd992fb0e30e798c451c6fd96dde9"],["/tags/python/index.html","c4ea463d3dcaa008c2b14845b2d03ae2"],["/tags/teach，computer，cpp/index.html","d4bdbc02860a5de8b21e205e84db4232"],["/thoughts/index.html","b4357bb9cbbe2bd1c00c75b364f667ce"],["/videopoem/index.html","c542643852492cccf420f724e5e2e670"],["/wiki/calall-light/how_to_use.html","2513494946b9b1bd1b08ef4c3d67176a"],["/wiki/calall-light/index.html","ecbcea8d25aaed7f54a4f1870e3c0897"]];
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
