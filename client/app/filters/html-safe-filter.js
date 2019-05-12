const angular = require('angular')

angular.module("app").filter("htmlSafe", ["$sce", function (e) {
    return function (t) {
        return e.trustAsHtml(t)
    }
}])