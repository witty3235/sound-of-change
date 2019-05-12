const VIZ = require('vz')

function e() {
    VIZ.CRIC_DOTS.init("uploads/dot16.png");
    VIZ.BG.init("uploads/black.png", function () {})
}

var t;
$(function () {
    t = $("#root");
    $("#main-menu").each(function () {
        var e = $(this),
            t = $(".btn-menu", this),
            n = $(".btn-close", this);
        t.click(function () {
            e.addClass("is-shown")
        }), n.click(function () {
            e.removeClass("is-shown")
        })
    })
});

$(window).load(function () {
    $("body").addClass("is-loaded");
    VIZ.init(e)
});

$(window).bind("load resize", function () {})