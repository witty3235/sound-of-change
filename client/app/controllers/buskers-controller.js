const angular = require('angular')
const VIZ = require('vz')

angular.module("app").controller("BuskersCtrl", ["$rootScope", "$scope", "$timeout", "$state", "$stateParams", "$sound", function e(e, t, n, r, i, o) {
    function a(e) {
        h.playVideo();
        k = h.getDuration();
        var t = -1,
            n = 1e3,
            r = function () {
                if (t != -1 && h.getPlayerState() == YT.PlayerState.PLAYING && !dragging) {
                    var e = h.getCurrentTime(),
                        i = 360 / k * e;
                    orig.css({
                        strokeDasharray: pathLength,
                        strokeDashoffset: pathLength + pathLength / k * e - 4
                    });
                    target_wp.css("-moz-transform", "rotate(" + i + "deg)");
                    target_wp.css("-moz-transform-origin", "50% 50%");
                    target_wp.css("-webkit-transform", "rotate(" + i + "deg)");
                    target_wp.css("-webkit-transform-origin", "50% 50%");
                    target_wp.css("-o-transform", "rotate(" + i + "deg)");
                    target_wp.css("-o-transform-origin", "50% 50%");
                    target_wp.css("-ms-transform", "rotate(" + i + "deg)");
                    target_wp.css("-ms-transform-origin", "50% 50%")
                }
                t = h.getCurrentTime(), setTimeout(r, n)
            };
        setTimeout(r, n)
    }

    function s(e) {}

    function u(e) {
        $("html").removeClass("player-preloader"), k = h.getDuration()
    }

    function l() {
        videoBlock.find(".b_artist_video_controls_inset, .b_artist_video_controls_outset, .b_artist_video_controls_outset2, .b_artist_video_controls_close, .b_artist_video_controls_pause, #svg_seek, .draggable_wp").fadeIn(), videoBlock.find(".b_artist_video_data").removeClass("fadeOutDown").addClass("fadeInUp"), $("#footer .scroll-down").fadeIn(), clearTimeout(w), w = setTimeout(function () {
            videoBlock.find(".b_artist_video_controls_inset, .b_artist_video_controls_outset, .b_artist_video_controls_outset2, .b_artist_video_controls_close, .b_artist_video_controls_pause, #svg_seek, .draggable_wp").fadeOut(), videoBlock.find(".b_artist_video_data").removeClass("fadeInUp").addClass("fadeOutDown"), $("#footer .scroll-down").fadeOut()
        }, 2e3)
    }

    function c(e, t) {
        t = "undefined" != typeof t && t;
        var n = E[e - 1];
        if (t) {
            var r = $(".b_artist.active"),
                i = r.index(),
                o = $(".b_artist_" + e);
            $("#WebGL-output");
            if (o.find(".b_artist_name").html(n.aname), o.find(".b_artist_from").html(n.afrom), n.video || o.find(".b_artist_play").html('<span class="soon">&nbsp;</span>'), o.find(".b_artist_itunes a.itunes").attr("href", n.itunes), o.find(".b_artist_itunes a.gplay").attr("href", n.gplay), i > e) var a = "prev";
            else var a = "next";
            1 == e && ("prev" == a ? VIZ.BG.showImage("uploads/3.jpg", "slide_down", 2) : VIZ.BG.showImage("uploads/3.jpg", "slide_up", 2)), 2 == e && ("prev" == a ? VIZ.BG.showImage("uploads/4.jpg", "slide_down", 2) : VIZ.BG.showImage("uploads/4.jpg", "slide_up", 2)), 3 == e && ("prev" == a ? VIZ.BG.showImage("uploads/5.jpg", "slide_down", 2) : VIZ.BG.showImage("uploads/5.jpg", "slide_up", 2)), 4 == e && ("prev" == a ? VIZ.BG.showImage("uploads/7.jpg", "slide_down", 2) : VIZ.BG.showImage("uploads/7.jpg", "slide_up", 2)), 5 == e && ("prev" == a ? VIZ.BG.showImage("uploads/8.jpg", "slide_down", 2) : VIZ.BG.showImage("uploads/8.jpg", "slide_up", 2)), "prev" == a && (r.removeClass("fadeIn active animatedNow slideOutDown slideOutUp slideInDown slideInUp").addClass("animatedX2 slideOutDown"), r.find(".b_artist_video_controls_inset, .b_artist_video_controls_outset, .b_artist_video_controls_outset2").fadeOut(500), r.find(".b_artist_data, .b_artist_play").removeClass("slideOutDownSmall slideInDownSmall slideOutUpSmall slideInUpSmall").addClass("animatedX2 slideOutDownSmall"), o.find(".b_artist_video_controls_inset, .b_artist_video_controls_outset, .b_artist_video_controls_outset2").hide(), setTimeout(function () {
                o.find(".b_artist_video_controls_inset, .b_artist_video_controls_outset, .b_artist_video_controls_outset2").fadeIn(500)
            }, 1500), o.removeClass("fadeIn animatedNow slideOutDown slideOutUp slideInDown slideInUp").addClass("animatedX2 slideInDown active"), o.find(".b_artist_data, .b_artist_play").removeClass("slideOutDownSmall slideInDownSmall slideOutUpSmall slideInUpSmall").addClass("animatedX2 slideInDownSmall")), "next" == a && (r.removeClass("fadeIn active animatedNow slideOutDown slideOutUp slideInDown slideInUp").addClass("animatedX2 slideOutUp"), r.find(".b_artist_data, .b_artist_play").removeClass("slideOutDownSmall slideInDownSmall slideOutUpSmall slideInUpSmall").addClass("animatedX2 slideOutUpSmall"), r.find(".b_artist_video_controls_inset, .b_artist_video_controls_outset, .b_artist_video_controls_outset2").fadeOut(500), o.find(".b_artist_video_controls_inset, .b_artist_video_controls_outset, .b_artist_video_controls_outset2").hide(), setTimeout(function () {
                o.find(".b_artist_video_controls_inset, .b_artist_video_controls_outset, .b_artist_video_controls_outset2").fadeIn(500)
            }, 1500), o.removeClass("fadeIn animatedNow slideOutDown slideOutUp slideInDown slideInUp").addClass("animatedX2 slideInUp active"), o.find(".b_artist_data, .b_artist_play").removeClass("slideOutDownSmall slideInDownSmall slideOutUpSmall slideInUpSmall").addClass("animatedX2 slideInUpSmall"))
        } else {
            VIZ.BG || VIZ.BG.init(), VIZ.BG.showImage("uploads/3.jpg"), VIZ.CRIC_DOTS.deactivate();
            var s = $(".b_artist_" + e);
            $(".b_artist").addClass("animatedNow slideOutDown"), s.removeClass("slideOutDown").addClass("animatedNow slideInDown active"), s.find(".b_artist_name").html(n.aname), s.find(".b_artist_from").html(n.afrom), s.find(".b_artist_itunes a.itunes").attr("href", n.itunes), s.find(".b_artist_itunes a.gplay").attr("href", n.gplay)
        }
        videoBlock.find(".b_artist_name").html(n.aname), videoBlock.find(".b_artist_from").html(n.afrom)
    }

    function f(e) {
        A.find("audio").each(function () {
            this.pause(), this.currentTime = 0, $(this).parent().removeClass("play").addClass("pause")
        }), e && o.playActiveSound()
    }

    function p(e, t) {
        var n = t.duration,
            r = e.find(".player-update"),
            i = e.find(".player-update-path"),
            a = i.get(0),
            s = a.getTotalLength();
        e.is(":not(play)") && e.is(":not(stop)") && r.css({
            strokeDasharray: s,
            strokeDashoffset: s
        }), t.paused ? (o.stopActiveSound(), t.play(), e.removeClass("pause").addClass("play"), $("#footer .btn.btn-eq").fadeOut("slow")) : (o.playActiveSound(), t.pause(), t.currentTime = 0, e.removeClass("play").addClass("pause"), $("#footer .btn.btn-eq").fadeIn("slow")), $(t).bind("timeupdate", function () {
            var e = this.currentTime;
            r.css({
                strokeDasharray: s,
                strokeDashoffset: s + s / n * e,
                strokeWidth: "1px"
            })
        }), $(t).bind("ended", function () {
            o.playActiveSound(), e.removeClass("play").addClass("pause"), r.css({
                strokeDasharray: s,
                strokeDashoffset: s
            })
        })
    }

    function d(e) {
        f(!0);
        $("#footer .btn.btn-eq").fadeIn("slow");
        e < 1 ? (r.go("root.Intro"), $("#WebGL-output").removeClass("fadeIn animatedNow slideOutDown slideOutUp slideInDown slideInUp")) : e > 5 ? (r.go("root.AddMusician"), $("#WebGL-output").removeClass("fadeIn animatedNow slideOutDown slideOutUp slideInDown slideInUp")) : (c(e, !0), scrollOff = !0)
    }
    var h, m, v, g, y, b, w, x, C, k, S = 1,
        _ = localStorage.getItem("NG_TRANSLATE_LANG_KEY");
    if ("en" == _ || null == _) var E = [{
        aname: "Fernando<br/> Cruz",
        afrom: "madrid",
        itunes: "http://itunes.apple.com/album/id1068595286?ls=1&app=itunes",
        gplay: "https://play.google.com/store/music/album/Fernando_Cruz_Ginebra_feat_Sound_of_Change?id=Bumxwvth2hcehrhyx37dvgahtma&hl=ru",
        video: "UvMwOHY43SI"
    }, {
        aname: "Subterranean<br/> Street<br/> Society",
        afrom: "Amsterdam",
        itunes: "http://itunes.apple.com/album/id1091502929?ls=1&app=itunes",
        gplay: "https://play.google.com/store/music/album/Subterranean_Street_Society_Before_History_Repeats?id=B6ncwqr2adfdd677uwcwuzxe5ku&hl=ru",
        video: "mqwp2GhkKMQ"
    }, {
        aname: "Zal<br/> Juglar",
        afrom: "Moscow",
        itunes: "http://itunes.apple.com/album/id1089766612?ls=1&app=itunes",
        gplay: "https://play.google.com/store/music/album?id=Bzvw2xhlqrdgy3srbfhzpqqovoy&tid=song-Ttaog2eenefgdqa3xn7ngdvgqoi&hl=ru",
        video: "MoH5Qq7uXWc"
    }, {
        aname: "Kalachev<br/> Sergey",
        afrom: "Moscow",
        itunes: "http://itunes.apple.com/album/id1146196212?ls=1&app=itunes",
        gplay: "https://play.google.com/store/music/album/Сергей_Калачев_The_Moment?id=Bk6zcfjn2l3lc37udmfuls7qfqi&hl=ru",
        video: ""
    }, {
        aname: "Mark Kelly &<br/>Eric Bolduc",
        afrom: "Montreal",
        itunes: "http://itunes.apple.com/album/id1146194794?ls=1&app=itunes",
        gplay: "https://play.google.com/store/music/album/Mark_Kelly_Eric_Bolduc_Become_the_Change?id=Bivo3drt66qjo2mkxxpj7kejra4&hl=ru",
        video: ""
    }];
    else if ("ru" == _) var E = [{
        aname: "Fernando<br/> Cruz",
        afrom: "Мадрид",
        itunes: "http://itunes.apple.com/album/id1068595286?ls=1&app=itunes",
        gplay: "https://play.google.com/store/music/album/Fernando_Cruz_Ginebra_feat_Sound_of_Change?id=Bumxwvth2hcehrhyx37dvgahtma&hl=ru",
        video: "UvMwOHY43SI"
    }, {
        aname: "Subterranean<br/> Street<br/> Society",
        afrom: "Амстердам",
        itunes: "http://itunes.apple.com/album/id1091502929?ls=1&app=itunes",
        gplay: "https://play.google.com/store/music/album/Subterranean_Street_Society_Before_History_Repeats?id=B6ncwqr2adfdd677uwcwuzxe5ku&hl=ru",
        video: "mqwp2GhkKMQ"
    }, {
        aname: "Zal<br/> Juglar",
        afrom: "Москва",
        itunes: "http://itunes.apple.com/album/id1089766612?ls=1&app=itunes",
        gplay: "https://play.google.com/store/music/album?id=Bzvw2xhlqrdgy3srbfhzpqqovoy&tid=song-Ttaog2eenefgdqa3xn7ngdvgqoi&hl=ru",
        video: "MoH5Qq7uXWc"
    }, {
        aname: "Kalachev<br/> Sergey",
        afrom: "Москва",
        itunes: "http://itunes.apple.com/album/id1146196212?ls=1&app=itunes",
        gplay: "https://play.google.com/store/music/album/Сергей_Калачев_The_Moment?id=Bk6zcfjn2l3lc37udmfuls7qfqi&hl=ru",
        video: ""
    }, {
        aname: "Mark Kelly &<br/>Eric Bolduc",
        afrom: "Монреаль",
        itunes: "http://itunes.apple.com/album/id1146194794?ls=1&app=itunes",
        gplay: "https://play.google.com/store/music/album/Mark_Kelly_Eric_Bolduc_Become_the_Change?id=Bivo3drt66qjo2mkxxpj7kejra4&hl=ru",
        video: ""
    }];
    var A = angular.element(document).find(".b_artist"),
        nameBlock = A.find(".b_artist_name"),
        fromBlock = A.find(".b_artist_from"),
        itunesBlock = A.find(".b_artist_itunes"),
        videoBlock = angular.element(document).find(".b_artist_video"),
        videoSeekRange = document.getElementById("video_seek"),
        orig = videoBlock.find("#svg_seek"),
        playBtn = A.find("#svg_play_btn"),
        pauseBtn = videoBlock.find(".b_artist_video_controls_pause"),
        closeBtn = videoBlock.find(".b_artist_video_controls_close"),
        target_wp = videoBlock.find(".draggable_wp"),
        dragging = !1,
        path = document.querySelector("#svg_seek path"),
        pathLength = path.getTotalLength(),
        videoFile = E[0].video,
        scrollOff = !0;

    t.pushTimeout(n(function () {
        scrollOff = !1
    }, 1e3));
    c(i.artistId ? i.artistId : S);

    var T = $("body").find("#artistbg2"),
        M = $(window).width(),
        I = $(window).height();
    closeBtn.click(function () {
        o.playActiveSound();
        $("html").removeClass("player-active");
        clearTimeout(w);
        document.removeEventListener("mousemove", function () {
            l()
        });
        scrollOff = !1;
        h.pauseVideo();
        $(".b_artist.active").show();
        $("#footer").find(".scroll-down").fadeIn();
        videoBlock.find(".b_artist_video_data").removeClass("fadeInUp").addClass("fadeOutDown");
        videoBlock.find(".b_artist_video_controls").removeClass("fadeIn").addClass("fadeOut");
        videoBlock.removeClass("fadeIn").addClass("fadeOut");
        $("#footer .btn.btn-eq").fadeIn("slow");
        pauseBtn.removeClass("paused");
        setTimeout(function () {
            videoBlock.hide();
            h.stopVideo()
        }, 2e3)
    });
    pauseBtn.click(function () {
        clearTimeout(w);
        pauseBtn.is(".paused") ? (pauseBtn.removeClass("paused"), h.playVideo()) : (pauseBtn.addClass("paused"), h.pauseVideo())
    });
    playBtn.click(function () {
        scrollOff = !0, f(!1);
        o.stopActiveSound();
        $("html").addClass("player-active player-preloader");
        document.addEventListener("mousemove", function () {
            l()
        });
        E[S - 1].video ? videoFile = E[S - 1].video : videoFile = E[$(this).parent(".b_artist").index()].video;
        h ? h.loadVideoById({
            videoId: videoFile
        }) : h = new YT.Player("ytplayer", {
            height: "315",
            width: "560",
            videoId: videoFile,
            playerVars: {
                autohide: 0,
                autoplay: 1,
                cc_load_policy: 1,
                controls: 0,
                showinfo: 0,
                modestbranding: 1,
                rel: 0
            },
            events: {
                onReady: a,
                onError: s,
                onStateChange: u
            }
        });

        orig.css({
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
        });
        videoBlock.css({
            opacity: 0,
            zIndex: 5
        }).show().removeClass("fadeOut").addClass("animated fadeIn");
        $("#footer").find(".scroll-down").fadeOut();
        videoBlock.find(".b_artist_video_data").removeClass("fadeOutDown").addClass("animated fadeInUp");
        videoBlock.find(".b_artist_video_controls").removeClass("fadeOut").addClass("animated fadeIn");
        $("#footer .btn.btn-eq").fadeOut("slow");
        pauseBtn.removeClass("paused");
        setTimeout(function () {}, 1e3)
    });
    $(".player").click(function () {
        var e = $(this).attr("pid"),
            t = document.getElementById("artist" + e + "-music");
        return p($(this), t), !1
    });

    videoBlock.find(".handle").mousedown(function (e) {
        g = e.pageX;
        y = e.pageY;
        e.preventDefault();
        e.stopPropagation();
        x = h.getCurrentTime();
        C = h.getDuration();
        dragging = !0;
        target_wp.data("origin") || target_wp.data("origin", {
            left: target_wp.offset().left,
            top: target_wp.offset().top
        });
        m = target_wp.data("origin").left;
        v = target_wp.data("origin").top;
        b = target_wp.data("last_angle") || 0
    });
    angular.element(document).mousemove(function (e) {
        if (dragging) {
            var t = e.pageX,
                n = e.pageY;
            if (t !== m && n !== v) {
                var r = Math.atan2(n - v, t - m);
                r -= Math.atan2(y - v, g - m), r += b;
                var i = r * (360 / (2 * Math.PI));
                i < 0 && (i = 360 + i), i > 360 && (i = 360), orig.css({
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength + pathLength / 360 * i - 4
                });
                target_wp.css("-moz-transform", "rotate(" + i + "deg)");
                target_wp.css("-moz-transform-origin", "50% 50%");
                target_wp.css("-webkit-transform", "rotate(" + i + "deg)");
                target_wp.css("-webkit-transform-origin", "50% 50%");
                target_wp.css("-o-transform", "rotate(" + i + "deg)");
                target_wp.css("-o-transform-origin", "50% 50%");
                target_wp.css("-ms-transform", "rotate(" + i + "deg)");
                target_wp.css("-ms-transform-origin", "50% 50%")
            }
        }
        var o, a, s;
        event = event || window.event;
        null == event.pageX && null != event.clientX && (o = event.target && event.target.ownerDocument || document, a = o.documentElement, s = o.body, event.pageX = event.clientX + (a && a.scrollLeft || s && s.scrollLeft || 0) - (a && a.clientLeft || s && s.clientLeft || 0), event.pageY = event.clientY + (a && a.scrollTop || s && s.scrollTop || 0) - (a && a.clientTop || s && s.clientTop || 0))
        mouse_x = event.pageX;
        mouse_y = event.pageY;
        qwe = mouse_x / M || 0;
        asd = mouse_y / I || 0;
        var u = "perspective(1280px) translateX(" + (5 * qwe - 2.5) + "%) translateY(" + (5 * asd - 2.5) + "%) rotateX(" + 3 * -(4 * asd - 2) + "deg) rotateY(" + 3 * -(4 * qwe - 2) + "deg)";
        T.css({
            transform: u,
            "-moz-transform": u,
            "-webkit-transform": u,
            "-o-transform": u,
            "-ms-transform": u
        })
    });
    angular.element(document).mouseup(function (e) {
        var t = e.pageX,
            n = e.pageY,
            r = Math.atan2(n - v, t - m);
        if (r -= Math.atan2(y - v, g - m), r += b, target_wp.data("last_angle", r), dragging) {
            var i = r * (360 / (2 * Math.PI));
            i < 0 && (i = 360 + i), i > 360 && (i = 360);
            var o = h.getDuration() * (i / 360);
            h.seekTo(o, !0)
        }
        dragging = !1
    });
    angular.element(window).bind("mousewheel.buskers", function (e) {
        scrollOff || (timeoutScrollOff = setTimeout(function () {
            scrollOff = !1
        }, 2100), e.deltaY < 0 ? S++ : S--, d(S))
    });
    angular.element(window).bind("keydown.buskers", function (e) {
        if (!scrollOff) {
            if (timeoutScrollOff = setTimeout(function () {
                    scrollOff = !1
                }, 2100), 40 == e.which) S++;
            else {
                if (38 != e.which) return;
                S--
            }
            console.log("keydown with key %s and artist %s", e.which, S), d(S)
        }
    });
    t.waitInit(function () {
        o.playSound(2);
        VIZ.BG.showImage("uploads/3.jpg");
        VIZ.CRIC_DOTS.deactivate()
    });
    t.$once("$stateChangeStart", function (e, t, n) {
        angular.element(window).unbind("mousewheel.buskers");
        angular.element(window).unbind("keydown.buskers")
    })
}]);