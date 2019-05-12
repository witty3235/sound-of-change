const angular = require('angular')
const VIZ = require('vz')

angular.module("app").controller("IntroCtrl", ["$rootScope", "$scope", "$timeout", "$interval", "$state", "$sound", function e(e, t, n, r, i, o) {
    var a = 1,
        s = !0;
    o.playSound(1);
    t.showBlock = function (e) {
        switch (e) {
            case 1:
                VIZ.showBlock("guitarist");
                break;
            case 2:
                VIZ.showBlock("logo");
                break;
            case 3:
                VIZ.showBlock("girl");
                break;
            case 4:
                VIZ.showBlock("hat")
        }
        s = !0;
        t.pushTimeout(n(function () {
            s = !1
        }, 3e3))
    };
    t.waitInit(function () {
        VIZ.BG.showImage("uploads/2.jpg");
        VIZ.CRIC_DOTS.deactivate();

        t.pushTimeout(n(function () {
            VIZ.LINE.activate()
        }, 1e3));
        t.pushTimeout(n(function () {
            s = !1, t.showBlock(1)
        }, 2500));

        angular.element(window).bind("mousewheel.intro", function (e) {
            return !s && (e.deltaY < 0 ? a++ : a--, t.showBlock(a), void(a < 1 ? i.go("root") : a > 4 && i.go("root.Buskers")))
        });
        angular.element(window).bind("keydown.intro", function (e) {
            if (s) return !1;
            if (40 == e.which) a++;
            else {
                if (38 != e.which) return;
                a--
            }
            t.showBlock(a);
            a < 1 ? i.go("root") : a > 4 && i.go("root.Buskers")
        })
    });
    t.$once("$stateChangeStart", function (e, t, r) {
        e.preventDefault();
        VIZ.CAPTION.hideText();
        VIZ.LINE.deactivate();
        VIZ.CRIC_DOTS.activate();
        angular.element(window).unbind("mousewheel.intro");
        angular.element(window).unbind("keydown.intro"), n(function () {
            i.go(t, r)
        }, 2e3)
    })
}])