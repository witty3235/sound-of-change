const angular = require('angular')
const VIZ = require('vz')

angular.module("app").controller("AddMusicianCtrl", ["$rootScope", "$scope", "$interval", "$timeout", "$state", "$sound", function e(e, t, n, r, i, o) {
    var a = 1,
        s = !1;
    o.playSound(3);
    t.showBlock = function (e) {
        switch (e) {
            case 1:
                VIZ.showBlock("title_1");
                VIZ.BG.showImage("uploads/2.jpg?" + Math.random());
                break;
            case 2:
                VIZ.showBlock("dot_guitarist");
                break;
            case 3:
                VIZ.showBlock("dot_city");
                break;
            case 4:
                VIZ.showBlock("dot_phone_contact");
                break;
            case 5:
                VIZ.showBlock("dot_phone")
        }
        s = !0, t.pushTimeout(r(function () {
            s = !1
        }, 3e3))
    }
    t.waitInit(function () {
        VIZ.LINE_DOTS.activate();
        t.showBlock(1);
        angular.element(window).bind("mousewheel.addmusician", function (e) {
            return !s && (e.deltaY < 0 ? a++ : a--, t.showBlock(a), void(a < 1 ? i.go("root.Buskers") : a > 5 && i.go("root.Map")))
        });
        angular.element(window).bind("keydown.addmusician", function (e) {
            if (s) return !1;
            if (40 == e.which) a++;
            else {
                if (38 != e.which)
                    return;
                a--
            }
            t.showBlock(a), a < 1 ? i.go("root.Buskers") : a > 5 && i.go("root.Map")
        })
    });
    t.$once("$stateChangeStart", function (e, t, n) {
        e.preventDefault();
        VIZ.LINE_DOTS.deactivate();
        VIZ.CAPTION.hideText();
        angular.element(window).unbind("mousewheel.addmusician");
        angular.element(window).unbind("keydown.addmusician"), r(function () {
            i.go(t, n)
        }, 1500)
    })
}])