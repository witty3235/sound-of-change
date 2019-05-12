const angular = require('angular')

angular.module("app").service("$sound", ["$rootScope", "$cookies", function (e, t) {
    var n, r = [new buzz.sound("uploads/track6.mp3", {
        loop: !0,
        volume: 30
    }), new buzz.sound("uploads/track5.mp3", {
        loop: !0,
        volume: 30
    }), new buzz.sound("uploads/track1.mp3", {
        loop: !0,
        volume: 30
    }), new buzz.sound("uploads/track3.mp3", {
        loop: !0,
        volume: 30
    }), new buzz.sound("uploads/track4.mp3", {
        loop: !0,
        volume: 30
    })];
    this.muted = !!t.getObject("muted"), e.soundMuted = this.muted, this.stopActiveSound = function () {
        n && !this.muted && n.fadeOut(200)
    }, this.playActiveSound = function () {
        n && !this.muted && n.fadeTo(30, 200)
    }, this.playSound = function (e) {
        this.stopActiveSound(), n = r[e], this.muted || n.fadeTo(30, 200)
    }, this.mute = function () {
        this.stopActiveSound(), this.muted = !0, t.putObject("muted", !0), e.soundMuted = !0
    }, this.unmute = function () {
        this.muted = !1, t.remove("muted"), e.soundMuted = !1, n && n.fadeTo(30, 200)
    }
}])