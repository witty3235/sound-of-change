const angular = require('angular')
const VIZ = require('vz')

angular.module("app").controller("FeedbackCtrl", ["$rootScope", "$scope", "$interval", "$timeout", "$http", "$sound", "$state", function e(e, t, n, r, i, o, a) {
    o.playSound(4);
    var s = !0;
    t.pushTimeout(r(function () {
        s = !1
    }, 1e3));
    t.waitInit(function () {
        VIZ.BG.showImage("uploads/6.jpg");
        t.pushTimeout(r(function () {
            angular.element(window).bind("mousewheel.feedback", function (n) {
                return !s && void(n.deltaY < 0 ? t.showForm || (e.hideScrollDown = !0, t.showForm = !0, t.$apply(), t.pushTimeout(r(function () {
                    angular.element('[name="fullname"]').focus()
                }, 2500)), t.openAdditional = function () {
                    console.log("mousewheel.feedback", "openAdditional");
                    t.additionalShown = !0;
                    e.inverseColors = !0;
                    angular.element('[name="addinfo"]').focus()
                }) : a.go("root.Map"))
            });
            angular.element(window).bind("keydown.feedback", function (n) {
                if (s)
                    return !1;

                if (40 == n.which)
                    t.showForm || (e.hideScrollDown = !0, t.showForm = !0, t.$apply(), t.pushTimeout(r(function () {
                        angular.element('[name="fullname"]').focus()
                    }, 2500)), t.openAdditional = function () {
                        console.log("keydown.feedback", "openAdditional");
                        t.additionalShown = !0;
                        e.inverseColors = !0;
                        angular.element('[name="addinfo"]').focus()
                    });
                else {
                    if (38 != n.which)
                        return;
                    a.go("root.Map")
                }
            })
        }, 1600))
    });
    t.processForm = function () {
        t.loading = !0, i({
            method: "POST",
            url: "/feedback/create/",
            data: t.formData
        }).error(function (e) {
            e && e.error
        }).success(function (n) {
            if (n.success) {
                t.loading = !1;
                t.successShown = !0;
                e.inverseColors = !0;
                $('form[name="feedbackForm"]').find("input[type=text], input[type=email]").val("")
            }
        })
    };
    t.closePopup = function () {
        s = !1;
        t.successShown = !1;
        t.additionalShown = !1;
        e.inverseColors = !1
    };
    t.$once("$stateChangeStart", function (t, n, r) {
        angular.element(window).unbind("mousewheel.feedback");
        angular.element(window).unbind("keydown.feedback");
        e.inverseColors = !1;
        e.hideScrollDown = !1
    })
}])