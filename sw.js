/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/07/10/myfirstblog/index.html","9e4d183084e8fec6312c62bc3be3ee95"],["/2021/07/21/stl_use/index.html","c3c2804b768a7f1d76b2662a90c0b8c8"],["/2021/08/01/cpp-string/index.html","9ab5f170e703e2381d3d0570e3bd9d55"],["/2021/08/04/cpp-fstream/index.html","1ef1f84c00d3250cceddaff7e4e2f7f3"],["/2021/08/12/a-b-problem/index.html","c841fc06dc4a05dba83dd31c4517ff05"],["/2021/08/15/github-tokenerror/index.html","8483e8ba9cac3d1fd49612dd94cda8fc"],["/2021/08/19/c-global-variables-in-multiple-files/index.html","f420ba9a90a9e03698076742f833a78e"],["/2021/08/26/cpp-begin-1/index.html","1484fe5fc9d8fbcdbfdbe517286bd7b7"],["/2021/08/26/cpp-constructor-exception/index.html","25c015c2242fb1fa7b45c52ab20ef49c"],["/2021/08/26/lcs-suffix-array/index.html","5e2d819a459bf8e4b775965b61203b5e"],["/2021/08/26/python-matplotlib/index.html","758157183bae2ab4ce1eae7a0d002e21"],["/2021/08/29/cpp-if-else-question-1/index.html","8d5a912ce2a0a429b4e3ba51d6fa5ee8"],["/2021/08/29/github-speed-up-download/index.html","2307ca24a4369c698bd2decad5c90305"],["/2021/09/04/vpn-how-to-open/index.html","f3a4eda5b8fbae02764c61079e3a6607"],["/2021/09/12/2109poemsay/index.html","e8a23ec987bcf4861efba31e741af35c"],["/2021/10/01/21sportsmeet/index.html","4ea54466245cff89733755343808170d"],["/2021/10/05/cppluogu-p5380/index.html","a992458d2988f79c641cf571e407e8cb"],["/2021/10/09/wenyan-compile/index.html","d612ebad2c837b6385dddefe1380b7b5"],["/2021/10/30/zz_confuzi/index.html","ae96bcd6ce5440062349877b78206ff2"],["/2021/11/12/file-exe/index.html","5d0d07ec4da70098ca184ce16c3cbd32"],["/2021/12/04/1202ccf/index.html","4ec382575106a858e013d9c9682af533"],["/2021/12/19/xinxitest-gl/index.html","cc07d9d1ddd13eee888cd47bffd5faec"],["/2022/02/06/COVID-19-zbzydjq/index.html","da9facdceec6b33148846f18b8fb3ca4"],["/2022/02/22/cpp23-module/index.html","1140403f77889d2f38d09b82aac94a8d"],["/404.html","06b2669c92c949e1c7ff43a16dd5ed89"],["/about/index.html","a88efccbef065cfdc9f7d58b5d192196"],["/about/station.html","d4710e966fa8bd7ba98c65b4fe261bd0"],["/archives/2021/07/index.html","4bf8a5940401cceac1671e17392d9dc3"],["/archives/2021/08/index.html","7e39ce8b82f1a3022970db22c2bf10df"],["/archives/2021/08/page/2/index.html","964a80455dc12c96a4e3a59be8c6133d"],["/archives/2021/09/index.html","165784e2dad8d352ba5d6c98de569470"],["/archives/2021/10/index.html","25773d2b6a61a8cf7403ac9ede42e70d"],["/archives/2021/11/index.html","77305612c667eb4992b9b124237b1db5"],["/archives/2021/12/index.html","d5bd7aa45ce72ed15925220f7435e4fc"],["/archives/2021/index.html","61e08a91d33dd306d178b3df775af684"],["/archives/2021/page/2/index.html","9d697ac1d48e37f5c1ba62981d0d7803"],["/archives/2021/page/3/index.html","cb49a0a95b99dbb193f966ddc39bb653"],["/archives/2022/02/index.html","06c38a4d42a0ce3f976c4d83813fe282"],["/archives/2022/index.html","189df49594a491c9122c488dfc76514f"],["/archives/index.html","da2775681b2bd3de991fbd7690c4f312"],["/archives/page/2/index.html","5048b95367bd0736e320215e63a773de"],["/archives/page/3/index.html","a53f2ef97e214366519a06a1a090f21e"],["/baidu_verify_code-ymIFKBAamH.html","a4888159ff57317cfea1f758e716b0a8"],["/calall/1_0_db2.html","200f5e35b9b6981a072d64f0a863cb22"],["/calall/1_0_db3.html","328d4a4f1ce39e241e84d4ec8756a814"],["/calall/index.html","019e4187ca64731ff08c9df6a3b817da"],["/categories/index.html","b3d9c1f778b5c24c5740208f883f6951"],["/categories/南航苏州附中校园活动/index.html","501602db0938b788cb4941bcd9de86ad"],["/categories/日常经验/index.html","32f0507badcc18b8e05eccc1549c40cf"],["/categories/竞赛解法/index.html","5ce22241679e68463751f21e61f1f718"],["/categories/精华转载/index.html","54e9c88d7ffa624e3ffb940da360f008"],["/categories/编程算法/index.html","9684f1346cc9ca2481435b1fac03a746"],["/css/Readme.html","67a0194faa4ec902e15d51fea75556bd"],["/css/first.css","2216ad509fce056f741b5b66ca14dfb4"],["/css/message.css","ca2f839e9a41207ce4d486b75b0dc926"],["/css/style.css","b6d47f6f70d479f24555fabea6e6bd17"],["/faq/index.html","4bad3eba4c0d59ed153ce9b68a825f15"],["/game/index.html","9fd8bf0761acb087e5b2f036762e9dbe"],["/how-to-ask-q/ft.html","47feaed7d4d692e7752f697e8eb80908"],["/how-to-ask-q/index.html","a434e22b21afc2c192c941a7505a1a30"],["/index.html","6f920da82386779af660c3d6ddae643d"],["/js/aplayer.js","40a083642ab212371216044672d6f0d4"],["/js/app.js","5fc723ec197aa6215c5e7e1a7a9076c1"],["/js/message.js","a05a127c793145cec6b721f14fced3e5"],["/js/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/contributors.js","50566ed7a65c7a8ed00f81ac7e296ebd"],["/js/plugins/friends.js","a4a917ec8d015ae87ec4104fb53a4d6c"],["/js/plugins/sites.js","f2bbc29a32077a3cbfff221fc9637027"],["/js/rightMenu.js","3a4fed1dede847ada1ee56eabcf6c4f7"],["/js/search/hexo.js","a79c455b734acb6e7067d785ce4d5ed5"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/notes/index.html","6be316f436505f2737bec6d38b62e87e"],["/page/2/index.html","9838819169d6f343d0d366a97a344798"],["/page/3/index.html","7d7625f49bb10163b7dea0471a747ef0"],["/resources/4.5/5.1.1.html","63b0beb7fd18751da227bfa079a05184"],["/resources/4.5/5.1.2.html","603625b4ac02fc69000658877a1c6598"],["/resources/4.5/5.2.1.html","403041cdd1d0ce0ae434f407f7a73bb5"],["/resources/4.5/5.2.2.html","bb44c68ceaaa3008c67af13a018d4b39"],["/resources/4.5/5.2.3.html","0fa9b10ed10bb507847f6cb3a972b4a2"],["/resources/4.5/5.3.1.html","4ea22bfb9d4503c1139f58e55de1fd20"],["/resources/4.5/5.3.2.html","92aa9c369db618cc4a7360e5986ca0b5"],["/resources/4.5/5.3.3.html","465dc65a84f65e2d474e8a4e4a0b79e8"],["/resources/4.5/5.3.4.html","13ecd6bca4f227dd2801daff12c4b3ae"],["/resources/4.5/5.3.5.html","14bb89ceb14fcbc3808c7ceb17d85f98"],["/resources/4.5/5.4.1.html","b66b5ab1ea78fb04e13d08622f5af184"],["/resources/4.5/5.4.2.html","3615e0f4ad994f913b3b713578f52933"],["/resources/4.5/5.4.3.html","b9aecef9ebae98e4e755ed0207911d11"],["/resources/4.5/5.4.4.html","88019afd806bc396ef126d293219e943"],["/resources/4.5/final.html","24aa549fd419fa9ca369a41048c5d9f1"],["/resources/index.html","62876eae9016ef5234e9944f0fd8f258"],["/shuoshuo/index.html","0d5a282625637930d5cec862e975b869"],["/sto/2018-010101.html","fb21a637e971248dc005dcfc8067171f"],["/sto/index.html","944429d476d96a186cdf457c3ef1fc62"],["/sw-register.js","5515b328c9a72c163abb1813f30b73db"],["/tags/computer-cpp/index.html","524812c4b08c257c731574644ab3cae1"],["/tags/github/index.html","c74920e06ba9a88eac5b63d75982f2f8"],["/tags/python/index.html","e50342aec62b8f2cd7a5c1bb573c00ea"],["/tags/teach，computer，cpp/index.html","23b25fe038e2ad5c23fd80ccdf0f4cac"],["/thoughts/index.html","1575a091f0fafd227990d504bc835476"],["/videopoem/index.html","bea047318c1b0d04a887363548f691b2"],["/wiki/calall-light/how_to_use.html","22f9900b8192cf28106aec566bbfad13"],["/wiki/calall-light/index.html","d660c1a9f081df56a4722adefb7dc8f7"]];
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
