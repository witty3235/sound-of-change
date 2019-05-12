const angular = require('angular')

angular.module("app").controller("LanguageSwitchController", ["$scope", "$rootScope", "$translate", function (e, t, n, r) {
    e.changeLanguage = function (e) {
        n.use(e)
    };
    var i = 0;
    t.$on("$translateChangeSuccess", function (e, n) {
        var r = n.language;
        t.lang = r;
        i++;
        i > 1 && window.location.reload()
    })
}])