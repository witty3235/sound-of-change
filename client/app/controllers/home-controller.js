const angular = require('angular')
const VIZ = require('vz')

angular.module("app").controller("HomeCtrl", ["$scope", "$timeout", "$interval", "$sound", "$state", function e(e, t, n, r, i) {
    r.playSound(0);
    e.waitInit(function () {
        VIZ.BG.showImage("uploads/1.jpg");
        e.pushTimeout(t(function () {
            angular.element(window).bind("mousewheel.home", function (e) {
                e.deltaY < 0 && i.go("root.Intro")
            });
            angular.element(window).bind("keydown.home", function (e) {
                40 == e.which && i.go("root.Intro")
            })
        }, 1e3))
    });

    e.$once("$stateChangeStart", function (e, t, n) {
        angular.element(window).unbind("mousewheel.home");
        angular.element(window).unbind("keydown.home")
    })
}])

