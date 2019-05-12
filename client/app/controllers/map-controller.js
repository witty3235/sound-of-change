const angular = require('angular')
const MarkerClusterer = require('@google/markerclustererplus')
const VIZ = require('vz')

angular.module("app").controller("MapCtrl", ["$rootScope", "$scope", "$http", "$timeout", "$state", "$sound", function e(e, t, n, r, i, o) {
    o.stopActiveSound();
    var a, s = [],
        u = !0,
        l = [],
        c = null,
        f = [{
            height: 40,
            width: 40,
            url: "img/marker_m.png"
        }, {
            height: 60,
            width: 60,
            url: "img/marker_b.png"
        }, {
            height: 80,
            width: 80,
            url: "img/marker_m.png"
        }];
    t.counter = 0;
    t.pushTimeout(r(function () {
        u = !1
    }, 3e3));
    VIZ.BG.showImage("uploads/black.png");
    angular.element(".btn-map-zoomin").bind("click", function (e) {
        a.setZoom(a.getZoom() + 1)
    });
    angular.element(".btn-map-zoomout").bind("click", function (e) {
        a.setZoom(Math.max(a.getZoom() - 1, 3))
    });
    angular.element(window).bind("mousewheel.map", function (e) {
        return !u && void(e.deltaY < 0 ? i.go("root.Feedback") : i.go("root.AddMusician"))
    });
    angular.element(window).bind("keydown.map", function (e) {
        if (u) return !1;
        if (40 == e.which) i.go("root.Feedback");
        else {
            if (38 != e.which) return;
            i.go("root.AddMusician")
        }
    });

    n({
        method: "GET",
        url: "/video/?limit=0"
    }).success(function (e, n) {
        function r(e, t) {
            return cases = [2, 0, 1, 1, 1, 2], t[e % 100 > 4 && e % 100 < 20 ? 2 : cases[e % 10 < 5 ? e % 10 : 5]]
        }
        a = new google.maps.Map(document.getElementById("map"), {
            center: new google.maps.LatLng(37.996162679728116, (-96.328125)),
            zoom: 3,
            disableDefaultUI: !0,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            scrollwheel: !1
        });
        angular.forEach(e.data, function (e) {
            if (e.enabled && e.latitude && e.longitude) {
                var t = new google.maps.LatLng(e.latitude, e.longitude),
                    n = "<h3>" + e.title + '</h3><video width="296" height="296" loop="loop" src="' + e.file[0].route + '"></video><p><a target="_blank" href="' + e.href + '">' + e.href + "</a></p>",
                    r = new InfoBubble({
                        backgroundClassName: "map-video",
                        backgroundColor: "transparent",
                        minWidth: 421,
                        minHeight: 421,
                        padding: 0,
                        borderRadius: 0,
                        shadowStyle: 0,
                        borderWidth: 0,
                        arrowStyle: 0,
                        hideCloseButton: !0,
                        disableAutoPan: !0,
                        content: n
                    });
                s.push(r);
                var i = new google.maps.MarkerImage("img/marker.png", null, new google.maps.Point(0, 0), new google.maps.Point(10, 10)),
                    o = new google.maps.Marker({
                        position: t,
                        map: a,
                        icon: i
                    });
                l.push(o);
                var c;
                o.addListener("mouseover", function () {
                    r.isOpen_ || (u = !0, c = setTimeout(function () {
                        r.open(a, o), setTimeout(function () {
                            r.contentContainer_.querySelector("video").play()
                        })
                    }, 500))
                }), o.addListener("mouseout", function () {
                    clearTimeout(c), r.close(), u = !1;
                    var e = r.contentContainer_.querySelector("video");
                    e && e.pause()
                })
            }
        });
        c = new MarkerClusterer(a, l, {
            gridSize: 10,
            styles: f,
            zoomOnClick: !1,
            maxZoom: 7
        });
        google.maps.event.addListener(c, "mouseover", function (e) {
            e.clusterIcon_.div_.style.transition = "transform 0.1s linear";
            e.clusterIcon_.div_.style.transform = "scale(1.1)"
        });
        google.maps.event.addListener(c, "mouseout", function (e) {
            e.clusterIcon_.div_.style.transform = "scale(1)"
        });
        google.maps.event.addListener(c, "click", function (e) {
            a.fitBounds(e.bounds_), a.setZoom(a.getZoom() + 3)
        });
        t.counter = e.count;
        t.counter_txt = r(e.count, ["музыкант", "музыканта", "музыкантов"])
    })

    t.$once("$stateChangeStart", function (e, t, n) {
        angular.element(window).unbind("mousewheel.map");
        angular.element(window).unbind("keydown.map");
        angular.forEach(s, function (e) {
            e.close();
            var t = e.contentContainer_.querySelector("video");
            t && t.pause()
        })
    })
}])