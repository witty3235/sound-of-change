const angular = require('angular')
const VIZ = require('vz')

// module definition
angular.module("app", ["ui.router", "ngAnimate", "ngCookies", "pascalprecht.translate"]);

// controllers
require('./controllers/add-musician-controller')
require('./controllers/buskers-controller')
require('./controllers/feedback-controller')
require('./controllers/home-controller')
require('./controllers/intro-controller')
require('./controllers/language-switch-controller')
require('./controllers/map-controller')
// services
require('./services/sound-service')
// filters
require('./filters/html-safe-filter')

// global
require('./global')

// config and run
angular.module("app")
    // translate configuration
    .config(["$translateProvider", function (e) {
        e.useStaticFilesLoader({
            prefix: "/translations/",
            suffix: ".json"
        }).preferredLanguage("en").useLocalStorage().useMissingTranslationHandlerLog()
    }])

    // Route configuration
    .config(["$stateProvider", "$urlRouterProvider", "$urlMatcherFactoryProvider", "$provide", function (e, t, n, r) {
        e.state("root", {
            url: "/",
            data: {
                stateIndex: 1
            },
            views: {
                "screen@": {
                    templateUrl: "/view/screen-home.html",
                    controller: "HomeCtrl"
                }
            }
        }).state("root.Intro", {
            url: "intro/",
            data: {
                stateIndex: 2
            },
            views: {
                "screen@": {
                    controller: "IntroCtrl"
                }
            }
        }).state("root.Buskers", {
            url: "buskers/:artistId",
            data: {
                stateIndex: 3
            },
            views: {
                "screen@": {
                    templateUrl: "/view/screen-buskers.html",
                    controller: "BuskersCtrl"
                }
            }
        }).state("root.AddMusician", {
            url: "addmusician/",
            data: {
                stateIndex: 4
            },
            views: {
                "screen@": {
                    templateUrl: "/view/screen-addmusician.html",
                    controller: "AddMusicianCtrl"
                }
            }
        }).state("root.Map", {
            url: "map/",
            data: {
                stateIndex: 5
            },
            views: {
                "screen@": {
                    templateUrl: "/view/screen-map.html",
                    controller: "MapCtrl"
                }
            }
        }).state("root.Feedback", {
            url: "feedback/",
            data: {
                stateIndex: 6
            },
            views: {
                "screen@": {
                    templateUrl: "/view/screen-feedback.html",
                    controller: "FeedbackCtrl"
                }
            }
        }).state("404", {});
        
        t.when("", "/");
        n.strictMode(!1);
        t.otherwise(function (e, t) {
            e.invoke(["$state", function (e) {
                e.go("404")
            }])
        })
    }])

    // http defaults and interceptors
    .config(["$httpProvider", function (e) {
        e.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
        e.defaults.headers.common.Accept = "application/json";
        e.defaults.transformRequest = [function (e) {
            var t = function (e) {
                var n, r, i, o, a, s, u, l = "";
                for (n in e)
                    if (r = e[n], r instanceof Array)
                        for (u = 0; u < r.length; ++u) a = r[u], i = n + "[" + u + "]", s = {}, s[i] = a, l += t(s) + "&";
                    else if (r instanceof Object)
                    for (o in r) a = r[o], i = n + "[" + o + "]", s = {}, s[i] = a, l += t(s) + "&";
                else void 0 !== r && null !== r && (l += encodeURIComponent(n) + "=" + encodeURIComponent(r) + "&");
                return l.length ? l.substr(0, l.length - 1) : l
            };
            return angular.isObject(e) && "[object File]" !== String(e) ? t(e) : e
        }];
        
        e.interceptors.push(["$q", "$location", "$window", "$injector", function (e, t, n, r) {
            return {
                request: function (t) {
                    return /^\/view/.test(t.url) && "localhost" !== location.hostname && (t.url = "/themes/frontend" + t.url), t || e.when(t)
                }
            }
        }])
    }])

    .config(["$provide", function (e) {
        e.decorator("$rootScope", ["$delegate", function (e) {
            var t = e.__proto__.constructor;
            return t.prototype.$once = function (e, t) {
                var n = this.$on(e, function () {
                    n(), t.apply(this, arguments)
                });
                return n
            }, e
        }])
    }])

    .run(["$rootScope", "$state", "$timeout", "$interval", "$sound", function (e, t, n, r, i) {
        e.lang = "en";
        e.$on("$stateChangeSuccess", function (t, n) {
            angular.element("#main-menu").removeClass("is-shown");
            e.data = n.data
        });
        e.$on("$stateChangeStart", function (t, n, r) {
            e.clearTimeouts()
        });
        e.toggleMuteSound = function () {
            i.muted ? i.unmute() : i.mute()
        };
        var o = [];
        e.pushTimeout = function (e) {
            o.push(e)
        };
        e.clearTimeouts = function (e) {
            for (;;) {
                var e = o.pop();
                if (!e) break;
                n.cancel(e)
            }
        };
        e.waitInit = function (e) {
            if (VIZ.BG.is_inited) return e();
            var t = r(function () {
                VIZ.BG.is_inited && (e(), r.cancel(t))
            }, 50)
        };
        e.openBeeline = function () {
            return $("#main-menu").removeClass("is-shown"), e.scrollLock = !0, e.beelineShown = !0, e.inverseColors = !0, !1
        };
        e.closeBeeline = function () {
            e.scrollLock = !1;
            e.beelineShown = !1;
            e.inverseColors = !1
        }
    }])